"use client"
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import CyclopsHero from '@/components/sections/layouts/hero/CyclopsHero';
import SimpleFloatingNavbar from '@/components/navigation/SimpleFloatingNavbar';
import GalleryBento from '@/components/bento/galleryBento/GalleryBento';
import StandardAbout from '@/components/sections/layouts/about/StandardAbout';
import PricingBento from '@/components/bento/PricingBento';
import SimpleStepsBento from '@/components/bento/SimpleStepsBento';
import SimpleFooter from '@/components/sections/layouts/footer/SimpleFooter';
import { SparklesCore } from '@/components/sparkles/Sparkles';

const navbarItems = [
  { id: 'hero', name: 'Home' },
  { id: 'portfolio', name: 'Portfolio' },
  { id: 'about', name: 'About' },
  { id: 'services', name: 'Services' },
  { id: 'testimonials', name: 'Testimonials' },
  { id: 'contact', name: 'Contact' }
];

const portfolioItems = [
  { title: 'Cinematic Landscape', image: '/images/placeholder1.avif' },
  { title: 'Moody Portrait', image: '/images/placeholder2.avif' },
  { title: 'Creative Composition', image: '/images/placeholder3.avif' },
  { title: 'Abstract Art', image: '/images/placeholder4.avif' },
  { title: 'Lifestyle Shoot', image: '/images/placeholder5.avif' },
  { title: 'Fashion Editorial', image: '/images/placeholder6.avif' },
];

const Home = () => {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'futuristicAndOutOfBox', colorTemplate: 1, textAnimation: 'slide' }}>
      <SimpleFloatingNavbar navItems={navbarItems} logoSrc="/images/logowhite.svg" logoWidth={100} logoHeight={50} buttonText="Inquire" onButtonClick={() => alert('Inquire clicked')} className="bg-transparent" />
      <div id="hero" className="relative h-screen flex items-center justify-center bg-gradient-to-br from-[#00E5FF] to-[#7C5CFF] text-white">
        <CyclopsHero title="LumenShutter" subtitle="Cinematic Photography Portfolio" primaryButtonText="View Portfolio" secondaryButtonText="Book a Shoot" onPrimaryButtonClick={() => alert('Portfolio clicked')} onSecondaryButtonClick={() => alert('Book clicked')} />
      </div>
      <div id="portfolio" className="bg-[#0A0F15] py-20">
        <GalleryBento items={portfolioItems} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" />
      </div>
      <div id="about" className="bg-glass p-10">
        <StandardAbout title="About Me" descriptions={["Capturing moments with a futuristic approach.", "Passionate about cinematic photography."]} />
      </div>
      <div id="services" className="bg-gradient-to-r from-[#00E5FF] to-[#7C5CFF] p-10">
        <PricingBento items={[{ badge: 'Portrait', price: '$200' }, { badge: 'Editorial', price: '$300' }, { badge: 'Commercial', price: '$400' }, { badge: 'Retouching', price: '$150' }]} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" />
      </div>
      <div id="testimonials" className="bg-pattern p-10">
        <SimpleStepsBento items={[{ title: 'Client 1', description: 'Great experience!' }, { title: 'Client 2', description: 'Highly recommend!' }]} className="space-y-4" />
      </div>
      <div id="contact" className="bg-[#0A0F15] py-20">
        <SimpleFooter columns={[{ title: 'Contact Us', items: [{ label: 'Privacy Policy', onClick: () => alert('Privacy Policy clicked') }, { label: 'Terms of Service', onClick: () => alert('Terms of Service clicked') }] }]} copyrightText="© 2023 LumenShutter" onPrivacyClick={() => alert('Privacy clicked')} />
      </div>
      <SparklesCore />
    </SiteThemeProvider>
  );
};

export default Home;
