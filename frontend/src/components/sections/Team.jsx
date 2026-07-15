import { motion } from "framer-motion";
import { Instagram, Linkedin, Github } from "lucide-react";
import TiltCard from "@/components/TiltCard";
import PlaceholderImage from "@/components/PlaceholderImage";

const team = [
  { name: "Mishita Joshi", role: "President", img: "core-team-1.jpg" },
  { name: "Priya Singh", role: "Vice President", img: "core-team-2.jpg" },
  { name: "Kabir Arora", role: "Treasurer", img: "core-team-3.jpg" },
  { name: "Kartik Marwari", role: "Web Master", img: "core-team-4.jpg" },
  { name: "Ayush Chhabra", role: "Technical Head", img: "core-team-5.jpg" },
  { name: "Suhani Dubey", role: "Technical Head", img: "core-team-6.jpg" },
  { name: "Akshat Singh", role: "Tehnical Head", img: "core-team-7.jpg" },
  { name: "Sparsh Agrawal", role: "Mathematics&Innovation Head", img: "core-team-8.jpg" },
  { name: "Tushar Vats", role: "Organising Secretary", img:"C:\Users\karti\Downloads\IMG_7126.HEIC" },
  { name: "Mritsa Singh", role: "Management Head", img: "core-team-8.jpg" },
  { name: "Ayushi Tripathi", role: "Digital&Creative Head", img: "core-team-8.jpg" },
  { name: "Lakshita Chawla", role: "PR&Marketing Head", img: "core-team-8.jpg" },
  { name: "Akshi Bhusan", role: "Strategic Head", img: "core-team-8.jpg" },
];

export default function Team() {
  return (
    <section id="team" data-testid="team-section" className="section relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex items-end justify-between flex-wrap gap-4"
        >
          <div>
            <div className="font-mono text-[11px] tracking-[0.4em] text-cyan-300/80 mb-4">
              03 / CORE TEAM
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[0.95]">
              The people <span className="gradient-text">behind DICE.</span>
            </h2>
          </div>
          <div className="font-mono text-xs text-white/40 max-w-xs">
            Students driving DICE forward — leadership across domains, united by curiosity.
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {team.map((m, i) => (
            <motion.div
              key={m.img}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              data-testid={`team-card-${i}`}
            >
              <TiltCard className="glass p-5 h-full flex flex-col items-center text-center" intensity={6}>
                <div className="w-24 h-24 mb-4 rounded-full overflow-hidden ring-1 ring-white/10">
                  <PlaceholderImage label={m.img} aspect="1/1" round showIcon={false} />
                </div>
                <div className="font-display text-base font-semibold">{m.name}</div>
                <div className="font-mono text-[10px] tracking-widest text-white/50 mt-1 uppercase">
                  {m.role}
                </div>
                <div className="flex gap-2 mt-4">
                  {[Instagram, Linkedin, Github].map((Icon, k) => (
                    <a key={k} href="m." data-testid={`team-${i}-social-${k}`}
                       className="w-7 h-7 rounded-full flex items-center justify-center border border-white/10 text-white/60 hover:text-white hover:border-violet-400/50 transition-colors">
                      <Icon size={12} />
                    </a>
                  ))}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
