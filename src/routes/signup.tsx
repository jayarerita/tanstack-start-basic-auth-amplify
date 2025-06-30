import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/signup')({
  beforeLoad: () => {
    // Redirect to login since Authenticator handles both sign-in and sign-up
    throw redirect({ to: '/login' })
  },
})
