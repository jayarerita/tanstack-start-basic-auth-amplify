# AWS Amplify Gen 2 Setup Instructions

This application has been refactored to use AWS Amplify Gen 2 for authentication and data management instead of Prisma and custom session handling.

## Prerequisites

1. AWS CLI installed and configured
2. Node.js 18+ installed
3. An AWS account with appropriate permissions

## Setup Steps

### 1. Install Dependencies

```bash
npm install
# or
pnpm install
```

### 2. Initialize Amplify Backend

```bash
# Start the Amplify sandbox environment
npm run amplify:sandbox
```

This will:
- Deploy your backend to AWS
- Generate the `amplify_outputs.json` file with your backend configuration
- Set up Cognito User Pool for authentication
- Set up AppSync GraphQL API for data operations

### 3. Configure Your Environment

The sandbox will automatically generate the `amplify_outputs.json` file. This file contains all the necessary configuration for your frontend to connect to your AWS backend.

### 4. Run the Application

```bash
npm run dev
```

## Key Changes Made

### Authentication
- **Before**: Custom session management with Prisma and SQLite
- **After**: AWS Cognito User Pools with email/password authentication
- **Features**: Sign up, sign in, email confirmation, sign out

### Data Management
- **Before**: Prisma with SQLite database
- **After**: AWS AppSync with DynamoDB
- **Features**: CRUD operations for posts with user authorization

### File Structure Changes

```
amplify/
├── backend.ts              # Main backend configuration
├── auth/
│   └── resource.ts         # Cognito User Pool configuration
└── data/
    └── resource.ts         # AppSync GraphQL API and schema

src/
├── lib/
│   ├── amplify.ts          # Amplify configuration
│   └── data.ts             # Data service layer
├── hooks/
│   └── useAuth.ts          # Authentication hook
└── routes/                 # Updated routes for Amplify auth
```

## Environment Variables

No environment variables are needed for basic functionality. The `amplify_outputs.json` file contains all necessary configuration.

## Deployment

### Deploy to AWS (Production)

```bash
npm run amplify:deploy
```

### Generate Outputs for Existing App

If you have an existing Amplify app:

```bash
npm run amplify:generate
```

## Features

### Authentication
- ✅ Email/password sign up
- ✅ Email confirmation
- ✅ Sign in/sign out
- ✅ Protected routes
- ✅ User session management

### Data Management
- ✅ Create, read, update, delete posts
- ✅ User-based authorization
- ✅ Real-time data synchronization
- ✅ Offline support (built into Amplify)

## Troubleshooting

### Common Issues

1. **"Amplify is not configured"**
   - Make sure you've run `npm run amplify:sandbox`
   - Check that `amplify_outputs.json` exists and has valid configuration

2. **Authentication errors**
   - Verify your Cognito User Pool is properly configured
   - Check the browser console for detailed error messages

3. **Data operations failing**
   - Ensure you're authenticated before making data requests
   - Check that your GraphQL schema permissions are correct

### Reset Backend

If you need to start fresh:

```bash
# Stop the current sandbox
# Ctrl+C in the terminal running the sandbox

# Start a new sandbox
npm run amplify:sandbox
```

## Migration Notes

### Removed Dependencies
- `@prisma/client`
- `prisma`
- Custom session utilities

### Added Dependencies
- `aws-amplify`
- `@aws-amplify/backend`
- `@aws-amplify/backend-cli`

### Code Changes
- All authentication now uses AWS Cognito
- Data operations use AWS AppSync GraphQL API
- Session management handled by Amplify
- Server functions replaced with client-side operations
