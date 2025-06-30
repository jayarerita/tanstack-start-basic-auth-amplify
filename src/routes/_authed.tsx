import { createFileRoute, Outlet } from '@tanstack/react-router'
import { Login } from '~/components/Login'
import { useAuth } from '~/hooks/useAuth'

export const Route = createFileRoute('/_authed')({
  component: AuthGuard,
})

function AuthGuard() {
  const { isAuthenticated, isLoading } = useAuth()

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg">Loading...</div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return <Login />
  }

  return <Outlet />
}
