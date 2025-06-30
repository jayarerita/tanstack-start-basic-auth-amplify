import { AuthenticatorWrapper } from './AuthenticatorWrapper';

export function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <AuthenticatorWrapper>
          {/* This content will only show when authenticated, but we redirect immediately */}
          <div className="text-center">
            <p>Redirecting...</p>
          </div>
        </AuthenticatorWrapper>
      </div>
    </div>
  );
}
