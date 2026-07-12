# DICE Club Website — PRD

## Problem Statement
Build a visually stunning 3D interactive website for JIIT Noida's tech club **DICE** (Data, Insights, Computing & Engineering). Premium, cutting-edge feel with data-science aesthetic — particle networks, glassmorphism, and a centerpiece 3D interactive dice built with React Three Fiber.

## Stack
- React 19 + React Three Fiber (three, @react-three/fiber, @react-three/drei)
- Framer Motion for scroll/hover animations
- Tailwind CSS + Space Grotesk / JetBrains Mono / Inter
- Frontend-only (no backend for form — uses mailto)

## User Choices (Dec 2025)
- Contact: **mailto link** (no backend storage)
- Team: **placeholder names/roles** to swap later
- Social links: **# placeholders**
- Fonts: **Space Grotesk + JetBrains Mono**

## What's Implemented (2025-12-12)
- Fixed nav with scroll-blur, mobile menu, gradient CTA
- Hero: animated gradient headline, particle network 3D bg, centerpiece 3D dice with glass material, glowing wireframe, pips, aura pulse, click-to-roll animation, mouse parallax
- About: split heading + copy with stat glass cards
- Features: 4 glass tilt cards (Math-first, Real-world, Cross-domain, Community)
- Team: 8 placeholder core-team-N cards with tilt-on-hover, circular avatars, social icons
- Faculty: 3 coordinator cards (Dr. Dinesh C.S. Bisht, Mishita Joshi, Priya Singh)
- Events: horizontal scroll rail with 6 events, prev/next controls
- Gallery: CSS-column masonry with 9 placeholders, variable aspect ratios
- Join: glass CTA panel with mailto link + Instagram/LinkedIn/GitHub
- Footer: mini rotating 3D dice, sitemap, socials
- Loader: full-screen dice-spin on page load
- All placeholder images use `PlaceholderImage` component with named labels (`core-team-1.jpg`, `event-1.jpg`, `gallery-1.jpg`, `faculty-1.jpg`) for easy swap
- Responsive (mobile particle count reduced, layouts stack)
- data-testid on all interactive elements

## File Map (for image swapping)
- Core team photos: `/app/frontend/src/components/sections/Team.jsx` — replace `PlaceholderImage` with `<img src="..." />`
- Faculty photos: `/app/frontend/src/components/sections/Faculty.jsx`
- Event images: `/app/frontend/src/components/sections/Events.jsx`
- Gallery images: `/app/frontend/src/components/sections/Gallery.jsx`

## Backlog / Next Actions
- P1: Replace placeholder images with real photos (user will supply)
- P1: Update Team member real names + roles + social URLs
- P2: Add press/media section, sponsors, achievements timeline
- P2: Blog/Projects showcase with MDX
- P2: Newsletter signup (Resend/SendGrid integration)
- P3: Dedicated event detail pages with routing
