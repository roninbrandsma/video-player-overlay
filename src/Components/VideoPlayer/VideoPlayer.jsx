'use client'
// pages/VideoPlayer.js

import { useEffect, useRef, useState } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import '../VideoPlayer/VideoPlayer.scss'
import KickoffGraphic from '../Overlays/Kickoff';
import EntranceCard from '../Overlays/Entrance';
import TeamRecentStatsCard from '../Overlays/Stats';
import PlayerStatsCard from '../Overlays/HighlightedPlayer';
import ThrowInOverlay from '../Overlays/ThrowIn';
import OffsideOverlay from '../Overlays/Offside';
import FreeKickOverlay from '../Overlays/Freekick';
import CornerKickOverlay from '../Overlays/CornerKick';
import HalftimeOverlay from '../Overlays/Halftime';
import SubstitutionOverlay from '../Overlays/Subs';
import YellowCardOverlay from '../Overlays/YellowCard';
import FullTimeOverlay from '../Overlays/Fulltime';
import FullTimeStatsOverlay from '../Overlays/FulltimeStats';

const formatTime = (seconds) => {
  const secs = Math.floor(seconds % 60).toString().padStart(2, '0');
  const mins = Math.floor(seconds / 60).toString();
  return (
    `${mins}:${secs}`
  )
}

