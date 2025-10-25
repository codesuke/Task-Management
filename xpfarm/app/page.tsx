'use client';

import { useState } from 'react';
import Dither from '@/components/Dither';

export default function Home() {
  const [, setVideoLoaded] = useState(false);

  return (
    <div className="relative min-h-screen w-full bg-[#000000]">
      {/* Background Video */}
      <div className="fixed inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
          className="h-full w-full object-cover opacity-80"
        >
          <source src="/asset/Landing.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-linear-to-b from-black/90 via-black/70 to-black"></div>
      </div>

      {/* Subtle Grid */}
      <div className="fixed inset-0 z-0 cyber-grid opacity-10"></div>

      {/* Main Content - Testing Dither Component */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center p-8">
        <div className="w-full max-w-4xl h-96 rounded-lg overflow-hidden border border-[#4D4D4D]">
          <Dither
            waveSpeed={0.05}
            waveFrequency={3}
            waveAmplitude={0.3}
            waveColor={[0.7, 0.7, 0.7]}
            colorNum={6}
            pixelSize={3}
            enableMouseInteraction={true}
            mouseRadius={1.5}
          />
        </div>
        <p className="mt-6 text-[#A8A8A8] text-center" style={{ fontFamily: 'KodeMono, monospace' }}>
          Dither Component Test - Move your mouse over the canvas
        </p>
      </div>
    </div>
  );
}
