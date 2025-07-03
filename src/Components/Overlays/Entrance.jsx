import React, { useEffect, useState } from 'react';

export default function EntranceCard({ teamA, teamB, teamALogo, teamBLogo, duration }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    const timeout = setTimeout(() => {
      setVisible(false);
    }, duration);
    return () => clearTimeout(timeout);
  }, [duration]);

  return (
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '70%', // narrowed a bit
        height: '180px',
        background: 'linear-gradient(to right, #001f3f, #003366)',
        borderRadius: '16px',
        boxShadow: '0 0 20px rgba(0,0,0,0.6)',
        display: visible ? 'flex' : 'none',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 40px',
        color: 'white',
        fontFamily: 'sans-serif',
        zIndex: 100,
        opacity: visible ? 1 : 0,
        transition: 'opacity 1s ease-in-out',
        gap: '80px' // this sets the space between team blocks and brings logos closer
      }}
    >
      {/* Team A */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
      }}>
        <img src={teamALogo} alt={`${teamA} Logo`} style={{
          width: '70px',
          height: '70px',
          borderRadius: '50%',
          border: '2px solid white',
          backgroundColor: '#fff',
        }} />
        <span style={{ fontSize: '20px', fontWeight: 'bold' }}>{teamA}</span>
      </div>

      {/* VS Text */}
      <div style={{
        fontSize: '28px',
        fontWeight: 'bold',
        letterSpacing: '2px',
        textShadow: '2px 2px 4px #000',
      }}>
        VS
      </div>

      {/* Team B */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
      }}>
        <img src={teamBLogo} alt={`${teamB} Logo`} style={{
          width: '70px',
          height: '70px',
          borderRadius: '50%',
          border: '2px solid white',
          backgroundColor: '#fff',
        }} />
        <span style={{ fontSize: '20px', fontWeight: 'bold' }}>{teamB}</span>
      </div>
    </div>
  );
}
