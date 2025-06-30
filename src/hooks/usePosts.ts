import { useMutation as useReactQueryMutation, useQueryClient } from '@tanstack/react-query';
import { dataService, type Post } from '~/lib/data';
import { useAuth } from './useAuth';

interface CreatePostData {
  title: string;
  content: string;
}

interface UpdatePostData extends Partial<CreatePostData> {
  id: string;
}

export function useCreatePost() {
  const queryClient = useQueryClient();
  const { user } = useAuth();

  return useReactQueryMutation({
    mutationFn: async (data: CreatePostData): Promise<Post> => {
      if (!user?.signInDetails?.loginId) {
        throw new Error('User must be authenticated to create posts');
      }

      const post = await dataService.createPost({
        title: data.title,
        content: data.content,
        author: user.signInDetails.loginId,
      });

      if (!post) {
        throw new Error('Failed to create post');
      }

      return post;
    },
    onSuccess: (newPost) => {
      // Invalidate and refetch posts list
      queryClient.invalidateQueries({ queryKey: ['posts'] });
      
      // Optionally add the new post to the cache
      queryClient.setQueryData(['posts'], (oldPosts: Post[] | undefined) => {
        return oldPosts ? [newPost, ...oldPosts] : [newPost];
      });
    },
    onError: (error) => {
      console.error('Error creating post:', error);
    },
  });
}

export function useUpdatePost() {
  const queryClient = useQueryClient();

  return useReactQueryMutation({
    mutationFn: async (data: UpdatePostData): Promise<Post> => {
      const { id, ...updates } = data;
      const post = await dataService.updatePost(id, updates);

      if (!post) {
        throw new Error('Failed to update post');
      }

      return post;
    },
    onSuccess: (updatedPost) => {
      // Update the specific post in cache
      queryClient.setQueryData(['post', updatedPost.id], updatedPost);
      
      // Invalidate posts list to ensure consistency
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
    onError: (error) => {
      console.error('Error updating post:', error);
    },
  });
}

export function useDeletePost() {
  const queryClient = useQueryClient();

  return useReactQueryMutation({
    mutationFn: async (postId: string): Promise<void> => {
      const success = await dataService.deletePost(postId);
      
      if (!success) {
        throw new Error('Failed to delete post');
      }
    },
    onSuccess: (_, deletedPostId) => {
      // Remove post from cache
      queryClient.removeQueries({ queryKey: ['post', deletedPostId] });
      
      // Update posts list
      queryClient.setQueryData(['posts'], (oldPosts: Post[] | undefined) => {
        return oldPosts?.filter(post => post.id !== deletedPostId) || [];
      });
    },
    onError: (error) => {
      console.error('Error deleting post:', error);
    },
  });
}
