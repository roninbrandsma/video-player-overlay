import React, { useEffect, useState } from 'react';

export default function TeamRecentStatsCard() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  const teamA = {
    name: "Team A",
    stats: [
      "Last 5: W W D W L",
      "Goals Scored: 11",
      "Goals Conceded: 5",
      "Clean Sheets: 2",
      "Avg Possession: 53%",
    ]
  };

  const teamB = {
    name: "Team B",
    stats: [
      "Last 5: W D W W W",
      "Goals Scored: 14",
      "Goals Conceded: 3",
      "Clean Sheets: 3",
      "Avg Possession: 61%",
    ]
  };

  return (
    <div style={{
      position: 'absolute',
      bottom: '30px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '80%',
      backgroundColor: '#003366',
      color: 'white',
      fontFamily: 'sans-serif',
      borderRadius: '12px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
      padding: '20px 30px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      zIndex: 50,
      opacity: visible ? 1 : 0,
      transition: 'opacity 1.5s ease-in-out',
    }}>
      {/* Team A */}
      <div style={{ flex: 1, textAlign: 'center' }}>
        <h2 style={{ margin: '0 0 10px', fontSize: '20px' }}>{teamA.name}</h2>
        {teamA.stats.map((stat, index) => (
          <div key={index} style={{ margin: '4px 0', fontSize: '16px' }}>{stat}</div>
        ))}
      </div>

      {/* Divider */}
      <div style={{
        width: '1px',
        backgroundColor: 'rgba(255,255,255,0.3)',
        height: '100%',
        margin: '0 20px',
      }} />

      {/* Team B */}
      <div style={{ flex: 1, textAlign: 'center' }}>
        <h2 style={{ margin: '0 0 10px', fontSize: '20px' }}>{teamB.name}</h2>
        {teamB.stats.map((stat, index) => (
          <div key={index} style={{ margin: '4px 0', fontSize: '16px' }}>{stat}</div>
        ))}
      </div>
    </div>
  );
}
