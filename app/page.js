import Header from './components/Header';
import Hero from './components/Hero';
import CuisineFilters from './components/CuisineFilters';
import FeaturedRestaurants from './components/FeaturedRestaurants';
import PopularNearYou from './components/PopularNearYou';
import PopularDestinations from './components/PopularDestinations';
import NewArrivals from './components/NewArrivals';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Header />
      <main className="flex-1 pt-[72px]">
        <Hero />
        <CuisineFilters />
        <FeaturedRestaurants />
        <PopularNearYou />
        <PopularDestinations />
        <NewArrivals />
        <HowItWorks />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
