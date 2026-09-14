"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ShieldCheck, Cpu, Zap, Activity } from "lucide-react";

export function HeroVisual() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Gentle interactive mouse parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-6, 6]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex w-full items-center justify-center [perspective:1200px]"
    >
      {/* Ambient background glow */}
      <div
        className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-tr from-jade/20 via-jade-bright/10 to-transparent blur-3xl"
        aria-hidden="true"
      />

      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="group relative w-full overflow-hidden rounded-2xl border border-white/15 bg-ink-2/90 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7),0_0_40px_0_rgba(67,217,163,0.12)] backdrop-blur-xl"
      >
        {/* Subtle grid pattern overlay */}
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:28px_28px] opacity-60"
          aria-hidden="true"
        />

        {/* Top telemetry bar */}
        <div className="relative z-10 flex items-center justify-between border-b border-white/10 bg-black/40 px-4 py-2.5 sm:px-6">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-jade-bright opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-jade-bright" />
            </span>
            <span className="font-mono text-[0.7rem] uppercase tracking-wider text-white/90">
              NextKinLife Core Architecture
            </span>
          </div>

          <div className="hidden items-center gap-3 font-mono text-[0.68rem] text-white/60 sm:flex">
            <span className="flex items-center gap-1.5 text-jade-bright">
              <Activity className="h-3 w-3" />
              Active Nodes: 6
            </span>
            <span className="text-white/20">|</span>
            <span>Uptime: 99.99%</span>
          </div>
        </div>

        {/* Main image presentation */}
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-ink">
          <Image
            src="/images/hero-illustration.jpg"
            alt="NextKinLife enterprise cloud and AI architecture visualization"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 640px"
            priority
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />

          {/* Vignette & bottom gradient blend */}
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-transparent to-black/30"
            aria-hidden="true"
          />

          {/* Floating badge 1: Enterprise Grade (top right) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="absolute right-3 top-3 z-10 flex items-center gap-2 rounded-lg border border-white/15 bg-black/70 px-3 py-1.5 backdrop-blur-md sm:right-4 sm:top-4"
          >
            <ShieldCheck className="h-4 w-4 text-jade-bright" />
            <div className="text-left">
              <p className="font-mono text-[0.65rem] uppercase tracking-wider text-white/90">
                Enterprise Grade
              </p>
              <p className="text-[0.6rem] text-white/50">Zero-Trust Security</p>
            </div>
          </motion.div>

          {/* Floating badge 2: High Throughput (bottom left) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.6 }}
            className="absolute bottom-3 left-3 z-10 flex items-center gap-2 rounded-lg border border-white/15 bg-black/70 px-3 py-1.5 backdrop-blur-md sm:bottom-4 sm:left-4"
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-jade-bright/15 text-jade-bright">
              <Cpu className="h-4 w-4" />
            </div>
            <div>
              <p className="font-mono text-[0.65rem] uppercase tracking-wider text-white/90">
                High-Performance Compute
              </p>
              <p className="text-[0.6rem] text-jade-bright/90">Cloud-Native &amp; AI-Ready</p>
            </div>
          </motion.div>

          {/* Floating badge 3: Micro-pulse (bottom right) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="hidden items-center gap-2 rounded-lg border border-jade/30 bg-ink-2/90 px-3 py-1.5 shadow-lg backdrop-blur-md sm:absolute sm:bottom-4 sm:right-4 sm:flex"
          >
            <Zap className="h-3.5 w-3.5 text-jade-bright" />
            <span className="font-mono text-[0.65rem] tracking-wider text-white/80">
              Low-Latency Mesh
            </span>
          </motion.div>
        </div>

        {/* Bottom subtle detail caption */}
        <div className="flex items-center justify-between border-t border-white/10 bg-black/50 px-4 py-2 text-[0.7rem] text-white/60 sm:px-6">
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-jade-bright" />
            Synchronized across 3 global regions
          </span>
          <span className="font-mono uppercase tracking-widest text-white/40">
            USA · India · South Africa
          </span>
        </div>
      </motion.div>
    </div>
  );
}
