import { useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Dice from "@/components/dice/Dice";
import ParticleNetwork from "@/components/dice/ParticleNetwork";

export default function Hero() {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const [rolling, setRolling] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const onMove = (e) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;
      setPointer({ x: nx, y: ny });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      id="top"
      ref={heroRef}
      data-testid="hero-section"
      className="relative min-h-screen w-full overflow-hidden bg-grid"
    >
      {/* 3D background */}
      <div className="absolute inset-0">
        <Canvas
          camera={{ position: [0, 0, 8], fov: 55 }}
          dpr={[1, isMobile ? 1.3 : 1.8]}
          gl={{ antialias: true, alpha: true }}
        >
          <ambientLight intensity={0.4} />
          <ParticleNetwork pointer={pointer} isMobile={isMobile} />
        </Canvas>
      </div>

      {/* Radial vignette */}
      <div className="absolute inset-0 pointer-events-none"
           style={{ background: "radial-gradient(ellipse 60% 50% at 50% 45%, transparent, rgba(10,10,18,0.7) 80%)" }} />

      <div className="relative max-w-7xl mx-auto px-6 pt-40 pb-24 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
        {/* Text side */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass mb-6 text-xs font-mono tracking-widest"
          >
            <Sparkles size={12} className="text-cyan-300" />
            <span className="text-white/80">JIIT · NOIDA · NEW · HUB</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-6xl sm:text-7xl lg:text-[8.5rem] leading-[0.9] font-bold tracking-tighter"
          >
            <span className="gradient-text">DICE</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-5 font-display text-xl sm:text-2xl lg:text-3xl text-white/85 max-w-2xl leading-tight"
          >
            Data, Insights, <span className="text-cyan-300">Computing</span> & <span className="text-violet-300">Engineering</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-6 text-base sm:text-lg text-white/60 max-w-xl leading-relaxed"
          >
            JIIT's first math-first hub — where analytical thinking meets data-driven technology through workshops, projects, and competitions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <a href="#join" data-testid="hero-cta-join" className="btn-primary">
              Join DICE <ArrowRight size={16} />
            </a>
            <a href="#events" data-testid="hero-cta-events" className="btn-ghost">
              Explore Events
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="mt-14 flex items-center gap-6 font-mono text-[11px] tracking-widest text-white/40"
          >
            <div>01 · MATH-FIRST</div>
            <div className="w-8 h-px bg-white/20" />
            <div>02 · DATA-DRIVEN</div>
            <div className="w-8 h-px bg-white/20" />
            <div className="hidden sm:block">03 · COMMUNITY</div>
          </motion.div>
        </div>

        {/* Dice side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative h-[380px] sm:h-[460px] lg:h-[560px] cursor-grab active:cursor-grabbing"
          data-testid="hero-dice"
          onClick={() => { if (!rolling) { setRolling(true); } }}
        >
          {/* Aura glow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-64 h-64 lg:w-96 lg:h-96 rounded-full pulse-soft"
                 style={{ background: "radial-gradient(circle, rgba(139,92,246,0.35), transparent 65%)" }} />
          </div>

          <Canvas
            camera={{ position: [0, 0, 5.5], fov: 45 }}
            dpr={[1, isMobile ? 1.3 : 2]}
            gl={{ antialias: true, alpha: true }}
            shadows={!isMobile}
          >
            <ambientLight intensity={0.35} />
            <pointLight position={[5, 5, 5]} intensity={2.2} color="#8b5cf6" />
            <pointLight position={[-4, -3, 4]} intensity={1.5} color="#22d3ee" />
            <pointLight position={[0, 4, -3]} intensity={1} color="#3b82f6" />
            <Dice
              size={1.7}
              pointer={pointer}
              rolling={rolling}
              onRollEnd={() => setRolling(false)}
            />
            {/* Ground shadow / reflection */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
              <circleGeometry args={[2.6, 48]} />
              <meshBasicMaterial color="#22d3ee" transparent opacity={0.06} />
            </mesh>
          </Canvas>

          <div className="absolute bottom-2 left-0 right-0 text-center font-mono text-[10px] tracking-widest text-white/40">
            CLICK · TO · ROLL
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 font-mono text-[10px] tracking-widest text-white/40">
        <div>SCROLL</div>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-white/60 to-transparent"
        />
      </div>
    </section>
  );
}
