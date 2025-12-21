import React, { useContext } from 'react';
import { ThemeContext } from '../context/themecontext';

const Theme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
        theme === 'light'
          ? 'bg-gray-800 text-white hover:bg-gray-700'
          : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
      }`}
      aria-label="Toggle theme"
    >
      Switch Theme
    </button>
  );
};

export default Theme;