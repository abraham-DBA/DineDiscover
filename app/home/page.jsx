import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/home/Hero';
import CuisineFilters from '../components/home/CuisineFilters';
import FeaturedRestaurants from '../components/home/FeaturedRestaurants';
import PopularNearYou from '../components/home/PopularNearYou';
import PopularDestinations from '../components/home/PopularDestinations';
import NewArrivals from '../components/home/NewArrivals';
import HowItWorks from '../components/home/HowItWorks';
import Testimonials from '../components/home/Testimonials';
import CallToAction from '../components/home/CallToAction';

export const metadata = {
    title: "Home - Discover Great Food with New Arrivals",
    description: "Discover the best local gems and fine dining experiences near you.",
};

export default function HomePage() {
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
