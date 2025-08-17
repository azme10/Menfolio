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

const VantaBackground: React.FC<VantaBackgroundProps> = ({ effectOptions = {} }) => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !vantaRef.current) return;

    const initVanta = async () => {
      try {
        const THREE = await import('three');
        
        // Import Vanta NET effect differently
        await import('vanta/dist/vanta.net.min.js');
        
        if (vantaEffect.current) {
          vantaEffect.current.destroy();
        }

        // Access VANTA from window object after import
        const VANTA = (window as any).VANTA;
        if (!VANTA || !VANTA.NET) {
          throw new Error('VANTA.NET not available');
        }

        vantaEffect.current = VANTA.NET({
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
        console.error('Vanta.js error:', error);
      }
    };

    const timeout = setTimeout(initVanta, 100);

    return () => {
      clearTimeout(timeout);
      if (vantaEffect.current) {
        try {
          vantaEffect.current.destroy();
        } catch (e) {
          // Silent cleanup
        }
      }
    };
  }, [mounted, effectOptions]);

  if (!mounted) {
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
