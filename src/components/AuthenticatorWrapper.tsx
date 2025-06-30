import { Authenticator, ThemeProvider } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { amplifyTheme } from '~/lib/amplify-ui-theme';
import { useRouter } from '@tanstack/react-router';
import { useEffect } from 'react';

interface AuthenticatorWrapperProps {
  children: React.ReactNode;
}

export function AuthenticatorWrapper({ children }: AuthenticatorWrapperProps) {
  const router = useRouter();

  return (
    <ThemeProvider theme={amplifyTheme}>
      <Authenticator
        signUpAttributes={['email']}
        socialProviders={[]}
        components={{
          Header() {
            return (
              <div className="text-center mb-6">
                <h1 className="text-2xl font-bold text-gray-900">
                  Welcome to TanStack Start
                </h1>
                <p className="text-gray-600 mt-2">
                  Sign in to access your account
                </p>
              </div>
            );
          },
          Footer() {
            return (
              <div className="text-center mt-6">
                <p className="text-sm text-gray-500">
                  Powered by AWS Amplify
                </p>
              </div>
            );
          },
        }}
        formFields={{
          signIn: {
            username: {
              label: 'Email',
              placeholder: 'Enter your email',
              isRequired: true,
            },
            password: {
              label: 'Password',
              placeholder: 'Enter your password',
              isRequired: true,
            },
          },
          signUp: {
            email: {
              label: 'Email',
              placeholder: 'Enter your email',
              isRequired: true,
              order: 1,
            },
            password: {
              label: 'Password',
              placeholder: 'Enter your password',
              isRequired: true,
              order: 2,
            },
            confirm_password: {
              label: 'Confirm Password',
              placeholder: 'Confirm your password',
              isRequired: true,
              order: 3,
            },
          },
          confirmSignUp: {
            confirmation_code: {
              label: 'Confirmation Code',
              placeholder: 'Enter the code sent to your email',
              isRequired: true,
            },
          },
        }}
      >
        {({ signOut, user }) => {
          // Auto-redirect to home page after successful authentication
          useEffect(() => {
            if (user) {
              router.navigate({ to: '/' });
            }
          }, [user, router]);

          return <>{children}</>;
        }}
      </Authenticator>
    </ThemeProvider>
  );
}
