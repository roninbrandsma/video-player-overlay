import React from 'react';

export default function MarkerList({ markers = [], handleTimeClick, playerRef }) {
  if (!playerRef?.current || !markers.length) return null;

  return (
    <div style={styles.container}>
      <h3 style={styles.heading}>📍 Match Events</h3>
      <div style={styles.list}>
        {markers.map((marker, key) => (
          <div
            key={key}
            style={styles.item}
            onClick={() => handleTimeClick(marker.start)}
          >
            <span style={styles.time}>{formatTime(marker.start)}</span>
            <span style={styles.type}>{marker.type}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Utility function to format time in mm:ss
function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60).toString().padStart(2, '0');
  return `${mins}:${secs}`;
}

// Inline styles
const styles = {
  container: {
    width: '280px',
    background: 'rgba(20, 20, 20, 0.9)',
    color: '#fff',
    borderRadius: '12px',
    padding: '16px',
    fontFamily: 'Arial, sans-serif',
    fontSize: '14px',
  },
  heading: {
    marginBottom: '12px',
    fontSize: '16px',
    fontWeight: 'bold',
    borderBottom: '1px solid #444',
    paddingBottom: '4px',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  item: {
    backgroundColor: '#2d2d2d',
    padding: '8px 12px',
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'background 0.3s',
  },
  time: {
    fontWeight: 'bold',
    color: '#FFD700',
  },
  type: {
    textTransform: 'uppercase',
    fontSize: '13px',
    opacity: 0.85,
  },
};

// Example usage:
// <MarkerList markers={markers} handleTimeClick={handleTimeClick} playerRef={playerRef} />
