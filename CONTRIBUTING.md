# Contributing to TanStack Start + Amplify Template

Thank you for your interest in contributing! This document provides guidelines for contributing to this template repository.

## 🎯 Goal

This template aims to provide a production-ready starting point for modern full-stack React applications using TanStack Start and AWS Amplify Gen 2.

## 🚀 Getting Started

1. **Fork the repository**
2. **Clone your fork**
   ```bash
   git clone https://github.com/your-username/tanstack-start-amplify-template.git
   cd tanstack-start-amplify-template
   ```
3. **Install dependencies**
   ```bash
   npm install
   ```
4. **Set up the development environment**
   ```bash
   npm run amplify:sandbox
   npm run dev
   ```

## 📝 Types of Contributions

### 🐛 Bug Reports
- Use the bug report template
- Include reproduction steps
- Provide environment details
- Add error logs if applicable

### ✨ Feature Requests
- Use the feature request template
- Explain the use case
- Consider if it fits the template's scope
- Offer to help implement if possible

### 🔧 Code Contributions
- Bug fixes
- New features that benefit most users
- Documentation improvements
- Performance optimizations
- Security enhancements

## 🛠️ Development Guidelines

### Code Style
- Follow existing TypeScript/React patterns
- Use meaningful variable and function names
- Add JSDoc comments for complex functions
- Keep components focused and reusable

### File Organization
```
src/
├── components/     # Reusable UI components
├── hooks/         # Custom React hooks
├── lib/           # Utility libraries and configurations
├── routes/        # TanStack Router route components
└── styles/        # Global styles and themes
```

### Commit Messages
Use conventional commits:
```
feat: add social login support
fix: resolve authentication redirect issue
docs: update setup instructions
chore: update dependencies
```

### Testing
- Test your changes locally
- Ensure the build passes: `npm run build`
- Verify TypeScript compilation: `npx tsc --noEmit`
- Test the full authentication flow

## 📋 Pull Request Process

1. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Follow the coding guidelines
   - Update documentation if needed
   - Add tests if applicable

3. **Test thoroughly**
   ```bash
   npm run build
   npm run dev
   ```

4. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: your descriptive commit message"
   ```

5. **Push and create PR**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Fill out the PR template**
   - Describe your changes
   - Link related issues
   - Add screenshots if UI changes
   - Check all applicable boxes

## 🎯 What We're Looking For

### High Priority
- Security improvements
- Performance optimizations
- Better error handling
- Accessibility enhancements
- Documentation improvements

### Medium Priority
- New authentication providers
- Additional UI components
- Developer experience improvements
- Build optimizations

### Consider Carefully
- Large architectural changes
- Breaking changes
- Features that add significant complexity
- Platform-specific features

## 🚫 What We Won't Accept

- Changes that break existing functionality
- Features that only benefit a small subset of users
- Code without proper TypeScript types
- Changes that significantly increase bundle size
- Contributions that don't follow our coding standards

## 📚 Resources

- [TanStack Start Docs](https://tanstack.com/start)
- [AWS Amplify Gen 2 Docs](https://docs.amplify.aws/gen2/)
- [Amplify UI Docs](https://ui.docs.amplify.aws/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 🤝 Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Help others learn and grow
- Focus on what's best for the community

## 📞 Getting Help

- Check existing issues and discussions
- Read the documentation thoroughly
- Ask questions in issues (use the question label)
- Be specific about your problem and environment

## 🏷️ Versioning

We use [Semantic Versioning](https://semver.org/):
- **MAJOR**: Breaking changes
- **MINOR**: New features (backward compatible)
- **PATCH**: Bug fixes (backward compatible)

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for helping make this template better! 🎉
