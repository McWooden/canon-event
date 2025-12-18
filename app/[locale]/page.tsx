
import Hero from '@/app/components/Home/Hero';
import Brands from '@/app/components/Home/Brands';
import Footer from '@/app/components/Footer';
import CallToAction from '@/app/components/Home/CallToAction';
import Articles from '@/app/components/Home/Articles';
import Features from '@/app/components/Home/Features';
import { QuotesOne, QuotesTwo} from '@/app/components/Home/Quotes';

export default async function Page() {

  return <main>
    <Hero/>
    <Brands/>
    <QuotesOne/>
    <Features/>
    <Articles/>
    <QuotesTwo/>
    <CallToAction/>
    <Footer/>
  </main>
}


