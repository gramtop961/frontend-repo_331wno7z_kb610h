import { motion } from 'framer-motion';
import { Instagram, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  const socials = [
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'YouTube', icon: Youtube, href: '#' },
  ];

  return (
    <footer className="relative border-t border-white/10 bg-black text-neutral-300">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_200px_at_50%_0%,rgba(59,130,246,0.15),transparent_70%)]" />
      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-16 text-center">
        <motion.blockquote
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl text-xl text-white md:text-2xl"
        >
          “The name is DROMOS. Driven by purpose, powered by passion.”
        </motion.blockquote>
        <div className="flex items-center gap-4">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              aria-label={s.name}
              className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-transform hover:scale-105"
            >
              <s.icon className="h-5 w-5 opacity-80 transition-opacity group-hover:opacity-100" />
            </a>
          ))}
        </div>
        <div className="text-xs text-neutral-400">© {new Date().getFullYear()} Team Dromos. All rights reserved.</div>
      </div>
    </footer>
  );
}
