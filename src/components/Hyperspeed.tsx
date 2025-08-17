'use client'

import React, { useEffect, useRef, useState } from 'react';
import './Hyperspeed.css';

interface VantaBackgroundProps {
  effectOptions?: {
    colors?: {
      primary?: number;
      secondary?: number;
      accent?: number;
    };
  };
}

const VantaBackground: React.FC<VantaBackgroundProps> = ({
  effectOptions = {},
}) => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted || !vantaRef.current) return;

    const initVanta = async () => {
      try {
        const THREE = await import('three');
        const { NET } = await import('vanta');
        
        if (vantaEffect.current) {
          vantaEffect.current.destroy();
        }

        vantaEffect.current = NET({
          el: vantaRef.current!,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: effectOptions.colors?.primary || 0x3f40ff,
          backgroundColor: 0x0a0a0a,
          points: 10.00,
          maxDistance: 20.00,
          spacing: 15.00,
          showDots: true
        });
        
      } catch (error) {
        console.error('Error loading Vanta effect:', error);
      }
    };

    const timeoutId = setTimeout(initVanta, 100);

    return () => {
      clearTimeout(timeoutId);
      if (vantaEffect.current) {
        try {
          vantaEffect.current.destroy();
        } catch (error) {
          console.warn('Error destroying Vanta effect:', error);
        }
      }
    };
  }, [effectOptions, isMounted]);

  if (!isMounted) {
    return (
      <div 
        className="hyperspeed-container"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)'
        }}
      />
    );
  }

  return (
    <div 
      ref={vantaRef} 
      className="hyperspeed-container"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        backgroundColor: '#0a0a0a'
      }}
    />
  );
};

export default VantaBackground;
