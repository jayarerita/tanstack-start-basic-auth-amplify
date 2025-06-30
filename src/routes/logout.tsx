import { createFileRoute, redirect } from '@tanstack/react-router'
import { useAuth } from '~/hooks/useAuth'
import { useEffect } from 'react'

export const Route = createFileRoute('/logout')({
  component: LogoutComponent,
})

function LogoutComponent() {
  const { logout } = useAuth()

  useEffect(() => {
    const performLogout = async () => {
      await logout()
      window.location.href = '/'
    }
    performLogout()
  }, [logout])

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-lg">Logging out...</div>
    </div>
  )
}
