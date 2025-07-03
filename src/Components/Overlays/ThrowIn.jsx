import React, { useEffect, useState } from 'react';

export default function ThrowInOverlay({ team }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    const timer = setTimeout(() => setVisible(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div style={{
      position: 'absolute',
      bottom: '40px',
      left: '50%',
      transform: 'translateX(-50%)',
      maxWidth: '700px',
      width: '100%',
      background: 'rgba(0, 72, 186, 0.95)',
      color: 'white',
      padding: '12px 24px',
      borderRadius: '12px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontFamily: 'sans-serif',
      fontSize: '20px',
      fontWeight: 'bold',
      animation: 'fadeInOut 4s ease-in-out forwards',
      zIndex: 20,
    }}>
      <span style={{ fontSize: '18px', opacity: 0.9 }}>⚽ THROW-IN</span>
      <span style={{ fontSize: '22px' }}>{team.toUpperCase()}</span>

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
