import React, { useState, useContext } from 'react';
import { ThemeContext } from '../context/themecontext';
import { PostsContext } from '../context/postcontext';

const PostCard = ({ post }) => {
  const { theme } = useContext(ThemeContext);
  const { updatePost, deletePost } = useContext(PostsContext);
  
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(post.title);
  const [editBody, setEditBody] = useState(post.body);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (editTitle.trim() && editBody.trim()) {
      updatePost(post.id, { 
        title: editTitle.trim(), 
        body: editBody.trim() 
      });
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditTitle(post.title);
    setEditBody(post.body);
    setIsEditing(false);
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      deletePost(post.id);
    }
  };

  // Theme-based styling
  const cardBg = theme === 'light' ? 'bg-white' : 'bg-gray-800';
  const textColor = theme === 'light' ? 'text-gray-900' : 'text-gray-100';
  const textSecondary = theme === 'light' ? 'text-gray-600' : 'text-gray-400';
  const border = theme === 'light' ? 'border-gray-200' : 'border-gray-700';
  const inputBg = theme === 'light' ? 'bg-white border-gray-300' : 'bg-gray-700 border-gray-600';

  return (
    <div className={`${cardBg} ${textColor} rounded-lg shadow-md p-6 border ${border} transition-all duration-200`}>
      {isEditing ? (
        <div className="space-y-4">
          <div>
            <label className={`block text-sm font-medium mb-2 ${textSecondary}`}>
              Title
            </label>
            <input
              type="text"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              className={`w-full px-3 py-2 rounded border ${inputBg} ${textColor} focus:outline-none focus:ring-2 focus:ring-blue-500`}
              placeholder="Enter post title"
            />
          </div>
          
          <div>
            <label className={`block text-sm font-medium mb-2 ${textSecondary}`}>
              Body
            </label>
            <textarea
              value={editBody}
              onChange={(e) => setEditBody(e.target.value)}
              rows={4}
              className={`w-full px-3 py-2 rounded border ${inputBg} ${textColor} focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none`}
              placeholder="Enter post body"
            />
          </div>
          
          <div className="flex gap-2">
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors duration-200"
            >
              Save
            </button>
            <button
              onClick={handleCancel}
              className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors duration-200"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <>
          <h3 className={`text-xl font-semibold mb-3 ${textColor}`}>
            {post.title}
          </h3>
          <p className={`${textSecondary} mb-4 leading-relaxed`}>
            {post.body}
          </p>
          <div className="flex gap-2">
            <button
              onClick={handleEdit}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-200"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors duration-200"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default PostCard;