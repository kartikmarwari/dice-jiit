import { useRef } from "react";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, ArrowLeft } from "lucide-react";
import PlaceholderImage from "@/components/PlaceholderImage";

const events = [
  { title: "DataDive Workshop", date: "Mar 12, 2025", desc: "Hands-on intro to exploratory analysis with Python & pandas.", img: "event-1.jpg", tag: "Workshop" },
  { title: "Math × ML Seminar", date: "Apr 04, 2025", desc: "How probability & linear algebra power modern ML systems.", img: "event-2.jpg", tag: "Seminar" },
  { title: "Kaggle Sprint", date: "Apr 22, 2025", desc: "48-hour team competition on a real-world tabular dataset.", img: "event-3.jpg", tag: "Competition" },
  { title: "Analytics Showcase", date: "May 10, 2025", desc: "Members present mini-projects — dashboards, models, and stories.", img: "event-4.jpg", tag: "Showcase" },
  { title: "Guest Talk — Industry", date: "May 28, 2025", desc: "A data scientist from industry on real production ML pipelines.", img: "event-5.jpg", tag: "Talk" },
  { title: "Fall Onboarding", date: "Aug 15, 2025", desc: "Meet the team, join a domain, ship your first project.", img: "event-6.jpg", tag: "Community" },
];

export default function Events() {
  const railRef = useRef(null);
  const scroll = (dir) => {
    if (!railRef.current) return;
    railRef.current.scrollBy({ left: dir * 380, behavior: "smooth" });
  };

  return (
    <section id="events" data-testid="events-section" className="section relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex items-end justify-between flex-wrap gap-4"
        >
          <div>
            <div className="font-mono text-[11px] tracking-[0.4em] text-cyan-300/80 mb-4">
              05 / EVENTS
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[0.95]">
              Where <span className="gradient-text">ideas</span> happen.
            </h2>
          </div>
          <div className="flex gap-2">
            <button data-testid="events-prev" onClick={() => scroll(-1)}
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/70 hover:text-white transition-colors">
              <ArrowLeft size={16} />
            </button>
            <button data-testid="events-next" onClick={() => scroll(1)}
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/70 hover:text-white transition-colors">
              <ArrowRight size={16} />
            </button>
          </div>
        </motion.div>

        <div ref={railRef} className="rail flex gap-5 overflow-x-auto pb-4 -mx-6 px-6">
          {events.map((e, i) => (
            <motion.article
              key={e.img}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              data-testid={`event-card-${i}`}
              className="min-w-[300px] sm:min-w-[360px] max-w-[360px] glass overflow-hidden group"
            >
              <div className="relative">
                <PlaceholderImage label={e.img} aspect="16/10" />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase bg-black/50 backdrop-blur-md border border-white/15">
                  {e.tag}
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-[11px] font-mono text-white/50 mb-2">
                  <Calendar size={12} /> {e.date}
                </div>
                <div className="font-display text-lg font-semibold group-hover:text-cyan-200 transition-colors">
                  {e.title}
                </div>
                <p className="text-sm text-white/60 leading-relaxed mt-2">{e.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
