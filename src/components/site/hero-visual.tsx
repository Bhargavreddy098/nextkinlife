"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";
import {
  Boxes,
  BrainCircuit,
  CloudCog,
  Database,
  LayoutDashboard,
  MessagesSquare,
  type LucideIcon,
} from "lucide-react";

/* ------------------------------- services --------------------------------- */

const SERVICES: { id: string; label: string; icon: LucideIcon }[] = [
  { id: "web", label: "Web Applications", icon: Boxes },
  { id: "data", label: "Data & Analytics", icon: Database },
  { id: "ai", label: "AI Integration", icon: BrainCircuit },
  { id: "cloud", label: "Cloud Services", icon: CloudCog },
  { id: "enterprise", label: "Enterprise Software", icon: LayoutDashboard },
  { id: "consult", label: "IT Consulting", icon: MessagesSquare },
];

const DRIFT_SPEED = 0.11; // rad/s — constant auto-scroll of the orbit
const EASE = [0.22, 1, 0.36, 1] as const;

/* client-only gate without setState-in-effect */
const emptySubscribe = () => () => {};
function useMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

/* ------------------------------ service chip ------------------------------- */

function ServiceChip({
  service,
  base,
  rotation,
  rx,
  ry,
  cx,
  cy,
  index,
}: {
  service: (typeof SERVICES)[number];
  base: number;
  rotation: MotionValue<number>;
  rx: number;
  ry: number;
  cx: number;
  cy: number;
  index: number;
}) {
  const angle = useTransform(rotation, (r) => r + base);
  const x = useTransform(angle, (a) => Math.cos(a) * rx);
  const y = useTransform(angle, (a) => Math.sin(a) * ry);
  // sin > 0 → lower half of the ellipse → closest to the viewer
  const depth = useTransform(angle, (a) => Math.sin(a));
  const scale = useTransform(depth, [-1, 1], [0.62, 1.04]);
  const opacity = useTransform(depth, [-1, 1], [0.22, 1]);
  const blurPx = useTransform(depth, [-1, 1], [3.5, 0]);
  const filter = useTransform(blurPx, (b) => `blur(${b.toFixed(2)}px)`);
  const zIndex = useTransform(depth, (d) => Math.round(50 + d * 40));
  const reduced = useReducedMotion();
  const Icon = service.icon;

  return (
    <motion.div
      className="pointer-events-none absolute will-change-transform"
      style={{ left: cx, top: cy, x, y, zIndex }}
    >
      {/* entrance pop — nested so it composes with the depth transforms */}
      <motion.div
        initial={reduced ? false : { opacity: 0, scale: 0.4 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 0.55 + index * 0.09,
          type: "spring",
          stiffness: 130,
          damping: 14,
        }}
      >
        <motion.div
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ scale, opacity, filter }}
        >
          <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-[#121714]/90 px-3 py-2 shadow-[0_18px_44px_rgba(0,0,0,0.55)] backdrop-blur-md sm:gap-2.5 sm:px-3.5 sm:py-2.5">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-jade-bright/10 ring-1 ring-jade-bright/25 sm:h-7 sm:w-7">
              <Icon className="h-3 w-3 text-jade-bright sm:h-3.5 sm:w-3.5" aria-hidden="true" />
            </span>
            <span className="whitespace-nowrap font-mono text-[8px] uppercase tracking-[0.14em] text-white/85 sm:text-[10px]">
              {service.label}
            </span>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

/* --------------------------- orbiting micro-dot ---------------------------- */

function OrbitDot({
  base,
  rotation,
  rx,
  ry,
  cx,
  cy,
}: {
  base: number;
  rotation: MotionValue<number>;
  rx: number;
  ry: number;
  cx: number;
  cy: number;
}) {
  const angle = useTransform(rotation, (r) => r + base);
  const x = useTransform(angle, (a) => Math.cos(a) * rx);
  const y = useTransform(angle, (a) => Math.sin(a) * ry);
  const depth = useTransform(angle, (a) => Math.sin(a));
  const opacity = useTransform(depth, [-1, 1], [0.08, 0.6]);
  const scale = useTransform(depth, [-1, 1], [0.5, 1]);

  return (
    <motion.span
      className="pointer-events-none absolute h-1 w-1 rounded-full bg-jade-bright/70"
      style={{ left: cx, top: cy, x, y, opacity, scale, marginLeft: -2, marginTop: -2 }}
      aria-hidden="true"
    />
  );
}

/* --------------------- light pulse racing along the ring ------------------- */

function RingPulse({
  offset,
  rotation,
  rx,
  ry,
  cx,
  cy,
}: {
  offset: number;
  rotation: MotionValue<number>;
  rx: number;
  ry: number;
  cx: number;
  cy: number;
}) {
  const angle = useTransform(rotation, (r) => r * 2.6 + offset);
  const x = useTransform(angle, (a) => Math.cos(a) * rx);
  const y = useTransform(angle, (a) => Math.sin(a) * ry);
  const depth = useTransform(angle, (a) => Math.sin(a));
  const opacity = useTransform(depth, [-1, 1], [0.05, 0.9]);
  const scale = useTransform(depth, [-1, 1], [0.4, 1.2]);

  return (
    <motion.span
      className="pointer-events-none absolute h-1.5 w-1.5 rounded-full bg-jade-bright shadow-[0_0_14px_3px_rgba(67,217,163,0.5)]"
      style={{ left: cx, top: cy, x, y, opacity, scale, marginLeft: -3, marginTop: -3, zIndex: 40 }}
      aria-hidden="true"
    />
  );
}

/* ------------- faint counter-orbiting dust on the outer ellipse ------------ */

function CounterDot({
  offset,
  rotation,
  rx,
  ry,
  cx,
  cy,
}: {
  offset: number;
  rotation: MotionValue<number>;
  rx: number;
  ry: number;
  cx: number;
  cy: number;
}) {
  const angle = useTransform(rotation, (r) => -r * 0.5 + offset);
  const x = useTransform(angle, (a) => Math.cos(a) * rx);
  const y = useTransform(angle, (a) => Math.sin(a) * ry);
  const depth = useTransform(angle, (a) => Math.sin(a));
  const opacity = useTransform(depth, [-1, 1], [0.06, 0.38]);

  return (
    <motion.span
      className="pointer-events-none absolute h-[3px] w-[3px] rounded-full bg-white/60"
      style={{ left: cx, top: cy, x, y, opacity, marginLeft: -1.5, marginTop: -1.5 }}
      aria-hidden="true"
    />
  );
}

/* ------------------- energy line from the core to a chip ------------------- */

function Connector({
  base,
  rotation,
  rx,
  ry,
  cx,
  cy,
}: {
  base: number;
  rotation: MotionValue<number>;
  rx: number;
  ry: number;
  cx: number;
  cy: number;
}) {
  const angle = useTransform(rotation, (r) => r + base);
  const x2 = useTransform(angle, (a) => cx + Math.cos(a) * rx * 0.82);
  const y2 = useTransform(angle, (a) => cy + Math.sin(a) * ry * 0.82);
  const depth = useTransform(angle, (a) => Math.sin(a));
  const opacity = useTransform(depth, [0.2, 1], [0, 0.35]);

  return (
    <motion.line
      x1={cx}
      y1={cy}
      style={{ x2, y2, opacity }}
      stroke="rgba(67,217,163,0.55)"
      strokeWidth={1}
      strokeDasharray="3 6"
      aria-hidden="true"
    />
  );
}

/* ------------------------------ floating fact ------------------------------ */

function FloatingFact({
  value,
  label,
  className,
  delay,
  reduced,
}: {
  value: string;
  label: string;
  className: string;
  delay: number;
  reduced: boolean | null;
}) {
  return (
    <motion.div
      className={`absolute z-[90] hidden sm:block ${className}`}
      initial={reduced ? false : { opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: EASE, delay: 1.1 + delay }}
    >
      <motion.div
        animate={reduced ? undefined : { y: [0, -7, 0] }}
        transition={{ duration: 5 + delay * 2, repeat: Infinity, ease: "easeInOut" }}
        className="rounded-lg border border-white/10 bg-[#121714]/85 px-3.5 py-2.5 shadow-[0_18px_44px_rgba(0,0,0,0.5)] backdrop-blur-md"
      >
        <p className="font-display text-xl leading-none text-white">{value}</p>
        <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.16em] text-ink-muted">
          {label}
        </p>
      </motion.div>
    </motion.div>
  );
}

