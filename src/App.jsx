import { useEffect, useRef, useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Hero from './components/Hero';
import StorySections from './components/StorySections';
import TeamSection from './components/TeamSection';
import Footer from './components/Footer';
import ProgressBar from './components/ProgressBar';
import ChapterNav from './components/ChapterNav';
import Lenis from 'lenis';

export default function App() {
  // Start without blocking UI so you can immediately see content if something fails to load
  const [isLoading, setIsLoading] = useState(false);
  const rafRef = useRef(0);

  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      wheelMultiplier: 1,
      lerp: 0.1,
    });

    const raf = (time) => {
      lenis.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    };
    rafRef.current = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafRef.current);
      // @ts-ignore
      lenis.destroy?.();
    };
  }, []);

  return (
    <div className="min-h-screen bg-black font-sans text-white">
      <ProgressBar />
      <ChapterNav />
      <LoadingScreen isLoading={isLoading} onFinish={() => setIsLoading(false)} />

      <main aria-busy={isLoading} className={isLoading ? 'pointer-events-none select-none opacity-90' : ''}>
        <Hero />
        <StorySections />
        <TeamSection />
      </main>

      <Footer />
    </div>
  );
}
