import { motion } from "framer-motion";
import PlaceholderImage from "@/components/PlaceholderImage";
import { gallery } from "@/data/gallery";

export default function Gallery() {
  return (
    <section id="gallery" data-testid="gallery-section" className="section relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex items-end justify-between flex-wrap gap-4"
        >
          <div>
            <div className="font-mono text-[11px] tracking-[0.4em] text-cyan-300/80 mb-4">
              06 / GALLERY
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[0.95]">
              Moments from <span className="gradient-text">the hub.</span>
            </h2>
          </div>
          <div className="font-mono text-xs text-white/40 max-w-xs">
            <span className="text-white/70"> </span>  
          </div>
        </motion.div>

        <div className="masonry">
          {gallery.map((g, i) => (
            <motion.div
              key={g.placeholderLabel}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
              data-testid={`gallery-item-${i}`}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl border border-white/5 hover:border-violet-400/40 transition-colors">
                <PlaceholderImage
                  src={g.photo}
                  label={g.placeholderLabel}
                  aspect={g.aspect}
                  showIcon={i % 2 === 0}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
