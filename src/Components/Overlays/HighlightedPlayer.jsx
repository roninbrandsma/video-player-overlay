import React, { useEffect, useState } from 'react';

export default function PlayerStatsCard() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  const player = {
    name: "Jaden Silva",
    team: "TEAM A",
    position: "Forward",
    number: 9,
    photo: "assets/highlightedplayer.jpg",
    stats: {
      goals: 12,
      assists: 5,
      shots: 37,
      passes: 210,
      passAccuracy: "82%",
    },
  };

  return (
    <div style={{
      position: 'absolute',
      bottom: '30px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '60%',
      backgroundColor: '#002244',
      color: 'white',
      fontFamily: 'sans-serif',
      borderRadius: '10px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
      padding: '15px 25px',
      display: 'flex',
      alignItems: 'center',
      opacity: visible ? 1 : 0,
      transition: 'opacity 1.5s ease-in-out',
      zIndex: 50,
    }}>
      {/* Player Image */}
      <img
        src={player.photo}
        alt={player.name}
        style={{
          height: '100px',
          width: '100px',
          borderRadius: '8px',
          objectFit: 'cover',
          marginRight: '20px',
          border: '2px solid white'
        }}
      />

      {/* Player Info and Stats */}
      <div style={{ flex: 1 }}>
        <h2 style={{ margin: '0 0 5px', fontSize: '20px' }}>
          {player.name} <span style={{ fontWeight: 'normal', fontSize: '16px' }}>#{player.number}</span>
        </h2>
        <p style={{ margin: '0 0 10px', fontSize: '14px', color: '#ccc' }}>
          {player.team} – {player.position}
        </p>

        <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '100%' }}>
          <div style={{ fontSize: '14px' }}>Goals: <strong>{player.stats.goals}</strong></div>
          <div style={{ fontSize: '14px' }}>Assists: <strong>{player.stats.assists}</strong></div>
          <div style={{ fontSize: '14px' }}>Shots: <strong>{player.stats.shots}</strong></div>
          <div style={{ fontSize: '14px' }}>Passes: <strong>{player.stats.passes}</strong></div>
          <div style={{ fontSize: '14px' }}>Pass Accuracy: <strong>{player.stats.passAccuracy}</strong></div>
        </div>
      </div>
    </div>
  );
}
