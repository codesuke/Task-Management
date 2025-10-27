# 🚀 Frontend + Backend Setup Complete!

## ✅ System Status

### Backend Server (Express)
- **Status**: ✅ Running
- **Port**: 5000
- **URL**: http://localhost:5000
- **Health Check**: http://localhost:5000/health

### Frontend Server (Next.js)
- **Status**: ✅ Running
- **Port**: 3000
- **URL**: http://localhost:3000
- **SignUp Page**: http://localhost:3000/signup

---

## 📋 API Endpoints Available

### 1. User Signup
**Endpoint**: `POST http://localhost:5000/api/auth/signup`

**Request Body**:
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "username": "johndoe",
  "email": "john@example.com",
  "password": "password123"
}
```

**Success Response** (201):
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
    "createdAt": "2025-10-27T12:00:00.000Z"
  }
}
```

**Error Response** (400/409):
```json
{
  "success": false,
  "message": "User with this email or username already exists"
}
```

### 2. User Login
**Endpoint**: `POST http://localhost:5000/api/auth/login`

**Request Body**:
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

### 3. Social Login
**Endpoint**: `POST http://localhost:5000/api/auth/social-login`

**Request Body**:
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

### 4. Health Check
**Endpoint**: `GET http://localhost:5000/health`

**Response**:
```json
{
  "status": "OK",
  "message": "Server is running"
}
```

---

## 🧪 How to Test the Signup Page

### Method 1: Using the Browser (Recommended for Manual Testing)

1. **Open your browser** and navigate to:
   ```
   http://localhost:3000/signup
   ```

2. **Fill in the form**:
   - First Name: John
   - Last Name: Doe
   - Username: johndoe
   - Email: john@example.com
   - Password: password123

3. **Click "Sign Up"** button

4. **Check the result**:
   - ✅ Success: Green message appears "Account created successfully!"
   - ❌ Error: Red message appears with error details

5. **Open Browser DevTools** (F12 or Cmd+Option+I):
   - Go to **Console** tab to see logs
   - Go to **Network** tab to see API requests

---

### Method 2: Using cURL (Command Line Testing)

Test the backend API directly:

```bash
# Test signup
curl -X POST http://localhost:5000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "Jane",
    "lastName": "Smith",
    "username": "janesmith",
    "email": "jane@example.com",
    "password": "password456"
  }'

# Test health check
curl http://localhost:5000/health

# Test login
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "jane@example.com",
    "password": "password456"
  }'
```

---

### Method 3: Using Postman or Insomnia

1. **Download Postman**: https://www.postman.com/downloads/
2. **Import the collection** or create new requests:
   - POST `http://localhost:5000/api/auth/signup`
   - POST `http://localhost:5000/api/auth/login`
   - POST `http://localhost:5000/api/auth/social-login`
   - GET `http://localhost:5000/health`

---

## 🎯 Test Scenarios

### ✅ Successful Signup
1. Fill all fields with valid data
2. Click "Sign Up"
3. **Expected**: Green success message + user data in console

### ❌ Duplicate User
1. Sign up with same email/username twice
2. **Expected**: Error message "User with this email or username already exists"

### ❌ Missing Fields
1. Leave any field empty
2. Click "Sign Up"
3. **Expected**: Browser validation error (HTML5 required attribute)

### ❌ Short Password
1. Enter password less than 8 characters
2. Click "Sign Up"
3. **Expected**: Error message "Password must be at least 8 characters long"

### 🔐 Password Toggle
1. Type in password field
2. Click the eye icon
3. **Expected**: Password becomes visible/hidden

### 📱 Social Login Buttons
1. Click Google/GitHub/GitLab buttons
2. **Expected**: Console log showing which provider was clicked

---

## 🔍 How to Monitor Requests

### Frontend Console (Browser DevTools)
1. Open DevTools (F12 or Cmd+Option+I)
2. Go to **Console** tab
3. See form submissions and API responses

### Backend Console (Terminal)
Watch the terminal running `npm run dev` in `xpfarm_backend`
- You'll see all incoming API requests
- Any errors will be logged here

### Network Tab (Browser DevTools)
1. Open DevTools → **Network** tab
2. Filter by **Fetch/XHR**
3. Click "Sign Up"
4. See the POST request to `http://localhost:5000/api/auth/signup`
5. Click the request to see:
   - Request headers
   - Request payload
   - Response data
   - Status code

---

## 🎨 What's Connected

### Frontend → Backend Flow:

```
User fills form
     ↓
Click "Sign Up"
     ↓
app/signup/page.tsx (React component)
     ↓
lib/api.ts (authAPI.signup)
     ↓
HTTP POST → http://localhost:5000/api/auth/signup
     ↓
xpfarm_backend/routes/auth.js
     ↓
xpfarm_backend/controllers/authController.js
     ↓
Validate & Save user (in-memory)
     ↓
Send response back to frontend
     ↓
Show success/error message
```

---

## 🛠️ Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Kill process on port 5000
lsof -ti:5000 | xargs kill -9
```

### CORS Errors
- Backend already has CORS enabled
- Check browser console for specific errors
- Make sure both servers are running

### API Not Responding
1. Check backend terminal for errors
2. Visit http://localhost:5000/health
3. Should return: `{"status":"OK","message":"Server is running"}`

### Frontend Not Loading
1. Check frontend terminal for errors
2. Visit http://localhost:3000
3. Clear browser cache (Cmd+Shift+R or Ctrl+Shift+R)

---

## 📊 Current Data Storage

⚠️ **Important**: The backend currently uses **in-memory storage**.

This means:
- ✅ Fast and simple for testing
- ❌ Data is lost when server restarts
- ❌ Not suitable for production

**To make it persistent**, you would need to:
1. Add a database (MongoDB, PostgreSQL, etc.)
2. Add password hashing (bcrypt)
3. Add JWT authentication tokens
4. Add session management

---

## 🎉 You're All Set!

### Quick Start:
1. **Frontend**: http://localhost:3000/signup
2. **Backend**: http://localhost:5000
3. **Test**: Fill the form and click "Sign Up"!

### Both Servers Running:
- ✅ Backend on port 5000
- ✅ Frontend on port 3000
- ✅ API connected via CORS
- ✅ Environment variables loaded

**Happy Testing! 🚀**

---

*Last Updated: October 27, 2025*
