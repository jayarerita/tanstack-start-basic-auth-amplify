import { generateClient } from 'aws-amplify/data';
import type { Schema } from '../../amplify/data/resource';

export const client = generateClient<Schema>();

export interface Post {
  id: string;
  title: string;
  content: string;
  author: string;
  createdAt?: string;
}

export const dataService = {
  // Get all posts
  async getPosts(): Promise<Post[]> {
    try {
      const { data: posts } = await client.models.Post.list();
      return posts.map(post => ({
        id: post.id,
        title: post.title,
        content: post.content,
        author: post.author,
        createdAt: post.createdAt,
      }));
    } catch (error) {
      console.error('Error fetching posts:', error);
      return [];
    }
  },

  // Get a single post by ID
  async getPost(id: string): Promise<Post | null> {
    try {
      const { data: post } = await client.models.Post.get({ id });
      if (!post) return null;
      
      return {
        id: post.id,
        title: post.title,
        content: post.content,
        author: post.author,
        createdAt: post.createdAt,
      };
    } catch (error) {
      console.error('Error fetching post:', error);
      return null;
    }
  },

  // Create a new post
  async createPost(post: Omit<Post, 'id' | 'createdAt'>): Promise<Post | null> {
    try {
      const { data: newPost } = await client.models.Post.create({
        title: post.title,
        content: post.content,
        author: post.author,
        createdAt: new Date().toISOString(),
      });

      if (!newPost) return null;

      return {
        id: newPost.id,
        title: newPost.title,
        content: newPost.content,
        author: newPost.author,
        createdAt: newPost.createdAt,
      };
    } catch (error) {
      console.error('Error creating post:', error);
      return null;
    }
  },

  // Update a post
  async updatePost(id: string, updates: Partial<Omit<Post, 'id' | 'createdAt'>>): Promise<Post | null> {
    try {
      const { data: updatedPost } = await client.models.Post.update({
        id,
        ...updates,
      });

      if (!updatedPost) return null;

      return {
        id: updatedPost.id,
        title: updatedPost.title,
        content: updatedPost.content,
        author: updatedPost.author,
        createdAt: updatedPost.createdAt,
      };
    } catch (error) {
      console.error('Error updating post:', error);
      return null;
    }
  },

  // Delete a post
  async deletePost(id: string): Promise<boolean> {
    try {
      await client.models.Post.delete({ id });
      return true;
    } catch (error) {
      console.error('Error deleting post:', error);
      return false;
    }
  },
};
