import { motion } from 'framer-motion';

function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow && (
        <p className="mb-2 text-xs uppercase tracking-[0.3em] text-cyan-400">{eyebrow}</p>
      )}
      <h2 className="text-3xl md:text-5xl text-white font-semibold">{title}</h2>
      {subtitle && <p className="mt-3 text-neutral-300">{subtitle}</p>}
    </div>
  );
}

const members = [
  {
    name: 'Aarav Sharma',
    role: 'Propulsion Lead',
    img: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=1200&q=60',
  },
  {
    name: 'Zara Kapoor',
    role: 'Embedded Systems',
    img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=60',
  },
  {
    name: 'Ishaan Mehta',
    role: 'Mechanical Designer',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=60',
  },
  {
    name: 'Maya Rao',
    role: 'Thermal & Safety',
    img: 'https://images.unsplash.com/photo-1544005316-04ce1f1a1f6b?auto=format&fit=crop&w=1200&q=60',
  },
  {
    name: 'Kabir Singh',
    role: 'Electrical Systems',
    img: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=1200&q=60',
  },
  {
    name: 'Anaya Pillai',
    role: 'Systems Integration',
    img: 'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?auto=format&fit=crop&w=1200&q=60',
  },
  {
    name: 'Vivaan Das',
    role: 'Levitation R&D',
    img: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1200&q=60',
  },
  {
    name: 'Eva Thomas',
    role: 'Marketing & Partnerships',
    img: 'https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?auto=format&fit=crop&w=1200&q=60',
  },
];

export default function TeamSection() {
  return (
    <section className="relative bg-[#050508] py-24" id="team">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_220px_at_50%_0%,rgba(34,211,238,0.1),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Team"
          title="The people behind the velocity"
          subtitle="A vertically flowing gallery—black & white to color on hover."
        />

        <div className="mt-14 space-y-8">
          {members.map((m, idx) => (
            <motion.article
              key={m.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="group grid grid-cols-1 overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-xl backdrop-blur-sm md:grid-cols-3"
            >
              <div className={`relative md:col-span-2 ${idx % 2 === 1 ? 'order-last md:order-none' : ''}`}>
                <img
                  src={m.img}
                  alt={`${m.name} – ${m.role}`}
                  className="h-72 w-full object-cover transition duration-700 ease-out filter grayscale group-hover:grayscale-0 md:h-full"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-transparent" />
              </div>
              <div className="flex flex-col justify-center gap-3 p-6">
                <h3 className="text-2xl font-semibold text-white">{m.name}</h3>
                <p className="text-sm text-neutral-300">{m.role}</p>
                <p className="text-sm text-neutral-300">
                  Crafting next‑gen transportation with precision, motion, and purpose.
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
