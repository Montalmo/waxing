import { useState } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Benefits from './Benefits';
import Gallery from './Gallery';
import Reviews from './Reviews';
import Blog from './Blog';
import FAQ from './FAQ';
import Booking from './Booking';
import Footer from './Footer';

const Home = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleSelectService = (service) => {
    setSelectedService(service);
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services onSelectService={handleSelectService} />
        <Benefits />
        <Gallery />
        <Reviews />
        <Blog />
        <FAQ />
        <Booking selectedService={selectedService} onServiceSelect={setSelectedService} />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
