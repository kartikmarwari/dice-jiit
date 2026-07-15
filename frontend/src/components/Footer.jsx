import { Canvas } from "@react-three/fiber";
import MiniDice from "@/components/dice/MiniDice";
import { Instagram, Linkedin, Github, Mail } from "lucide-react";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer data-testid="site-footer" className="relative border-t border-white/5 pt-16 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 items-start">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-16 h-16">
              <Canvas camera={{ position: [0, 0, 4], fov: 40 }} dpr={[1, 1.5]}>
                <ambientLight intensity={0.7} />
                <pointLight position={[4, 4, 4]} intensity={1.6} color="#8b5cf6" />
                <pointLight position={[-4, -2, 3]} intensity={1} color="#22d3ee" />
                <MiniDice />
              </Canvas>
            </div>
            <div>
              <div className="font-display font-semibold text-xl">{site.club.name}</div>
              <div className="font-mono text-[11px] tracking-widest text-white/50">JIIT · NOIDA</div>
            </div>
          </div>
          <p className="mt-5 text-sm text-white/60 max-w-sm leading-relaxed">
            {site.club.fullName} — JIIT's hub for data science, analytics, and computing, powered by a strong mathematical foundation.
          </p>
        </div>

        <div>
          <div className="font-mono text-[11px] tracking-widest text-white/50 mb-4">EXPLORE</div>
          <ul className="space-y-2 text-sm">
            {[
              ["About", "#about"],
              ["Team", "#team"],
              ["Events", "#events"],
              ["Gallery", "#gallery"],
              ["Join", "#join"],
            ].map(([label, href]) => (
              <li key={href}>
                <a href={href} className="text-white/70 hover:text-white transition-colors">{label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="font-mono text-[11px] tracking-widest text-white/50 mb-4">CONNECT</div>
          <div className="flex gap-3">
            {[
              { Icon: Instagram, href: site.socials.instagram, label: "instagram" },
              { Icon: Linkedin, href: site.socials.linkedin, label: "linkedin" },
              { Icon: Github, href: site.socials.github, label: "github" },
              { Icon: Mail, href: `mailto:${site.contact.email}`, label: "email" },
            ].map(({ Icon, href, label }) => (
              <a key={label} href={href} data-testid={`footer-social-${label}`}
                 className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/70 hover:text-white transition-colors">
                <Icon size={16} />
              </a>
            ))}
          </div>
          <div className="mt-6 text-xs text-white/40">
            {site.club.college}
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/40">
        <div>© {new Date().getFullYear()} {site.club.name} — {site.club.fullName}.</div>
        <div className="font-mono">v1.0 · built with curiosity</div>
      </div>
    </footer>
  );
}
