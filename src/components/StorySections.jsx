import { motion } from 'framer-motion';

function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="mx-auto max-w-5xl text-center">
      {eyebrow && (
        <p className="mb-2 text-xs uppercase tracking-[0.3em] text-cyan-400">{eyebrow}</p>
      )}
      <h2 className="text-3xl md:text-5xl text-white font-semibold">{title}</h2>
      {subtitle && <p className="mt-3 text-neutral-300">{subtitle}</p>}
    </div>
  );
}

export default function StorySections() {
  const subsystems = [
    { name: 'Thermal & Safety', color: 'from-fuchsia-500 to-cyan-500' },
    { name: 'Electrical', color: 'from-cyan-500 to-blue-500' },
    { name: 'Propulsion', color: 'from-emerald-500 to-cyan-500' },
    { name: 'Mechanical', color: 'from-blue-500 to-indigo-500' },
    { name: 'Embedded Systems', color: 'from-violet-500 to-fuchsia-500' },
    { name: 'Management & Marketing', color: 'from-amber-500 to-pink-500' },
  ];

  return (
    <div className="bg-[#050508] text-neutral-200">
      {/* Who We Are */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <SectionHeader
              eyebrow="Who we are"
              title="Engineering the future of high‑speed transport"
              subtitle="A collective of students, mentors, and makers pursuing elegant solutions to complex problems."
            />
            <div className="mt-8 space-y-4 text-neutral-300">
              <p>
                From concept to test track, we design, build, and validate every subsystem with a
                relentless attention to detail. Our culture blends rigor with creativity.
              </p>
              <p>
                We believe motion tells a story. Every curve, every interaction, every decision is
                intentional—optimizing for performance and experience.
              </p>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8 }}
            className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#0b0b12] to-[#0d0d18]"
            aria-label="Pod visual"
          >
            <div className="absolute inset-0 opacity-60 [background:radial-gradient(1200px_400px_at_-10%_-10%,rgba(34,211,238,0.3),transparent_60%),radial-gradient(600px_300px_at_110%_120%,rgba(217,70,239,0.28),transparent_60%)]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ rotate: [0, 1.5, -1.5, 0], y: [0, -6, 0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
                className="h-40 w-40 rounded-full bg-gradient-to-br from-cyan-500 via-fuchsia-500 to-blue-600 blur-2xl opacity-50"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Achievements – horizontal storytelling */}
      <section className="relative py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_160px_at_20%_20%,rgba(34,211,238,0.1),transparent_60%),radial-gradient(600px_160px_at_80%_40%,rgba(217,70,239,0.08),transparent_60%)]" />
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader title="Milestones" subtitle="Pushing boundaries, one iteration at a time." />
          <div className="mt-10 overflow-x-auto pb-4">
            <div className="flex min-w-[720px] gap-4 md:min-w-full">
              {[
                {
                  k: 'global',
                  title: 'Global Hyperloop Competition',
                  tag: '2nd Place',
                  gradient: 'from-cyan-500 to-blue-600',
                },
                { k: 'lev', title: 'Levitation', tag: '1st', gradient: 'from-emerald-500 to-cyan-500' },
                {
                  k: 'ex',
                  title: 'Certificate of Excellence',
                  tag: 'Awarded',
                  gradient: 'from-fuchsia-500 to-pink-600',
                },
              ].map((a, idx) => (
                <motion.article
                  key={a.k}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6, delay: idx * 0.05 }}
                  className="relative w-[320px] flex-shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
                >
                  <span className={`inline-block rounded-full bg-gradient-to-r ${a.gradient} px-3 py-1 text-xs font-medium text-white`}>{a.tag}</span>
                  <h3 className="mt-3 text-xl font-semibold text-white">{a.title}</h3>
                  <p className="mt-2 text-sm text-neutral-300">
                    Distinct design and rigorous testing led to podium finishes among elite teams.
                  </p>
                  <div className={`absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-gradient-to-br ${a.gradient} opacity-30 blur-2xl`} />
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Subsystems */}
      <section className="mx-auto max-w-7xl px-6 py-24" id="subsystems">
        <SectionHeader
          eyebrow="Subsystems"
          title="One vision, many disciplines"
          subtitle="Six core modules form the backbone of our pod—each with its own motion identity."
        />
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {subsystems.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <div className={`pointer-events-none absolute -inset-px opacity-40 blur-md bg-gradient-to-r ${s.color}`} />
              <div className="relative z-10">
                <h3 className="text-lg font-semibold text-white">{s.name}</h3>
                <p className="mt-2 text-sm text-neutral-300">
                  Modular architecture, safety first, performance always.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Join */}
      <section className="relative mx-auto max-w-7xl px-6 py-24" id="join">
        <div className="pointer-events-none absolute -inset-x-10 -bottom-10 -top-10 bg-[radial-gradient(900px_220px_at_50%_100%,rgba(34,211,238,0.15),transparent_60%)]" />
        <div className="relative z-10 text-center">
          <SectionHeader
            eyebrow="Join the purpose"
            title={
              <span>
                Real‑world engineering • Global exposure • Hands‑on innovation
              </span>
            }
            subtitle="If you care about velocity, elegance, and impact—we want to hear from you."
          />
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="mt-8 inline-flex items-center justify-center rounded-full border border-fuchsia-400/40 bg-white/5 px-8 py-3 text-fuchsia-100 shadow-[0_0_30px_rgba(217,70,239,0.25)] backdrop-blur-sm"
          >
            Explore Open Roles
          </motion.a>
        </div>
      </section>
    </div>
  );
}
