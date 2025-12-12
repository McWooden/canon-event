import Hero from '@/app/components/Home/Hero';
import Brands from '@/app/components/Home/Brands';
import Footer from '@/app/components/Footer';
import CallToAction from './components/Home/CallToAction';
import Artikel from './components/Home/Artikel';

export default function Home() {
  return <main>
    <Hero/>
    <Brands/>
    <section className='text-center justify-center flex flex-col gap-2 h-screen md:h-fit'>
      <h3 className='text-base lg:text-3xl'>Pernah nggak sih kepikiran <span className='font-semibold'>ide keren</span> buat bisnismu, tapi <span className='font-semibold'>bingung mulainya dari mana?</span> Tenang, serahin aja ke Adsvate.</h3>
      <span className='text-xs lg:text-xl italic'>Kami yang kerjain semuanya buatmu.</span>
    </section>
    <Artikel/>
    <CallToAction/>
    <Footer/>
  </main>
}


