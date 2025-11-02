import { useRef } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  const containerRef = useRef(null);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white"
      aria-label="Hero"
    >
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(0,255,255,0.12),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(255,0,255,0.12),transparent_45%),radial-gradient(circle_at_50%_80%,rgba(0,150,255,0.12),transparent_40%)]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 pb-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight tracking-tight"
        >
          We’re more than just a team — we’re a movement.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-6 max-w-2xl text-neutral-200"
        >
          Team Dromos engineers next‑generation transportation with precision, speed, and purpose.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="mt-10"
        >
          <motion.a
            href="#join"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-cyan-400/40 bg-white/5 px-7 py-3 text-cyan-100 backdrop-blur-sm"
          >
            <span className="absolute inset-0 -z-0 bg-gradient-to-r from-cyan-600/40 via-fuchsia-600/40 to-blue-700/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="relative z-10">Apply Now</span>
            <span className="relative z-10 inline-flex h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)]" />
          </motion.a>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-4 text-left md:grid-cols-3">
          {[
            ['2nd Place', 'Global Hyperloop Competition'],
            ['1st', 'Levitation'],
            ['Excellence', 'Certificate of Excellence'],
          ].map(([title, subtitle]) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6 }}
              className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
            >
              <p className="text-lg font-medium text-white">{title}</p>
              <p className="text-sm text-neutral-300">{subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
