import { createFileRoute } from '@tanstack/react-router'
import { useAuth } from '~/hooks/useAuth'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  const { isAuthenticated, user, isLoading } = useAuth()

  if (isLoading) {
    return (
      <div className="p-2">
        <div>Loading...</div>
      </div>
    )
  }

  return (
    <div className="p-2">
      <h3 className="text-2xl font-bold mb-4">Welcome to TanStack Start with AWS Amplify!</h3>
      
      {isAuthenticated ? (
        <div>
          <p className="mb-4">
            Hello, {user?.signInDetails?.loginId || 'User'}! You are successfully authenticated with AWS Amplify.
          </p>
          <div className="space-y-2">
            <p>You can now:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>View and create posts in the Posts section</li>
              <li>Access protected routes</li>
              <li>Manage your data with AWS Amplify backend</li>
            </ul>
          </div>
        </div>
      ) : (
        <div>
          <p className="mb-4">
            This application demonstrates TanStack Start integration with AWS Amplify Gen 2 for authentication and data management.
          </p>
          <p>
            Please <a href="/login" className="text-blue-500 hover:underline">login</a> to access protected features.
          </p>
        </div>
      )}
    </div>
  )
}
