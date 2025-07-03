import React, { useEffect, useState } from 'react';

export default function FullTimeStatsOverlay({
  teamA = 'TEAM A',
  teamB = 'TEAM B',
  scoreA = 1,
  scoreB = 1,
  stats = {
    Possession: ['52%', '48%'],
    Shots: [12, 9],
    'Shots on Target': [6, 3],
    Fouls: [10, 12],
    Corners: [5, 4],
    YellowCards: [2, 3],
  }
}) {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: '40px',
        left: '1%',
        transform: 'translateX(-50%)',
        width: '90%',
        background: 'rgba(10, 10, 10, 0.95)',
        color: 'white',
        padding: '24px 32px',
        borderRadius: '16px',
        fontFamily: 'sans-serif',
        fontSize: '16px',
        fontWeight: 'bold',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        animation: 'fadeInOut 7s ease-in-out forwards',
        zIndex: 100,
      }}
    >
      <div style={{ fontSize: '24px', color: '#FFD700', marginBottom: '12px' }}>🕓 FULL-TIME STATS</div>

      {/* Team Names & Score */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '32px',
        fontSize: '20px',
        marginBottom: '20px'
      }}>
        <span>{teamA.toUpperCase()}</span>
        <span style={{ fontSize: '28px' }}>{scoreA} - {scoreB}</span>
        <span>{teamB.toUpperCase()}</span>
      </div>

      {/* Stats Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 2fr 1fr',
        width: '100%',
        gap: '12px',
        textAlign: 'center',
      }}>
        {Object.entries(stats).map(([label, [valA, valB]]) => (
          <React.Fragment key={label}>
            <div>{valA}</div>
            <div style={{ opacity: 0.8 }}>{label}</div>
            <div>{valB}</div>
          </React.Fragment>
        ))}
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
