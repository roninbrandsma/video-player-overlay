'use client'
// pages/VideoPlayer.js

import { useEffect, useRef, useState } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

export function VideoPlayer({
  playerOptions,
  markers = [],  // Array of markers with { start, duration, graphic }
}) {
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const [activeMarkers, setActiveMarkers] = useState([]);

  useEffect(() => {
    // Initialize the video.js player with the passed playerOptions
    playerRef.current = videojs(videoRef.current, {
      ...playerOptions,
    });

    const handleTimeUpdate = () => {
      const currentTime = playerRef.current.currentTime();
      // Find markers that are active (current time is within the start and duration)
      const active = markers.filter(
        (marker) => currentTime >= marker.start && currentTime < marker.start + marker.duration
      );
      setActiveMarkers(active);  // Update the state with active markers
    };

    // Listen for time updates to show/hide overlays
    playerRef.current.on('timeupdate', handleTimeUpdate);

    // Cleanup on component unmount
    return () => {
      playerRef.current.off('timeupdate', handleTimeUpdate);
      if (playerRef.current) {
        playerRef.current.dispose();
      }
    };
  }, [playerOptions, markers]);  // Re-run effect if markers or playerOptions change

  return (
    <div className="video-container">
      <video
        ref={videoRef}
        className="video-js vjs-default-skin"
        controls
        preload="auto"
        autoPlay
        data-setup="{}"
      >
        {playerOptions.sources.map((source, index) => (
          <source key={index} src={source.src} type={source.type} />
        ))}
        Your browser does not support the video tag.
      </video>

      {/* Render active markers */}
      {activeMarkers.map((marker, index) => (
        <div
          key={index}
          className="overlay"
          style={{
            display: 'flex',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            zIndex: 10,
            pointerEvents: 'none',
          }}
        >
          {/* You can customize the content of each overlay */}
            <div style={{
              key: [0],
              position: 'absolute',
              bottom: '30px',
              left: 0,
              backgroundColor: 'rgba(255, 255, 255, 0.75)',
              border: '2px solid #ffffff55',
              fontFamily: 'sans-serif',
              fontSize: '16px',
              fontWeight: 'bold',
              display: 'flex',
              gap: '10px',
              boxShadow: '0 0 10px rgba(0,0,0,0.6)'
            }}
          >
              <img src={marker.graphic} style={{
                  width: '80px',
              }}/>
              <h2 style={{
                fontWeight: 'bold',
                alignSelf: 'start',
                fontStyle: 'italic',
              }}>
                GOAL!
              </h2>
              <h3 style={{
                fontWeight: '10px',
                alignSelf: 'end',
              }}>
                Robert Lundström
              </h3>
            </div>
        </div>
      ))}

      <style jsx>{`
        .video-container {
          position: relative;
          max-width: 100%;
          width: 800px;  // or set the width as you want
          margin: auto;
        }

        video {
          width: 100%;
          height: auto;
        }
      `}</style>
    </div>
  );
}
