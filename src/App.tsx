import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import SparkleBackground from './components/SparkleBackground';
import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import About from './components/About';
import EventInfo from './components/EventInfo';
import WhyAttend from './components/WhyAttend';
import Timeline from './components/Timeline';
import Venue from './components/Venue';
import Gallery from './components/Gallery';
import PromoVideo from './components/PromoVideo';
import Tickets from './components/Tickets';
import Sponsors from './components/Sponsors';
import SocialFeed from './components/SocialFeed';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import BookNowModal from './components/BookNowModal';
import InvitationModal from './components/InvitationModal';
import AudioAmbience from './components/AudioAmbience';
import RoyalInvitationSection from './components/RoyalInvitationSection';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isInvitationOpen, setIsInvitationOpen] = useState(false);

  const handleBookSpot = () => {
    window.open("https://www.trybooking.com/events/1614599/sessions/6564178/sections?embed=true", "_blank", "noopener,noreferrer");
  };

  const handleScrollToTickets = () => {
    const ticketsSection = document.getElementById('tickets');
    if (ticketsSection) {
      const headerOffset = 90;
      const elementPosition = ticketsSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleWatchPromo = () => {
    const promoSection = document.getElementById('promo-video');
    if (promoSection) {
      const headerOffset = 90;
      const elementPosition = promoSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0A0103] text-[#FAF9F6] selection:bg-gold-500 selection:text-[#0A0103] overflow-x-hidden antialiased">
      {/* 1. Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* Main Container shown after loading */}
      {!isLoading && (
        <>
          {/* 2. Background Star Canvas Sparkles */}
          <SparkleBackground />

          {/* Luxury background ambient audio */}
          <AudioAmbience />

          {/* 3. Header/Navigation */}
          <Header onBookNowClick={handleBookSpot} />

          {/* 4. Sections */}
          <main className="relative z-10 w-full">
            {/* Hero Banner */}
            <Hero onBookClick={handleBookSpot} onWatchPromoClick={handleWatchPromo} />

            {/* Countdown timer */}
            <Countdown />

            {/* Narrative description */}
            <About onInvitationClick={() => setIsInvitationOpen(true)} />

            {/* Youtube trailer container */}
            <PromoVideo />

            {/* Inline interactive Wax-Sealed Royal Invitation */}
            <RoyalInvitationSection onBookClick={handleScrollToTickets} />

            {/* Bento-grid Why Attend list */}
            <WhyAttend />

            {/* Quick specifications / details */}
            <EventInfo />

            {/* Chronological Schedule */}
            <Timeline />

            {/* Map destination details */}
            <Venue />

            {/* Swiper gallery of memories */}
            <Gallery />

            {/* Secure seats booking section */}
            <Tickets onBookClick={handleBookSpot} />

            {/* Gray partner branding logo wall */}
            <Sponsors />

            {/* Instagram simulation images */}
            <SocialFeed />

            {/* Collapsible Accordion items */}
            <FAQ />

            {/* RSVP query feedback form */}
            <Contact />
          </main>

          {/* 5. Static Elements */}
          <Footer />
          <BackToTop />

          {/* 6. Dynamic booking modal pop-up */}
          <BookNowModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

          {/* Royal Invitation wax-sealed card */}
          <InvitationModal isOpen={isInvitationOpen} onClose={() => setIsInvitationOpen(false)} onBookClick={handleScrollToTickets} />
        </>
      )}
    </div>
  );
}
