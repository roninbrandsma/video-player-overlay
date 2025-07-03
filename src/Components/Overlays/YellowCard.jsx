import React, { useEffect, useState } from 'react';

export default function YellowCardOverlay({teamName, playerName, shirtNumber }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    const timer = setTimeout(() => setVisible(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      style={{
        position: 'absolute',
        bottom: '10px',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '60%',
        background: '#FFD700', // Yellow card color
        color: 'black',
        padding: '20px 30px',
        borderRadius: '10px',
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        animation: 'fadeInOut 4s ease-in-out forwards',
        boxShadow: '0 0 12px rgba(0,0,0,0.3)',
        zIndex: 999,
      }}
    >
      <div style={{ fontSize: '22px', marginBottom: '6px' }}>🟨 YELLOW CARD</div>
      <div style={{ fontSize: '20px' }}>{playerName.toUpperCase()} #{shirtNumber}</div>
      <div style={{ fontSize: '16px', opacity: 0.8 }}>{teamName.toUpperCase()}</div>

      <style>
        {`
          @keyframes fadeInOut {
            0% { opacity: 0; transform: translate(-50%, -30%); }
            10% { opacity: 1; transform: translate(-50%, -50%); }
            90% { opacity: 1; transform: translate(-50%, -50%); }
            100% { opacity: 0; transform: translate(-50%, -30%); }
          }
        `}
      </style>
    </div>
  );
}
