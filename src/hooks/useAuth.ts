import { useState, useEffect } from 'react';
import { getCurrentUser, signOut, type AuthUser } from 'aws-amplify/auth';
import { Hub } from 'aws-amplify/utils';

export interface AuthState {
  user: AuthUser | null;
  isLoading: boolean;
  isAuthenticated: boolean;
}

export function useAuth() {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isLoading: true,
    isAuthenticated: false,
  });

  useEffect(() => {
    checkAuthState();

    // Listen for auth events
    const unsubscribe = Hub.listen('auth', ({ payload }) => {
      switch (payload.event) {
        case 'signedIn':
          checkAuthState();
          break;
        case 'signedOut':
          setAuthState({
            user: null,
            isLoading: false,
            isAuthenticated: false,
          });
          break;
        case 'tokenRefresh':
          checkAuthState();
          break;
        case 'tokenRefresh_failure':
          setAuthState({
            user: null,
            isLoading: false,
            isAuthenticated: false,
          });
          break;
      }
    });

    return unsubscribe;
  }, []);

  const checkAuthState = async () => {
    try {
      const user = await getCurrentUser();
      setAuthState({
        user,
        isLoading: false,
        isAuthenticated: true,
      });
    } catch (error) {
      setAuthState({
        user: null,
        isLoading: false,
        isAuthenticated: false,
      });
    }
  };

  const logout = async () => {
    try {
      await signOut();
      setAuthState({
        user: null,
        isLoading: false,
        isAuthenticated: false,
      });
      return { success: true };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  };

  return {
    ...authState,
    logout,
    checkAuthState,
  };
}
