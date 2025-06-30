import { createFileRoute, useRouter } from '@tanstack/react-router'
import { useState } from 'react'
import { useCreatePost } from '~/hooks/usePosts'

export const Route = createFileRoute('/_authed/posts/new')({
  component: NewPostComponent,
})

function NewPostComponent() {
  const router = useRouter()
  const createPostMutation = useCreatePost()
  
  const [formData, setFormData] = useState({
    title: '',
    content: '',
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!formData.title.trim() || !formData.content.trim()) {
      return
    }

    try {
      const newPost = await createPostMutation.mutateAsync({
        title: formData.title.trim(),
        content: formData.content.trim(),
      })

      // Navigate to the new post
      router.navigate({ 
        to: '/posts/$postId', 
        params: { postId: newPost.id } 
      })
    } catch (error) {
      // Error is handled by the mutation
      console.error('Failed to create post:', error)
    }
  }

  const handleCancel = () => {
    router.navigate({ to: '/posts' })
  }

  const isFormValid = formData.title.trim() && formData.content.trim()

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200">
      <div className="p-6 lg:p-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <button
              onClick={handleCancel}
              className="mr-4 p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Create New Post</h1>
              <p className="text-gray-600 mt-1">Share your thoughts with the community</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title Input */}
          <div>
            <label 
              htmlFor="title" 
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Title *
            </label>
            <input
              type="text"
              id="title"
              value={formData.title}
              onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
              className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors placeholder-gray-400"
              placeholder="Enter a compelling title for your post..."
              maxLength={200}
              required
            />
            <div className="flex justify-between items-center mt-2">
              <div className="text-xs text-gray-500">
                {formData.title.length}/200 characters
              </div>
              {formData.title.length > 180 && (
                <div className="text-xs text-amber-600">
                  Approaching character limit
                </div>
              )}
            </div>
          </div>

          {/* Content Textarea */}
          <div>
            <label 
              htmlFor="content" 
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Content *
            </label>
            <textarea
              id="content"
              value={formData.content}
              onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
              rows={16}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical placeholder-gray-400"
              placeholder="Write your post content here... 

You can write multiple paragraphs, share your ideas, experiences, or anything you'd like to discuss with the community."
              required
            />
            <div className="flex justify-between items-center mt-2">
              <div className="text-xs text-gray-500">
                {formData.content.length} characters
              </div>
              <div className="text-xs text-gray-500">
                {Math.ceil(formData.content.split(' ').length)} words
              </div>
            </div>
          </div>

          {/* Error Display */}
          {createPostMutation.error && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex">
                <svg className="w-5 h-5 text-red-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="text-sm font-medium text-red-800">
                    Error creating post
                  </h3>
                  <p className="text-sm text-red-700 mt-1">
                    {createPostMutation.error.message}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-gray-200">
            <button
              type="submit"
              disabled={!isFormValid || createPostMutation.isPending}
              className="flex-1 sm:flex-none px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-gray-400 disabled:to-gray-400 text-white font-medium rounded-lg transition-all duration-200 disabled:cursor-not-allowed shadow-sm hover:shadow-md transform hover:-translate-y-0.5 disabled:transform-none"
            >
              {createPostMutation.isPending ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Creating Post...
                </span>
              ) : (
                <span className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  Publish Post
                </span>
              )}
            </button>
            
            <button
              type="button"
              onClick={handleCancel}
              disabled={createPostMutation.isPending}
              className="px-8 py-3 bg-white hover:bg-gray-50 text-gray-700 font-medium rounded-lg transition-colors duration-200 disabled:opacity-50 border border-gray-300 shadow-sm"
            >
              Cancel
            </button>
          </div>
        </form>

        {/* Tips */}
        <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h4 className="text-sm font-medium text-blue-900 mb-2">Writing Tips</h4>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• Use a clear, descriptive title that captures your main idea</li>
            <li>• Break up long paragraphs for better readability</li>
            <li>• Share personal experiences or insights to engage readers</li>
            <li>• Preview your post before publishing</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
