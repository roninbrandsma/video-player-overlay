import React from 'react';

export default function KickoffGraphic({ teamA, teamB, teamALogo, teamBLogo }) {
  return (
    <div style={{
      position: 'absolute',
      bottom: '30px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '80%',
      height: '60px',
      backgroundColor: '#0044cc',
      borderRadius: '8px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 24px',
      color: 'white',
      fontFamily: 'sans-serif',
      fontWeight: 'bold',
      fontSize: '16px',
      boxShadow: '0px 4px 12px rgba(0,0,0,0.4)',
      zIndex: 20,
    }}>

      {/* Team A */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <img src={teamALogo} alt={`${teamA} Logo`} style={{
          width: '36px',
          height: '36px',
          borderRadius: '50%',
          border: '2px solid white',
          backgroundColor: '#fff',
        }} />
        <span>{teamA}</span>
      </div>

      {/* Kickoff Text */}
      <div style={{ fontSize: '18px', letterSpacing: '1px' }}>
        🕒 KICKOFF
      </div>

      {/* Team B */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span>{teamB}</span>
        <img src={teamBLogo} alt={`${teamB} Logo`} style={{
          width: '36px',
          height: '36px',
          borderRadius: '50%',
          border: '2px solid white',
          backgroundColor: '#fff',
        }} />
      </div>
    </div>
  );
}
