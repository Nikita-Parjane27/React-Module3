import React, { useContext } from 'react';
import { ThemeContext } from './context/themecontext';
import Theme from './components/Theme';
import PostList from './components/PostList';
import './App.css';

const AppContent = () => {
  const { theme } = useContext(ThemeContext);

  const bg = theme === 'light' ? 'bg-gray-50' : 'bg-gray-900';
  const textColor = theme === 'light' ? 'text-gray-900' : 'text-gray-100';

  return (
    <div className={`min-h-screen ${bg} ${textColor} transition-colors duration-300`}>
      <div className="container mx-auto px-4 py-8">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Post Manager</h1>
          <Theme />
        </header>
        
        <PostList />
      </div>
    </div>
  );
};

const App = () => {
  return <AppContent />;
};

export default App;