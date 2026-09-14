"use client";

import dynamic from "next/dynamic";

function SceneFallback() {
  return (
    <div
      className="dot-grid relative flex h-full w-full items-center justify-center"
      aria-hidden="true"
    >
      <div className="relative h-32 w-32">
        <div className="absolute inset-0 rounded-full border border-jade/25" />
        <div className="absolute inset-0 animate-ping rounded-full border border-jade-bright/30 [animation-duration:2.6s]" />
        <div className="absolute inset-6 rounded-full bg-jade/25 blur-md" />
      </div>
      <p className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[0.65rem] uppercase tracking-widest text-ink-muted">
        Initializing delivery engine…
      </p>
    </div>
  );
}

const HeroScene = dynamic(() => import("./hero-scene"), {
  ssr: false,
  loading: () => <SceneFallback />,
});

export function HeroVisual() {
  return (
    <div
      className="relative h-full w-full"
      role="img"
      aria-label="Interactive 3D visualization of NextKinLife's six service areas — web applications, data and analytics, AI integration, cloud services, enterprise software and IT consulting — orbiting a central delivery engine"
    >
      <HeroScene />
    </div>
  );
}
