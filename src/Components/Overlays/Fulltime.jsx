import React, { useEffect, useState } from 'react';

export default function FullTimeOverlay({ teamA, teamB, scoreA = 1, scoreB = 1 }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    const timer = setTimeout(() => setVisible(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      style={{
        position: 'absolute',
        bottom: '40px',
        left: '45px',
        transform: 'translateX(-50%)',
        width: '80%',
        background: 'rgba(20, 20, 20, 0.95)',
        color: 'white',
        padding: '16px 32px',
        borderRadius: '12px',
        fontFamily: 'sans-serif',
        fontSize: '20px',
        fontWeight: 'bold',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        animation: 'fadeInOut 5s ease-in-out forwards',
        zIndex: 100,
      }}
    >
      <div style={{ fontSize: '22px', color: '#FFD700' }}>🕓 FULL-TIME</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
        <span>{teamA.toUpperCase()}</span>
        <span style={{ fontSize: '24px' }}>{scoreA} - {scoreB}</span>
        <span>{teamB.toUpperCase()}</span>
      </div>

      <style>
        {`
          @keyframes fadeInOut {
            0% { opacity: 0; transform: translateY(20px); }
            10% { opacity: 1; transform: translateY(0); }
            90% { opacity: 1; transform: translateY(0); }
            100% { opacity: 0; transform: translateY(20px); }
          }
        `}
      </style>
    </div>
  );
}
