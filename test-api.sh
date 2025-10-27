#!/bin/bash

# Test Script for SignUp API
# Run this script to test all backend endpoints

echo "🚀 Testing Backend API Endpoints..."
echo ""

# Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Base URL
API_URL="http://localhost:5000"

# Test 1: Health Check
echo "${YELLOW}Test 1: Health Check${NC}"
echo "GET $API_URL/health"
response=$(curl -s -w "\nHTTP_STATUS:%{http_code}" $API_URL/health)
http_status=$(echo "$response" | grep HTTP_STATUS | cut -d: -f2)
body=$(echo "$response" | sed '/HTTP_STATUS/d')
echo "$body"
if [ "$http_status" = "200" ]; then
    echo "${GREEN}✅ Health check passed${NC}"
else
    echo "${RED}❌ Health check failed (Status: $http_status)${NC}"
fi
echo ""
echo "---"
echo ""

# Test 2: User Signup
echo "${YELLOW}Test 2: User Signup${NC}"
echo "POST $API_URL/api/auth/signup"
signup_data='{
  "firstName": "Test",
  "lastName": "User",
  "username": "testuser",
  "email": "test@example.com",
  "password": "password123"
}'
echo "Request Body: $signup_data"
response=$(curl -s -w "\nHTTP_STATUS:%{http_code}" -X POST $API_URL/api/auth/signup \
  -H "Content-Type: application/json" \
  -d "$signup_data")
http_status=$(echo "$response" | grep HTTP_STATUS | cut -d: -f2)
body=$(echo "$response" | sed '/HTTP_STATUS/d')
echo "Response: $body"
if [ "$http_status" = "201" ]; then
    echo "${GREEN}✅ Signup successful (Status: $http_status)${NC}"
else
    echo "${RED}❌ Signup failed (Status: $http_status)${NC}"
fi
echo ""
echo "---"
echo ""

# Test 3: Duplicate User (Should Fail)
echo "${YELLOW}Test 3: Duplicate User Signup (Should Fail)${NC}"
echo "POST $API_URL/api/auth/signup"
response=$(curl -s -w "\nHTTP_STATUS:%{http_code}" -X POST $API_URL/api/auth/signup \
  -H "Content-Type: application/json" \
  -d "$signup_data")
http_status=$(echo "$response" | grep HTTP_STATUS | cut -d: -f2)
body=$(echo "$response" | sed '/HTTP_STATUS/d')
echo "Response: $body"
if [ "$http_status" = "409" ]; then
    echo "${GREEN}✅ Duplicate validation working (Status: $http_status)${NC}"
else
    echo "${RED}❌ Expected 409 conflict, got $http_status${NC}"
fi
echo ""
echo "---"
echo ""

# Test 4: User Login
echo "${YELLOW}Test 4: User Login${NC}"
echo "POST $API_URL/api/auth/login"
login_data='{
  "email": "test@example.com",
  "password": "password123"
}'
echo "Request Body: $login_data"
response=$(curl -s -w "\nHTTP_STATUS:%{http_code}" -X POST $API_URL/api/auth/login \
  -H "Content-Type: application/json" \
  -d "$login_data")
http_status=$(echo "$response" | grep HTTP_STATUS | cut -d: -f2)
body=$(echo "$response" | sed '/HTTP_STATUS/d')
echo "Response: $body"
if [ "$http_status" = "200" ]; then
    echo "${GREEN}✅ Login successful (Status: $http_status)${NC}"
else
    echo "${RED}❌ Login failed (Status: $http_status)${NC}"
fi
echo ""
echo "---"
echo ""

# Test 5: Missing Fields (Should Fail)
echo "${YELLOW}Test 5: Missing Required Fields (Should Fail)${NC}"
echo "POST $API_URL/api/auth/signup"
invalid_data='{
  "firstName": "Test",
  "email": "incomplete@example.com"
}'
echo "Request Body: $invalid_data"
response=$(curl -s -w "\nHTTP_STATUS:%{http_code}" -X POST $API_URL/api/auth/signup \
  -H "Content-Type: application/json" \
  -d "$invalid_data")
http_status=$(echo "$response" | grep HTTP_STATUS | cut -d: -f2)
body=$(echo "$response" | sed '/HTTP_STATUS/d')
echo "Response: $body"
if [ "$http_status" = "400" ]; then
    echo "${GREEN}✅ Validation working (Status: $http_status)${NC}"
else
    echo "${RED}❌ Expected 400 bad request, got $http_status${NC}"
fi
echo ""
echo "---"
echo ""

# Test 6: Social Login
echo "${YELLOW}Test 6: Social Login${NC}"
echo "POST $API_URL/api/auth/social-login"
social_data='{
  "provider": "google",
  "profileData": {
    "email": "social@example.com",
    "firstName": "Social",
    "lastName": "User"
  }
}'
echo "Request Body: $social_data"
response=$(curl -s -w "\nHTTP_STATUS:%{http_code}" -X POST $API_URL/api/auth/social-login \
  -H "Content-Type: application/json" \
  -d "$social_data")
http_status=$(echo "$response" | grep HTTP_STATUS | cut -d: -f2)
body=$(echo "$response" | sed '/HTTP_STATUS/d')
echo "Response: $body"
if [ "$http_status" = "200" ]; then
    echo "${GREEN}✅ Social login successful (Status: $http_status)${NC}"
else
    echo "${RED}❌ Social login failed (Status: $http_status)${NC}"
fi
echo ""
echo "---"
echo ""

echo "${GREEN}🎉 API Testing Complete!${NC}"
echo ""
echo "Summary:"
echo "- Backend URL: $API_URL"
echo "- All endpoints tested"
echo "- Check results above"
echo ""
echo "To test the frontend:"
echo "  Open http://localhost:3000/signup in your browser"
