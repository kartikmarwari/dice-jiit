import { motion } from "framer-motion";
import { Instagram, Linkedin, Mail, ArrowRight } from "lucide-react";
import { site } from "@/data/site";

export default function Contact() {
  const { email } = site.contact;
  const subject = encodeURIComponent("I'd like to join DICE");
  const body = encodeURIComponent(
    "Hi DICE team,\n\nI'm interested in joining the club. Here are a few details about me:\n\n- Name:\n- Batch / Year:\n- Domain interest (Data Science / Analytics / Engineering):\n- Anything you've built / studied:\n\nLooking forward to hearing from you!\n"
  );
  const mailto = `mailto:${email}?subject=${subject}&body=${body}`;

  return (
    <section id="join" data-testid="join-section" className="section relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="glass p-8 sm:p-12 lg:p-16 relative overflow-hidden"
        >
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full pointer-events-none"
               style={{ background: "radial-gradient(circle, rgba(139,92,246,0.35), transparent 65%)" }} />
          <div className="absolute -bottom-32 -left-24 w-96 h-96 rounded-full pointer-events-none"
               style={{ background: "radial-gradient(circle, rgba(34,211,238,0.22), transparent 65%)" }} />

          <div className="relative">
            <div className="font-mono text-[11px] tracking-[0.4em] text-cyan-300/80 mb-4">
              07 / JOIN
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[0.95] max-w-3xl">
              Want to be part of <span className="gradient-text">DICE?</span>
            </h2>
            <p className="mt-5 text-white/70 max-w-2xl text-base sm:text-lg leading-relaxed">
              We're always looking for curious minds — whether you love math, code, dashboards, or asking better questions. Drop us a line and we'll take it from there.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href={mailto} data-testid="join-cta-email" className="btn-primary">
                Email us to join <ArrowRight size={16} />
              </a>
              <a href={site.socials.instagram} data-testid="join-cta-instagram" className="btn-ghost">
                <Instagram size={16} /> Instagram
              </a>
              <a href={site.socials.linkedin} data-testid="join-cta-linkedin" className="btn-ghost">
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>

            <div className="mt-10 pt-8 border-t border-white/5 grid sm:grid-cols-3 gap-6 text-sm">
              <div>
                <div className="font-mono text-[10px] tracking-widest text-white/40 mb-2">EMAIL</div>
                <a href={`mailto:${email}`} className="text-white/85 hover:text-cyan-300 flex items-center gap-2">
                  <Mail size={14} /> {email}
                </a>
              </div>
              <div>
                <div className="font-mono text-[10px] tracking-widest text-white/40 mb-2">LOCATION</div>
                <div className="text-white/85">{site.club.location}</div>
              </div>
              <div>
                <div className="font-mono text-[10px] tracking-widest text-white/40 mb-2">RESPONSE</div>
                <div className="text-white/85">{site.contact.responseTime}</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