const styles = {
  container: {
    width: '280px',
    borderRadius: '12px',
    padding: '16px',
    fontFamily: 'Arial, sans-serif',
    fontSize: '14px',
  },
  page: {
    display: 'flex',
    flexDirection: 'row',
  },
  heading: {
    marginBottom: '12px',
    fontSize: '16px',
    fontWeight: 'bold',
    borderBottom: '1px solid #444',
    paddingBottom: '4px',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  item: {
    padding: '8px 12px',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'background 0.3s',
  },
  time: {
    fontWeight: 'bold',
    color: 'blue',
    paddingRight: '40px',
    width: '80px',
  },
  type: {
    textTransform: 'uppercase',
    fontSize: '13px',
    opacity: 0.85,
  },
};

export function VideoPlayer({
  playerOptions,
  markers = [],  // Array of markers with { start, duration, graphic }
}) {
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const [activeMarkers, setActiveMarkers] = useState([]);
  const [loading, setLoading] = useState(true);


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

  const handleTimeClick = (time) => {
    if (playerRef && playerRef.current) {
      playerRef.current.currentTime(time);
    }
  }

  return (
    <>
    {videoRef && videoRef.current && (
      <div style={styles.page}>
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
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            zIndex: 10,
            pointerEvents: 'none',
            overflow: 'hidden',
          }}
          >
            {/* You can customize the content of each overlay */}
            {marker.type === 'shotsOnTarget' && (
              <div className='shotOnTarget' style={{
                position: 'relative',
                display: 'flex',
                alignSelf: 'end',
                justifySelf: 'start',
                bottom: '30px',
                backgroundColor: 'rgba(255, 255, 255, 0.85)',
                color: 'black',
                padding: '8px 8px',
                fontFamily: 'Arial, Helvetica, sans-serif',
                fontSize: '20px',
                gap: '8px',
                borderRadius: '0 8px 8px 0',
                borderTop: '2px solid white',
                borderRight: '2px solid white',
                borderBottom: '2px solid white',
                width: '50%',
                height: '20%'
                // animation: 'slideInOut 6s ease-in-out forwards'
              }}>
                <img src={marker.graphic} style={{
                  width: '100px',
                  borderRadius: '8px',
                  border: '2px solid white'
                }}/>

                <div style={{
                  display: 'block',
                  alignContent: 'center',
                  width: '60%',
                }}>
                  <span style={{
                    fontWeight: 'bold',
                    justifySelf: 'center',
                    alignSelf: 'center',
                  }}>Shots on Target: </span>

                  <span style={{
                    justifySelf: 'center',
                    alignSelf: 'center',
                    paddingTop: '15px',
                    fontWeight: 'bold',
                  }}>
                    {marker.player}
                  </span>
                </div>

                <span style={{
                  fontWeight: 'lighter',
                  fontSize: '40px',
                  justifySelf: 'center',
                  alignSelf: 'center',
                }}>
                  {marker.shots}
                </span>
              </div>
            )}

            {marker.type === 'goal' && (
              <div index={0} className='goal' style={{
                position: 'relative',
                display: 'flex',
                alignSelf: 'end',
                justifySelf: 'start',
                bottom: '30px',
                gap: '12px',
                backgroundColor: 'rgba(255, 255, 255, 0.85)',
                color: 'black',
                padding: '10px 20px',
                borderRadius: '10px',
                fontFamily: 'Arial, Helvetica, sans-serif',
                border: '2px solid white',
                animation: 'slideInOut 8s ease-in-out forwards'
              }}
              >
                <img src={marker.graphic} style={{ width: '50px', borderRadius: '8px', border: '2px solid white' }} alt="Team" />

                <div style={{
                  display: 'block',
                }}>
                  <span style={{
                    alignSelf: 'end',
                    justifySelf: 'center',
                    fontWeight: 'bold',
                    fontStyle: 'italic',
                    fontSize: '20px',
                    display: 'block',
                  }}>
                    ⚽ GOAL!
                  </span>

                  <span style={{
                    justifySelf: 'center',
                    paddingTop: '15px',
                    fontWeight: 'bold',
                    display: 'block',
                  }}>
                    {marker.player} {marker.minute}ʼ
                  </span>
                </div>
              </div>
            )}

            {marker.type === 'kickoff' && (
              <KickoffGraphic teamA={'TEAM A'} teamB={'TEAM B'} teamALogo={'assets/teamA.png'} teamBLogo={'assets/teamB.png'} />
            )}

            {marker.type === 'entrance' && (
              <EntranceCard teamA={'TEAM A'} teamB={'TEAM B'} teamALogo={'assets/teamA.png'} teamBLogo={'assets/teamB.png'} />
            )}

            {marker.type === 'stats' && (
              <TeamRecentStatsCard teamALogo={'assets/teamA.png'} teamBLogo={'assets/teamB.png'} />
            )}

            {marker.type === 'highlightedPlayer' && (
              <PlayerStatsCard />
            )}

            {marker.type === 'throwIn' && (
              <ThrowInOverlay team={marker.team} />
            )}

            {marker.type === 'offside' && (
              <OffsideOverlay team={marker.team} />
            )}

            {marker.type === 'freeKick' && (
              <FreeKickOverlay team={marker.team} />
            )}

            {marker.type === 'cornerKick' && (
              <CornerKickOverlay team={marker.team} />
            )}

            {marker.type === 'halfTime' && (
              <HalftimeOverlay />
            )}

            {marker.type === 'substitution' && (
              <SubstitutionOverlay teamName={marker.team} playerOut={marker.playerOut} playerIn={marker.playerIn} />
            )}

            {marker.type === 'yellowCard' && (
              <YellowCardOverlay teamName={marker.team} playerName={marker.player} shirtNumber={marker.number} />
            )}

            {marker.type === 'fullTime' && (
              <FullTimeOverlay teamA={'TEAM A'} teamB={'TEAM B'} />
            )}

            {marker.type === 'fullTimeStats' && (
              <FullTimeStatsOverlay />
            )}

          </div>
        ))}

        <style jsx>{`
          .video-container {
            position: relative;
            max-width: 100%;
            width: 1280px;
            height: 720px;  // or set the width as you want
            margin: auto;
            }

            video {
              width: 100%;
              height: 100%;
              }
              `}</style>
      </div>
      <div className='timeline-container'>
        <h3>Timeline Markers</h3>
          {playerRef && playerRef.current && markers && markers.map((marker, key) => (
            <div
            key={key}
            style={styles.item}
            onClick={() => handleTimeClick(marker.start)}
            >
            <span style={styles.time}>{formatTime(marker.start)}</span>
            <span style={styles.type}>{marker.type}</span>
          </div>
        ))}
      </div>
    </div>
    )}
    </>
  );
}
