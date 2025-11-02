import { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Hero from './components/Hero';
import StorySections from './components/StorySections';
import Footer from './components/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen bg-black font-sans text-white">
      <LoadingScreen isLoading={isLoading} onFinish={() => setIsLoading(false)} />

      <main aria-busy={isLoading} className={isLoading ? 'pointer-events-none select-none opacity-90' : ''}>
        <Hero />
        <StorySections />
      </main>

      <Footer />
    </div>
  );
}
