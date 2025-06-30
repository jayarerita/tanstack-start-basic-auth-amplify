# 🚀 TanStack Start + AWS Amplify Gen 2 Template

[![CI](https://github.com/your-username/tanstack-start-amplify-template/workflows/CI/badge.svg)](https://github.com/your-username/tanstack-start-amplify-template/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://typescriptlang.org)
[![AWS Amplify](https://img.shields.io/badge/AWS%20Amplify-FF9900?logo=aws-amplify&logoColor=white)](https://aws.amazon.com/amplify/)

A modern, production-ready template for building full-stack React applications with **TanStack Start** and **AWS Amplify Gen 2**.

## ✨ Features

### 🔐 Authentication
- **AWS Cognito** User Pools with email/password
- **Amplify UI** components for sign-in/sign-up
- **Email confirmation** and password reset
- **Protected routes** with automatic redirects
- **Session management** with JWT tokens

### 🗄️ Backend
- **AWS AppSync** GraphQL API
- **DynamoDB** database with user authorization
- **Real-time subscriptions** for live data
- **Offline support** with automatic sync
- **Type-safe** backend operations

### 🎨 Frontend
- **TanStack Start** for full-stack React
- **TanStack Router** for type-safe routing
- **TypeScript** throughout the entire stack
- **Tailwind CSS** for styling
- **Responsive design** with dark/light mode

## 🚀 Quick Start

### 1. Use This Template

Click the **"Use this template"** button above or:

```bash
gh repo create my-awesome-app --template your-username/tanstack-start-amplify-template
cd my-awesome-app
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
- Generate `amplify_outputs.json` configuration
- Set up Cognito User Pool and AppSync API

### 4. Start Development

```bash
npm run dev
```

### 5. Open Your App

Navigate to `http://localhost:3000` and start building! 🎉

## 📁 Project Structure

```
├── amplify/                    # AWS Amplify backend
│   ├── auth/resource.ts       # Cognito configuration
│   ├── data/resource.ts       # GraphQL schema & DynamoDB
│   └── backend.ts             # Main backend setup
├── src/
│   ├── components/            # React components
│   │   ├── AuthenticatorWrapper.tsx
│   │   └── Login.tsx
│   ├── hooks/                 # Custom React hooks
│   │   └── useAuth.ts
│   ├── lib/                   # Utilities & configuration
│   │   ├── amplify.ts
│   │   ├── data.ts
│   │   └── amplify-ui-theme.ts
│   ├── routes/                # TanStack Router routes
│   │   ├── __root.tsx         # Root layout
│   │   ├── index.tsx          # Home page
│   │   ├── login.tsx          # Authentication
│   │   └── _authed/           # Protected routes
│   └── styles/
│       └── app.css            # Global styles
└── README.md
```

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run amplify:sandbox` | Deploy backend to sandbox |
| `npm run amplify:deploy` | Deploy backend to production |

## 🎨 Customization

### Authentication UI
Customize the authentication experience in `src/components/AuthenticatorWrapper.tsx`:

```tsx
<Authenticator
  signUpAttributes={['email']}
  socialProviders={['google', 'facebook']} // Add social providers
  components={{
    Header() {
      return <YourCustomHeader />
    }
  }}
>
```

### Database Schema
Add new data models in `amplify/data/resource.ts`:

```typescript
const schema = a.schema({
  Post: a.model({
    title: a.string().required(),
    content: a.string().required(),
    // Add your fields here
  }).authorization((allow) => [
    allow.authenticated()
  ])
})
```

### Styling
- Global styles: `src/styles/app.css`
- Amplify UI theme: `src/lib/amplify-ui-theme.ts`
- Tailwind configuration: `tailwind.config.mjs`

## 🚀 Deployment

### Backend
```bash
# Development
npm run amplify:sandbox

# Production
npm run amplify:deploy
```

### Frontend
Deploy to any static hosting service:

- **AWS Amplify Hosting** (recommended)
- **Vercel**
- **Netlify**
- **AWS S3 + CloudFront**

## 📚 Documentation

- [📖 Detailed Setup Guide](./AMPLIFY_SETUP.md)
- [🤝 Contributing Guidelines](./CONTRIBUTING.md)
- [🔒 Security Policy](./SECURITY.md)
- [📝 Template Documentation](./TEMPLATE.md)

## 🔗 Learn More

- [TanStack Start Documentation](https://tanstack.com/start)
- [AWS Amplify Gen 2 Documentation](https://docs.amplify.aws/gen2/)
- [Amplify UI Documentation](https://ui.docs.amplify.aws/)
- [TanStack Router Documentation](https://tanstack.com/router)

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](./CONTRIBUTING.md) for details.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## 🆘 Support

- 📖 Check the [setup guide](./AMPLIFY_SETUP.md)
- 🐛 [Report bugs](https://github.com/your-username/tanstack-start-amplify-template/issues)
- 💡 [Request features](https://github.com/your-username/tanstack-start-amplify-template/issues)
- 💬 [Start a discussion](https://github.com/your-username/tanstack-start-amplify-template/discussions)

## ⭐ Show Your Support

If this template helped you, please give it a star! ⭐

---

**Built with ❤️ using TanStack Start and AWS Amplify**
