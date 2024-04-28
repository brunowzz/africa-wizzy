import TourPackage from '../TourPackage';
import Hero from './components/Hero';

export default function Home() {
  return (
    <main>
      <Hero />
      <TourPackage inHome />
    </main>
  );
}
