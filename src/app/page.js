"use client"

import React, { useRef } from 'react';
import VideoPlayer from '../Components/VideoPlayer/VideoPlayer.jsx'

export default function App() {
const playerRef = useRef(null);

  const videoJsOptions = {
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [{
      src: 'https://www.pexels.com/download/video/4274798/?fps=25.0&h=1080&w=1920',
      type: 'video/mp4'
    }]
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;
  };

  return (
    <div className='page-container'>
      <VideoPlayer options={videoJsOptions} onReady={handlePlayerReady} />
    </div>
  );
}