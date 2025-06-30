# 🚀 TanStack Start + AWS Amplify Gen 2 Template

This is a template repository for creating modern full-stack React applications with:

- **TanStack Start** - Type-safe, client-first, full-stack React framework
- **AWS Amplify Gen 2** - Modern backend-as-a-service with TypeScript-first DX
- **Amplify UI** - Pre-built, accessible authentication components
- **TypeScript** - Full type safety across frontend and backend
- **Tailwind CSS** - Utility-first CSS framework

## 🎯 What's Included

### Authentication
- ✅ Email/password sign-up and sign-in
- ✅ Email confirmation flow
- ✅ Password reset functionality
- ✅ Protected routes
- ✅ Session management
- ✅ Professional UI with Amplify UI components

### Backend
- ✅ AWS Cognito User Pools
- ✅ AWS AppSync GraphQL API
- ✅ DynamoDB database
- ✅ Real-time subscriptions
- ✅ User-based authorization
- ✅ Offline support

### Frontend
- ✅ TanStack Router for navigation
- ✅ Type-safe API calls
- ✅ Responsive design
- ✅ Dark/light mode support
- ✅ Development tools and DevTools

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- AWS CLI configured
- AWS Account with appropriate permissions

### 1. Create from Template
Click "Use this template" on GitHub or:
```bash
gh repo create my-app --template your-username/tanstack-start-amplify-template
cd my-app
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Up AWS Backend
```bash
npm run amplify:sandbox
```
This will:
- Deploy your backend to AWS
- Generate configuration files
- Set up authentication and database

### 4. Start Development
```bash
npm run dev
```

### 5. Open Your App
Navigate to `http://localhost:3000`

## 📁 Project Structure

```
├── amplify/                 # AWS Amplify backend configuration
│   ├── auth/               # Authentication setup
│   ├── data/               # GraphQL schema and database
│   └── backend.ts          # Main backend configuration
├── src/
│   ├── components/         # React components
│   │   ├── AuthenticatorWrapper.tsx
│   │   └── Login.tsx
│   ├── hooks/              # Custom React hooks
│   │   └── useAuth.ts
│   ├── lib/                # Utility libraries
│   │   ├── amplify.ts      # Amplify configuration
│   │   ├── data.ts         # Data service layer
│   │   └── amplify-ui-theme.ts
│   ├── routes/             # TanStack Router routes
│   │   ├── __root.tsx      # Root layout
│   │   ├── index.tsx       # Home page
│   │   ├── login.tsx       # Login page
│   │   └── _authed/        # Protected routes
│   └── styles/
│       └── app.css         # Global styles
├── README.md               # Project documentation
├── AMPLIFY_SETUP.md        # Detailed setup guide
└── package.json
```

## 🛠️ Available Scripts

```bash
npm run dev              # Start development server
npm run build            # Build for production
npm run start            # Start production server
npm run amplify:sandbox  # Deploy backend to sandbox
npm run amplify:deploy   # Deploy backend to production
```

## 🎨 Customization

### Styling
- Modify `src/styles/app.css` for global styles
- Update `src/lib/amplify-ui-theme.ts` for authentication UI
- Tailwind CSS classes throughout components

### Authentication
- Configure in `amplify/auth/resource.ts`
- Customize UI in `src/components/AuthenticatorWrapper.tsx`
- Add social providers, MFA, etc.

### Database Schema
- Update `amplify/data/resource.ts`
- Add new models and relationships
- Configure authorization rules

## 🚀 Deployment

### Development Environment
```bash
npm run amplify:sandbox
```

### Production Environment
```bash
npm run amplify:deploy
```

### Frontend Hosting
Deploy to any static hosting service:
- AWS Amplify Hosting
- Vercel
- Netlify
- AWS S3 + CloudFront

## 📚 Learn More

- [TanStack Start Documentation](https://tanstack.com/start)
- [AWS Amplify Gen 2 Documentation](https://docs.amplify.aws/gen2/)
- [Amplify UI Documentation](https://ui.docs.amplify.aws/)
- [TanStack Router Documentation](https://tanstack.com/router)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This template is available under the MIT License.

## 🆘 Support

- Check the [setup guide](./AMPLIFY_SETUP.md) for detailed instructions
- Review [common issues](./AMPLIFY_SETUP.md#troubleshooting)
- Open an issue for bugs or feature requests

---

**Happy coding! 🎉**
