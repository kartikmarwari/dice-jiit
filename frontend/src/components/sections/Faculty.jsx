import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import TiltCard from "@/components/TiltCard";
import PlaceholderImage from "@/components/PlaceholderImage";

const faculty = [
  { name: "Dr. Dinesh C.S. Bisht", role: "Faculty Coordinator", contact: "+919953130125", img: "faculty-1.jpg" },
  { name: "Mishita Joshi", role: "Faculty Coordinator", contact: "+917625923537", img: "faculty-2.jpg" },
  { name: "Priya Singh", role: "Faculty Coordinator", contact: "+918433102577", img: "faculty-3.jpg" },
];

export default function Faculty() {
  return (
    <section id="faculty" data-testid="faculty-section" className="section relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="font-mono text-[11px] tracking-[0.4em] text-cyan-300/80 mb-4">
            04 / FACULTY
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[0.95]">
            <span className="gradient-text">Guided</span> by our coordinators.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {faculty.map((f, i) => (
            <motion.div
              key={f.img}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              data-testid={`faculty-card-${i}`}
            >
              <TiltCard className="glass p-5 flex items-center gap-4" intensity={5}>
                <div className="w-20 h-20 rounded-full overflow-hidden ring-1 ring-white/10 flex-shrink-0">
                  <PlaceholderImage label={f.img} aspect="1/1" round showIcon={false} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-display text-base font-semibold truncate">{f.name}</div>
                  <div className="font-mono text-[10px] tracking-widest text-white/50 mt-1 uppercase">
                    {f.role}
                  </div>
                  <a href={f.contact} data-testid={`faculty-${i}-contact`}
                     className="mt-3 inline-flex items-center gap-1.5 text-xs text-cyan-300 hover:text-cyan-200">
                    <Mail size={12} /> Contact
                  </a>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
