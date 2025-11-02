import { motion, useScroll, useSpring } from 'framer-motion';

export default function ProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.2 });

  return (
    <motion.div
      style={{ scaleX, transformOrigin: '0% 50%' }}
      className="fixed left-0 top-0 z-40 h-1 w-full bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-blue-600"
      aria-hidden
    />
  );
}
