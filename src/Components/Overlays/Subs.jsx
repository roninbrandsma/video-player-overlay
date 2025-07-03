import React, { useEffect, useState } from 'react';

export default function SubstitutionOverlay({ teamName, playerOut, playerIn }) {
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
        left: '50%',
        transform: 'translateX(-50%)',
        width: '80%',
        maxWidth: '900px',
        display: 'flex',
        justifyContent: 'center',
        zIndex: 30,
        pointerEvents: 'none',
      }}
    >
      <div
        style={{
          background: 'rgba(0, 90, 45, 0.95)',
          color: 'white',
          padding: '12px 24px',
          borderRadius: '10px',
          fontFamily: 'sans-serif',
          fontWeight: 'bold',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          animation: 'fadeInOut 5s ease-in-out forwards',
          pointerEvents: 'auto',
        }}
      >
        <div style={{ fontSize: '18px', marginBottom: '4px' }}>🔁 SUBSTITUTION</div>
        <div style={{ fontSize: '16px', opacity: 0.9, marginBottom: '6px' }}>
          {teamName.toUpperCase()}
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px',
            fontSize: '16px',
          }}
        >
          <span style={{ color: '#ff4d4d' }}>⬅️ {playerOut}</span>
          <span style={{ color: '#4dff4d' }}>➡️ {playerIn}</span>
        </div>
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
