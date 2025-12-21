import React, { useContext } from 'react';
import { PostsContext } from '../context/postcontext';
import { ThemeContext } from '../context/themecontext';
import PostCard from './PostCard';

const PostList = () => {
  const { posts, loading, error } = useContext(PostsContext);
  const { theme } = useContext(ThemeContext);

  const textColor = theme === 'light' ? 'text-gray-900' : 'text-gray-100';

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className={`text-2xl font-medium ${textColor}`}>
          Loading posts...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-2xl font-medium text-red-600">
          Error: {error}
        </div>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className={`text-2xl font-medium ${textColor}`}>
          No posts available
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;