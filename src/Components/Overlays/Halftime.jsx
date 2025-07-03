import React, { useEffect, useState } from 'react';

export default function HalftimeOverlay({
  teamA = { name: 'TEAM A', logo: 'assets/teamA.png', score: 1 },
  teamB = { name: 'TEAM B', logo: 'assets/teamB.png', score: 0 }
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    const timer = setTimeout(() => setVisible(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div style={{
      position: 'absolute',
      bottom: '40px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '100%',
      maxWidth: '800px',
      background: 'rgba(40, 40, 40, 0.95)',
      color: 'white',
      padding: '16px 32px',
      borderRadius: '12px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontFamily: 'sans-serif',
      fontSize: '22px',
      fontWeight: 'bold',
      animation: 'fadeInOut 5s ease-in-out forwards',
      zIndex: 30,
    }}>
      {/* Team A */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        {teamA.logo && (
          <img src={teamA.logo} alt={`${teamA.name} logo`} style={{ height: '40px', width: '40px' }} />
        )}
        <span>{teamA.name}</span>
        <span style={{ fontSize: '28px' }}>{teamA.score}</span>
      </div>

      {/* HALFTIME */}
      <div style={{ fontSize: '24px', letterSpacing: '1px' }}>🕒 HALFTIME</div>

      {/* Team B */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <span style={{ fontSize: '28px' }}>{teamB.score}</span>
        <span>{teamB.name}</span>
        {teamB.logo && (
          <img src={teamB.logo} alt={`${teamB.name} logo`} style={{ height: '40px', width: '40px' }} />
        )}
      </div>

      <style>
        {`
          @keyframes fadeInOut {
            0% { opacity: 0; transform: translate(-50%, 20px); }
            10% { opacity: 1; transform: translate(-50%, 0); }
            90% { opacity: 1; transform: translate(-50%, 0); }
            100% { opacity: 0; transform: translate(-50%, 20px); }
          }
        `}
      </style>
    </div>
  );
}
