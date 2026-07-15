import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "About", href: "#about" },
  { label: "Team", href: "#team" },
  { label: "Events", href: "#events" },
  { label: "Gallery", href: "#gallery" },
  { label: "Join", href: "#join" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      data-testid="main-nav"
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl bg-[#0a0a12]/70 border-b border-white/5" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-3" data-testid="nav-logo">
           <img 
    src="images/faculty/dice-logo-white.png" 
    alt="DICE Logo"
    className="h-8 md:h-10 object-contain"
  />
        </a>
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`nav-link-${l.label.toLowerCase()}`}
              className="px-4 py-2 text-sm text-white/70 hover:text-white transition-colors relative group"
            >
              {l.label}
              <span className="absolute left-4 right-4 -bottom-0.5 h-px scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"
                style={{ background: "linear-gradient(90deg, #22d3ee, #8b5cf6)" }} />
            </a>
          ))}
          <a href="#join" data-testid="nav-cta" className="btn-primary text-sm ml-3" style={{ padding: "10px 20px" }}>
            Join DICE
          </a>
        </div>
        <button
          data-testid="nav-mobile-toggle"
          className="md:hidden text-white/80 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-4 flex flex-col justify-between">
            <span className={`h-0.5 bg-white transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`h-0.5 bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 bg-white transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </div>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-[#0a0a12]/95 backdrop-blur-xl border-t border-white/5 px-6 py-6 flex flex-col gap-3">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
               data-testid={`nav-mobile-link-${l.label.toLowerCase()}`}
               className="py-2 text-white/80 hover:text-white">
              {l.label}
            </a>
          ))}
          <a href="#join" onClick={() => setOpen(false)} className="btn-primary text-sm mt-2 w-fit">Join DICE</a>
        </div>
      )}
    </motion.nav>
  );
}
