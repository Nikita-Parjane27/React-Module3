import React, { useState } from 'react';
import VideoPlayer from './components/videoplayer.jsx';
import MultiVideoPlayer from './components/multivideoplayer.jsx';
import './index.css';

function App() {
  const [showOptional, setShowOptional] = useState(false);
  
  return (
    <div className="app">
      <div className="toggle-container">
        <button 
          onClick={() => setShowOptional(false)}
          className={`toggle-btn ${!showOptional ? 'active' : ''}`}
        >
          Mandatory Part (Single Video)
        </button>
        <button 
          onClick={() => setShowOptional(true)}
          className={`toggle-btn ${showOptional ? 'active' : ''}`}
        >
          Optional Part (Multiple Videos)
        </button>
      </div>
      
      {showOptional ? <MultiVideoPlayer /> : <VideoPlayer />}
    </div>
  );
}

export default App;