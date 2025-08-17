'use client'

import React from 'react';

interface TestBackgroundProps {
  effectOptions?: {
    colors?: {
      primary?: number;
    };
  };
}

const TestBackground: React.FC<TestBackgroundProps> = ({ effectOptions }) => {
  return (
    <div 
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)'
      }}
    >
      <div style={{ color: 'white', padding: '20px' }}>
        Test Background Component Working
      </div>
    </div>
  );
};

export default TestBackground;
