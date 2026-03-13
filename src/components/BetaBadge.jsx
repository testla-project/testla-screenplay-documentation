import React from 'react';

export default function BetaBadge({ children }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1em' }}>
      <span
        style={{
          display: 'inline-block',
          background: 'var(--testla-secondary-color)',
          color: 'inherit',
          fontWeight: 'bold',
          borderRadius: '4px',
          padding: '2px 8px',
          fontSize: '0.9em',
          letterSpacing: '0.05em',
          marginRight: '0.75em',
        }}
      >
        BETA
      </span>
      <span style={{ fontSize: '1em' }}>
        {children || 'This module is currently in beta state.'}
      </span>
    </div>
  );
}
