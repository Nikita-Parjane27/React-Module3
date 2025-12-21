import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from './context/themecontext';
import { PostsProvider } from './context/postcontext';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <PostsProvider>
        <App />
      </PostsProvider>
    </ThemeProvider>
  </React.StrictMode>
);