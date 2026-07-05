import { Hero } from '@/components/hero';
import { Services } from '@/components/services';
import { Contact } from '@/components/contact';

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Services />
        <Contact />
      </main>
    </>
  );
}
