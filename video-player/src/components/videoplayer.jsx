import React, { useRef } from 'react';
import { Play, Pause, FastForward, Rewind } from 'lucide-react';

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const videoSrc = "https://www.w3schools.com/html/mov_bbb.mp4";

  const handlePlay = () => {
    videoRef.current.play();
  };
  
  const handlePause = () => {
    videoRef.current.pause();
  };
  
  const handleForward = () => {
    videoRef.current.currentTime += 5;
  };
  
  const handleRewind = () => {
    videoRef.current.currentTime -= 5;
  };
  
  return (
    <div className="video-player-container">
      <div className="video-player-header">
        <h1>Video Player Using useRef</h1>
        <p>Mandatory Part: Single Video Control</p>
      </div>
      
      <div className="video-wrapper">
        <video
          ref={videoRef}
          src={videoSrc}
          width="100%"
          controls={false}
        >
          Your browser does not support the video tag.
        </video>
      </div>
      
      <div className="controls">
        <button onClick={handleRewind} className="btn btn-rewind">
          <Rewind size={20} />
          Rewind 5s
        </button>
        
        <button onClick={handlePlay} className="btn btn-play">
          <Play size={20} />
          Play
        </button>
        
        <button onClick={handlePause} className="btn btn-pause">
          <Pause size={20} />
          Pause
        </button>
        
        <button onClick={handleForward} className="btn btn-forward">
          <FastForward size={20} />
          Forward 5s
        </button>
      </div>      
    </div>
  );
};

export default VideoPlayer;