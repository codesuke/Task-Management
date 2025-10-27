// In a production environment, you would use a database and proper password hashing
// This is a simplified version for demonstration purposes

// Temporary in-memory storage (replace with actual database)
const users = [];

const authController = {
  // Handle user signup
  signup: async (req, res) => {
    try {
      const { firstName, lastName, username, email, password } = req.body;

      // Validation
      if (!firstName || !lastName || !username || !email || !password) {
        return res.status(400).json({
          success: false,
          message: 'All fields are required'
        });
      }

      // Check if user already exists
      const existingUser = users.find(
        user => user.email === email || user.username === username
      );

      if (existingUser) {
        return res.status(409).json({
          success: false,
          message: 'User with this email or username already exists'
        });
      }

      // Validate password length
      if (password.length < 8) {
        return res.status(400).json({
          success: false,
          message: 'Password must be at least 8 characters long'
        });
      }

      // In production, hash the password using bcrypt
      // const hashedPassword = await bcrypt.hash(password, 10);

      // Create new user
      const newUser = {
        id: users.length + 1,
        firstName,
        lastName,
        username,
        email,
        password, // In production, store hashedPassword
        createdAt: new Date().toISOString()
      };

      users.push(newUser);

      // Don't send password back to client
      const { password: _, ...userWithoutPassword } = newUser;

      res.status(201).json({
        success: true,
        message: 'User registered successfully',
        user: userWithoutPassword
      });
    } catch (error) {
      console.error('Signup error:', error);
      res.status(500).json({
        success: false,
        message: 'Server error during signup'
      });
    }
  },

  // Handle user login
  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).json({
          success: false,
          message: 'Email and password are required'
        });
      }

      // Find user
      const user = users.find(u => u.email === email);

      if (!user) {
        return res.status(401).json({
          success: false,
          message: 'Invalid credentials'
        });
      }

      // In production, use bcrypt to compare passwords
      // const isValidPassword = await bcrypt.compare(password, user.password);
      const isValidPassword = password === user.password;

      if (!isValidPassword) {
        return res.status(401).json({
          success: false,
          message: 'Invalid credentials'
        });
      }

      // In production, generate JWT token
      const { password: _, ...userWithoutPassword } = user;

      res.json({
        success: true,
        message: 'Login successful',
        user: userWithoutPassword
      });
    } catch (error) {
      console.error('Login error:', error);
      res.status(500).json({
        success: false,
        message: 'Server error during login'
      });
    }
  },

  // Handle social login (Google, Github, Gitlab)
  socialLogin: async (req, res) => {
    try {
      const { provider, profileData } = req.body;

      if (!provider || !profileData) {
        return res.status(400).json({
          success: false,
          message: 'Provider and profile data are required'
        });
      }

      // In production, implement actual OAuth flow
      // For now, just create/find user based on email
      let user = users.find(u => u.email === profileData.email);

      if (!user) {
        user = {
          id: users.length + 1,
          firstName: profileData.firstName || '',
          lastName: profileData.lastName || '',
          username: profileData.email.split('@')[0],
          email: profileData.email,
          provider,
          createdAt: new Date().toISOString()
        };
        users.push(user);
      }

      res.json({
        success: true,
        message: 'Social login successful',
        user
      });
    } catch (error) {
      console.error('Social login error:', error);
      res.status(500).json({
        success: false,
        message: 'Server error during social login'
      });
    }
  }
};

module.exports = authController;
