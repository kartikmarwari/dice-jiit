import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" data-testid="about-section" className="section relative">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.4fr_0.6fr] gap-14 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          <div className="font-mono text-[11px] tracking-[0.4em] text-cyan-300/80 mb-4">
            01 / ABOUT
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[0.95]">
            The <span className="gradient-text">first</span> math-first hub at JIIT.
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="space-y-6 text-white/70 text-base lg:text-lg leading-relaxed"
        >
          <p>
            DICE is a newly established hub at JIIT focused on
            <span className="text-white"> data science, analytics, and computational techniques </span>
            — with a strong mathematics-oriented foundation.
          </p>
          <p>
            We are the first hub at the college with a dedicated focus on
            <span className="text-white"> mathematical thinking and analytical skills </span>
            applied to data-driven technology.
          </p>
          <p>
            We bridge theory and practice through mini-projects, workshops, seminars, and competitions — building a community where curiosity compounds into capability.
          </p>

          <div className="grid grid-cols-3 gap-4 pt-6">
            {[
              ["04+", "Domains"],
              ["100%", "Math-first"],
              ["24/7", "Curiosity"],
            ].map(([n, l]) => (
              <div key={l} className="glass p-4">
                <div className="font-display text-2xl font-semibold gradient-text">{n}</div>
                <div className="font-mono text-[10px] tracking-widest text-white/50 mt-1">{l}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