/* ------------------------------- the visual -------------------------------- */

export function HeroVisual() {
  const reduced = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ w: 560, h: 420 });
  /* animated stage mounts client-side only — avoids SSR hydration mismatches
     from continuously-updating motion values */
  const mounted = useMounted();

  /* measure the container so the orbit always fits its slot */
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      if (width > 0 && height > 0) setSize({ w: width, h: height });
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  /* auto-drift of the orbit */
  const drift = useMotionValue(-Math.PI / 2 - 0.35);
  useEffect(() => {
    if (reduced) return;
    let raf = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      drift.set(drift.get() + dt * DRIFT_SPEED);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reduced, drift]);

  /* page scroll spins the orbit further */
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const rotation = useTransform([drift, scrollYProgress], ([d, p]: number[]) =>
    d + (reduced ? 0 : p * Math.PI * 1.15)
  );

  /* pointer parallax on the whole stage */
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const px = useSpring(useTransform(mx, [-1, 1], [-10, 10]), { stiffness: 55, damping: 16 });
  const py = useSpring(useTransform(my, [-1, 1], [-7, 7]), { stiffness: 55, damping: 16 });

  /* orbit geometry — scales with the slot, no card constraining it */
  const compact = size.w < 480;
  const rx = Math.min(size.w * (compact ? 0.36 : 0.44), 310);
  const ry = Math.min(size.h * (compact ? 0.34 : 0.37), 212);
  const cx = size.w / 2;
  const cy = size.h * 0.52;
  const bandW = Math.max(40, Math.min(rx * 0.3, 64));
  /* chips shrink slightly on very small phones so the orbit stays graceful */
  const stageScale = compact ? 0.86 : 1;

  return (
    <div
      ref={containerRef}
      className="relative h-full w-full"
      role="img"
      aria-label="Animated orbit showcasing NextKinLife's six services — web applications, data and analytics, AI integration, cloud services, enterprise software and IT consulting — revolving around a central core, spinning as you scroll"
      onPointerMove={(e) => {
        if (reduced) return;
        const r = e.currentTarget.getBoundingClientRect();
        mx.set(((e.clientX - r.left) / r.width) * 2 - 1);
        my.set(((e.clientY - r.top) / r.height) * 2 - 1);
      }}
      onPointerLeave={() => {
        mx.set(0);
        my.set(0);
      }}
    >
      {/* entrance → parallax → stage */}
      {mounted && (
        <motion.div
          className="absolute inset-0"
          initial={reduced ? false : { opacity: 0, scale: 0.94, y: 26 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 0.2 }}
        >
          <div
            className="absolute inset-0 origin-center"
            style={{ transform: `scale(${stageScale})` }}
          >
            <motion.div className="absolute inset-0" style={{ x: px, y: py }}>
              {/* breathing ambient glow — the orbit floats directly on the hero */}
              <motion.div
                className="absolute rounded-full bg-[radial-gradient(closest-side,rgba(14,134,107,0.17),transparent)] blur-3xl"
                style={{
                  left: cx - (rx + 120),
                  top: cy - (ry + 120),
                  width: (rx + 120) * 2,
                  height: (ry + 120) * 2,
                }}
                animate={reduced ? undefined : { opacity: [0.65, 1, 0.65], scale: [1, 1.06, 1] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                aria-hidden="true"
              />

              {/* orbit bands — drawn in on entrance */}
              <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
                <defs>
                  <linearGradient id="nk-ring-band" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="rgba(67,217,163,0.2)" />
                    <stop offset="52%" stopColor="rgba(255,255,255,0.06)" />
                    <stop offset="100%" stopColor="rgba(14,134,107,0.14)" />
                  </linearGradient>
                </defs>
                <motion.ellipse
                  cx={cx}
                  cy={cy}
                  rx={rx}
                  ry={ry}
                  fill="none"
                  stroke="url(#nk-ring-band)"
                  strokeWidth={bandW}
                  initial={reduced ? false : { pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.9, ease: EASE, delay: 0.3 }}
                />
                <motion.ellipse
                  cx={cx}
                  cy={cy}
                  rx={rx + bandW / 2}
                  ry={ry + bandW / 2}
                  fill="none"
                  stroke="rgba(255,255,255,0.09)"
                  strokeWidth={1}
                  initial={reduced ? false : { pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.7, ease: EASE, delay: 0.4 }}
                />
                <motion.ellipse
                  cx={cx}
                  cy={cy}
                  rx={Math.max(rx - bandW / 2, 1)}
                  ry={Math.max(ry - bandW / 2, 1)}
                  fill="none"
                  stroke="rgba(255,255,255,0.05)"
                  strokeWidth={1}
                  initial={reduced ? false : { pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.7, ease: EASE, delay: 0.5 }}
                />
                {/* outer counter-orbit path */}
                <ellipse
                  cx={cx}
                  cy={cy}
                  rx={rx + 72}
                  ry={ry + 56}
                  fill="none"
                  stroke="rgba(255,255,255,0.06)"
                  strokeWidth={1}
                  strokeDasharray="2 9"
                />
                {/* energy lines — appear only for chips on the near side */}
                {SERVICES.map((service, i) => (
                  <Connector
                    key={`line-${service.id}`}
                    base={(i / SERVICES.length) * Math.PI * 2}
                    rotation={rotation}
                    rx={rx}
                    ry={ry}
                    cx={cx}
                    cy={cy}
                  />
                ))}
              </svg>

              {/* counter-orbiting dust on the outer path */}
              {[0.4, 2.35, 4.5].map((offset) => (
                <CounterDot
                  key={`counter-${offset}`}
                  offset={offset}
                  rotation={rotation}
                  rx={rx + 72}
                  ry={ry + 56}
                  cx={cx}
                  cy={cy}
                />
              ))}

              {/* micro-dots riding the main ring between the chips */}
              {Array.from({ length: 10 }).map((_, i) => (
                <OrbitDot
                  key={`dot-${i}`}
                  base={(i / 10) * Math.PI * 2 + (i % 3) * 0.21 + 0.31}
                  rotation={rotation}
                  rx={rx}
                  ry={ry}
                  cx={cx}
                  cy={cy}
                />
              ))}

              {/* light pulses racing along the ring */}
              {[0, 2.09, 4.19].map((offset) => (
                <RingPulse
                  key={`pulse-${offset}`}
                  offset={offset}
                  rotation={rotation}
                  rx={rx}
                  ry={ry}
                  cx={cx}
                  cy={cy}
                />
              ))}

              {/* service chips on the orbit */}
              {SERVICES.map((service, i) => (
                <ServiceChip
                  key={service.id}
                  service={service}
                  base={(i / SERVICES.length) * Math.PI * 2}
                  rotation={rotation}
                  rx={rx}
                  ry={ry}
                  cx={cx}
                  cy={cy}
                  index={i}
                />
              ))}

              {/* central core */}
              <div className="absolute" style={{ left: cx, top: cy, zIndex: 45 }} aria-hidden="true">
                <motion.div
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  initial={reduced ? false : { opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.45, type: "spring", stiffness: 110, damping: 14 }}
                >
                  {/* slowly rotating dashed halo */}
                  <motion.span
                    className="absolute -inset-6 rounded-full border border-dashed border-jade-bright/20"
                    animate={reduced ? undefined : { rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  />
                  <span className="absolute inset-0 -m-3 animate-ping rounded-full border border-jade-bright/25 [animation-duration:3s]" />
                  <div className="relative flex h-24 w-24 flex-col items-center justify-center rounded-full border border-jade-bright/15 bg-[#121714]/90 text-center shadow-[0_20px_50px_rgba(0,0,0,0.55)] backdrop-blur-md sm:h-28 sm:w-28">
                    <span className="font-display text-3xl leading-none text-white sm:text-4xl">6</span>
                    <span className="mt-1.5 font-mono text-[7px] uppercase leading-relaxed tracking-[0.2em] text-jade-bright sm:text-[8px]">
                      services
                      <br />
                      one team
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}

      {/* floating facts — real, verifiable numbers, drifting in open space */}
      <FloatingFact
        value="24/7"
        label="Monitoring & support"
        className="right-[3%] top-[9%]"
        delay={0}
        reduced={reduced}
      />
      <FloatingFact
        value="3"
        label="Global locations"
        className="bottom-[3%] left-[2%]"
        delay={0.6}
        reduced={reduced}
      />
    </div>
  );
}
