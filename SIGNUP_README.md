# SignUp Page Setup Guide

## Overview
This is a modern signup page implementation with separate frontend (Next.js) and backend (Node.js + Express) architecture.

## Color Scheme
- Background: `#000000`
- Secondary Background: `#0A0A0A`
- Primary Text: `#FFFFFF`
- Muted Text: `#A8A8A8`
- Accent Lines: `#E0E0E0`
- Error: `#4D4D4D`
- Success: `#808080`
- Hover: `rgba(255,255,255,0.85)`
- Primary Accent: `#CCFF00` (Yellow-green)

## Fonts
- **Kode Mono**: Used for body text, form inputs, and buttons
- **Orbitron**: Used for headings and brand text

## Setup Instructions

### Frontend (xpfarm)

1. **Navigate to the frontend directory:**
   ```bash
   cd xpfarm
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create environment file:**
   Create a `.env.local` file in the `xpfarm` directory:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:5000
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Access the signup page:**
   Open [http://localhost:3000/signup](http://localhost:3000/signup) in your browser

### Backend (xpfarm_backend)

1. **Navigate to the backend directory:**
   ```bash
   cd xpfarm_backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create environment file:**
   Create a `.env` file in the `xpfarm_backend` directory:
   ```env
   PORT=5000
   NODE_ENV=development
   ```

4. **Run the backend server:**
   ```bash
   npm run dev
   ```
   Or for production:
   ```bash
   npm start
   ```

5. **Test the backend:**
   The backend will be running at [http://localhost:5000](http://localhost:5000)

## API Endpoints

### Authentication Routes

#### POST `/api/auth/signup`
Register a new user.

**Request Body:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "username": "johndoe",
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "success": true,
  "message": "User registered successfully",
  "user": {
    "id": 1,
    "firstName": "John",
    "lastName": "Doe",
    "username": "johndoe",
    "email": "john@example.com",
    "createdAt": "2025-10-25T12:00:00.000Z"
  }
}
```

#### POST `/api/auth/login`
Login an existing user.

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

#### POST `/api/auth/social-login`
Handle social authentication (Google, GitHub, GitLab).

**Request Body:**
```json
{
  "provider": "google",
  "profileData": {
    "email": "john@example.com",
    "firstName": "John",
    "lastName": "Doe"
  }
}
```

#### GET `/health`
Health check endpoint.

## Features

### Frontend Features
- ✅ Responsive design (mobile and desktop)
- ✅ Custom font integration (Kode Mono & Orbitron)
- ✅ Form validation
- ✅ Password visibility toggle
- ✅ Social login buttons (Google, GitHub, GitLab)
- ✅ Error and success message handling
- ✅ Loading states
- ✅ Hover effects and transitions
- ✅ Dark theme design

### Backend Features
- ✅ RESTful API structure
- ✅ CORS enabled for cross-origin requests
- ✅ Input validation
- ✅ Error handling middleware
- ✅ User registration endpoint
- ✅ Login endpoint
- ✅ Social login endpoint
- ✅ Health check endpoint

## Project Structure

```
Task-Management/
├── xpfarm/                    # Frontend (Next.js)
│   ├── app/
│   │   ├── signup/
│   │   │   └── page.tsx       # Signup page component
│   │   ├── globals.css        # Global styles with custom fonts
│   │   └── layout.tsx
│   ├── lib/
│   │   └── api.ts             # API client functions
│   └── public/
│       └── fonts/             # Custom fonts (Kode Mono & Orbitron)
│
└── xpfarm_backend/            # Backend (Node.js + Express)
    ├── controllers/
    │   └── authController.js  # Authentication logic
    ├── routes/
    │   └── auth.js            # Authentication routes
    ├── index.js               # Server entry point
    └── package.json
```

## Development Notes

### Current Implementation
- Uses in-memory storage for demo purposes
- Passwords are stored in plain text (for demonstration only)

### Production Recommendations
1. **Database Integration**: Replace in-memory storage with MongoDB, PostgreSQL, or another database
2. **Password Hashing**: Use bcrypt to hash passwords
3. **JWT Authentication**: Implement JWT tokens for session management
4. **OAuth Integration**: Add proper OAuth 2.0 flow for social logins
5. **Environment Variables**: Use proper environment configuration
6. **Rate Limiting**: Add rate limiting to prevent abuse
7. **Input Sanitization**: Add additional validation and sanitization
8. **HTTPS**: Use HTTPS in production
9. **Error Logging**: Implement proper logging (e.g., Winston, Morgan)
10. **Testing**: Add unit and integration tests

## Next Steps

1. **Install missing dependencies:**
   ```bash
   cd xpfarm_backend
   npm install cors dotenv nodemon
   ```

2. **Start both servers:**
   - Frontend: `cd xpfarm && npm run dev`
   - Backend: `cd xpfarm_backend && npm run dev`

3. **Test the signup flow:**
   - Navigate to http://localhost:3000/signup
   - Fill in the form and submit
   - Check the backend console for logs

## Troubleshooting

### Port Already in Use
If port 3000 or 5000 is already in use:
- Frontend: Set a different port in Next.js (will prompt automatically)
- Backend: Change PORT in `.env` file

### CORS Errors
Make sure the backend is running and CORS is properly configured in `index.js`

### Font Not Loading
Ensure font files are in `xpfarm/public/fonts/` directory

## License
ISC
