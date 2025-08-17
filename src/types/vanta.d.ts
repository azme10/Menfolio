declare module 'vanta' {
  export interface VantaEffect {
    destroy(): void;
  }

  export interface VantaOptions {
    el: HTMLElement;
    THREE?: any;
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    minHeight?: number;
    minWidth?: number;
    scale?: number;
    scaleMobile?: number;
    color?: string | number;
    backgroundColor?: string | number;
    points?: number;
    maxDistance?: number;
    spacing?: number;
    showDots?: boolean;
  }

  export function NET(options: VantaOptions): VantaEffect;
}

declare module 'vanta/dist/vanta.net.min.js' {
  export interface VantaEffect {
    destroy(): void;
  }

  export interface VantaOptions {
    el: HTMLElement;
    THREE?: any;
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    minHeight?: number;
    minWidth?: number;
    scale?: number;
    scaleMobile?: number;
    color?: string | number;
    backgroundColor?: string | number;
    points?: number;
    maxDistance?: number;
    spacing?: number;
    showDots?: boolean;
  }

  export function NET(options: VantaOptions): VantaEffect;
}

// Extend window object to include VANTA
declare global {
  interface Window {
    VANTA: {
      NET: (options: any) => any;
    };
  }
}
