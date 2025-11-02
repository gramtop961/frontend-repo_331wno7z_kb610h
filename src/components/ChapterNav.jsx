import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CHAPTERS = [
  { id: 'hero', label: 'Intro' },
  { id: 'who', label: 'Who' },
  { id: 'subsystems', label: 'Systems' },
  { id: 'team', label: 'Team' },
  { id: 'join', label: 'Join' },
];

export default function ChapterNav() {
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const triggers = CHAPTERS.map((c) =>
      ScrollTrigger.create({
        trigger: `#${c.id}`,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => setActive(c.id),
        onEnterBack: () => setActive(c.id),
      })
    );
    return () => {
      triggers.forEach((t) => t.kill());
      ScrollTrigger.kill();
    };
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className="fixed right-4 top-1/2 z-30 -translate-y-1/2 space-y-3">
      {CHAPTERS.map((c) => (
        <button
          key={c.id}
          onClick={() => scrollTo(c.id)}
          className="group relative block h-3 w-3 rounded-full"
          aria-label={`Jump to ${c.label}`}
        >
          <span
            className={`absolute inset-0 rounded-full transition-all duration-300 ${
              active === c.id ? 'scale-150 bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-blue-600' : 'bg-white/40'
            }`}
          />
          <span className="pointer-events-none absolute -left-28 top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-full bg-white/10 px-2 py-1 text-xs text-white backdrop-blur-md group-hover:block">
            {c.label}
          </span>
        </button>
      ))}
    </nav>
  );
}
