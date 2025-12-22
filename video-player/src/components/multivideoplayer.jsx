import React, { useRef, useState } from 'react';
import { Play, Pause, FastForward, Rewind, SkipBack, SkipForward } from 'lucide-react';

const MultiVideoPlayer = () => {
  const videoRef = useRef(null);
  const videos = [
    "https://www.w3schools.com/html/mov_bbb.mp4",
    "https://www.w3schools.com/html/movie.mp4",
    "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
  ];
  
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
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
  
  const handlePrevious = () => {
    setCurrentVideoIndex((prevIndex) => 
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
  };
  
  const handleNext = () => {
    setCurrentVideoIndex((prevIndex) => 
      prevIndex === videos.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  return (
    <div className="video-player-container">
      <div className="video-player-header">
        <h1>Multi Video Player</h1>
        <p>Optional Part: Multiple Videos with useState + useRef</p>
      </div>
      
      <div className="video-wrapper">
        <video
          ref={videoRef}
          src={videos[currentVideoIndex]}
          width="100%"
          controls={false}
          key={currentVideoIndex} 
        >
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="video-info">
        <h3>Video {currentVideoIndex + 1} of {videos.length}</h3>
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
      
      <div className="navigation-controls">
        <button onClick={handlePrevious} className="btn btn-previous">
          <SkipBack size={20} />
          Previous Video
        </button>
        
        <button onClick={handleNext} className="btn btn-next">
          Next Video
          <SkipForward size={20} />
        </button>
      </div> 
</div>
        
  );
};

export default MultiVideoPlayer;