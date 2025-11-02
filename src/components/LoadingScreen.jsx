import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ isLoading, onFinish }) {
  useEffect(() => {
    if (!isLoading) return;
    const t = setTimeout(() => onFinish?.(), 1800);
    return () => clearTimeout(t);
  }, [isLoading, onFinish]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white"
          aria-live="polite"
        >
          <div className="relative">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, type: 'spring', stiffness: 120 }}
              className="text-center"
            >
              <div className="mb-6">
                <div className="mx-auto h-20 w-20 rounded-full bg-gradient-to-br from-cyan-500 via-fuchsia-500 to-blue-600 blur-sm" />
                <div className="absolute inset-0 mx-auto h-20 w-20 rounded-full bg-gradient-to-br from-cyan-500 via-fuchsia-500 to-blue-600 opacity-70" />
              </div>
              <motion.h1
                className="text-3xl md:text-4xl font-semibold tracking-[0.25em]"
                initial={{ letterSpacing: '0.75em' }}
                animate={{ letterSpacing: '0.25em' }}
                transition={{ duration: 1.2, ease: 'easeInOut' }}
              >
                DROMOS
              </motion.h1>
              <motion.p
                className="mt-3 text-sm text-neutral-300"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                Driven by purpose, powered by passion
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
