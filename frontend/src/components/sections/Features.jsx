import { motion } from "framer-motion";
import { Sigma, Network, Users, FlaskConical } from "lucide-react";
import TiltCard from "@/components/TiltCard";

const features = [
  {
    Icon: Sigma,
    title: "Math-first Foundation",
    desc: "Every project starts with the math. We treat probability, linear algebra, and statistics as first-class citizens.",
    hue: "#22d3ee",
  },
  {
    Icon: FlaskConical,
    title: "Real-world Projects",
    desc: "Hands-on mini-projects, hackathons, and competitions built on real datasets and open problems.",
    hue: "#3b82f6",
  },
  {
    Icon: Network,
    title: "Cross-domain Collaboration",
    desc: "We connect CS, math, and engineering minds to build ideas that live at the intersections.",
    hue: "#8b5cf6",
  },
  {
    Icon: Users,
    title: "Community of Curious Minds",
    desc: "A tight-knit crew of students who ask better questions — and enjoy the search for answers.",
    hue: "#ec4899",
  },
];

export default function Features() {
  return (
    <section id="features" data-testid="features-section" className="section relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-14"
        >
          <div className="font-mono text-[11px] tracking-[0.4em] text-cyan-300/80 mb-4">
            02 / WHAT MAKES DICE
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[0.95]">
            Not another club. <span className="gradient-text">A method.</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              data-testid={`feature-card-${i}`}
            >
              <TiltCard className="glass p-6 h-full">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{
                    background: `linear-gradient(135deg, ${f.hue}22, ${f.hue}05)`,
                    border: `1px solid ${f.hue}40`,
                    boxShadow: `0 0 24px -8px ${f.hue}88`,
                  }}
                >
                  <f.Icon size={20} style={{ color: f.hue }} />
                </div>
                <div className="font-display text-lg font-semibold mb-2">{f.title}</div>
                <p className="text-sm text-white/60 leading-relaxed">{f.desc}</p>
                <div className="font-mono text-[10px] tracking-widest text-white/30 mt-6">
                  {String(i + 1).padStart(2, "0")}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
