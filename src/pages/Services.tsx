
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { ArrowRight, CheckCircle, FileText, Monitor, Search, Smartphone, Target, Video } from 'lucide-react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';



const services = [
  {
    icon: Monitor,
    emoji: '💻',
    title: 'Website Development',
    subtitle: 'Build a Website That Works as Hard as You Do',
    description: 'We design fast, mobile-responsive, and SEO-optimized websites that convert visitors into customers.',
    features: [
      'Custom responsive web design',
      'E-commerce solutions',
      'Content management systems',
      'Performance optimization',
      'SEO-friendly architecture',
      'Mobile-first approach'
    ],
    process: [
      'Discovery & Planning',
      'Design & Prototyping',
      'Development & Testing',
      'Launch & Optimization'
    ],
    iconColor: 'text-blue-600',
    bgColor: 'bg-blue-50',
   
  },
  {
    icon: Search,
    emoji: '🌐',
    title: 'Search Engine Optimization (SEO)',
    subtitle: 'Rank Higher. Get Found. Grow Organically',
    description: 'We help you appear at the top of Google with result-driven SEO strategies.',
    features: [
      'Comprehensive SEO audit',
      'Keyword research & strategy',
      'On-page optimization',
      'Technical SEO fixes',
      'Link building campaigns',
      'Monthly reporting'
    ],
    process: [
      'SEO Audit & Analysis',
      'Strategy Development',
      'Implementation',
      'Monitor & Optimize'
    ],
   
    iconColor: 'text-green-600',
    bgColor: 'bg-green-50',
    
  },
  {
    icon: Smartphone,
    emoji: '📱',
    title: 'Social Media Management',
    subtitle: 'Connect. Engage. Grow',
    description: 'We handle everything from content creation to engagement across all platforms.',
    features: [
      'Content strategy & calendar',
      'Custom graphics & videos',
      'Daily posting & scheduling',
      'Community management',
      'Performance analytics',
      'Influencer partnerships'
    ],
    process: [
      'Strategy Development',
      'Content Creation',
      'Publishing & Engagement',
      'Analytics & Reporting'
    ],

    iconColor: 'text-purple-600',
    bgColor: 'bg-purple-50',
 
  },
  {
    icon: Video,
    emoji: '🎬',
    title: 'Video Editing & Reels Creation',
    subtitle: 'Bring Your Brand to Life With Compelling Visuals',
    description: 'Stand out with professionally edited videos and reels that drive engagement.',
    features: [
      'Professional video editing',
      'Instagram & TikTok reels',
      'Motion graphics',
      'Brand storytelling videos',
      'Product demonstrations',
      'Promotional content'
    ],
    process: [
      'Content Planning',
      'Filming/Asset Collection',
      'Editing & Post-Production',
      'Final Delivery'
    ],
    
    iconColor: 'text-red-600',
    bgColor: 'bg-red-50',

  },
  {
    icon: Target,
    emoji: '📈',
    title: 'Google Ads (SEM / PPC)',
    subtitle: 'Drive Instant Traffic and Conversions',
    description: 'Target your audience with precision and get immediate ROI through Google Ads.',
    features: [
      'Campaign strategy & setup',
      'Keyword research & bidding',
      'Ad copy creation',
      'Landing page optimization',
      'Conversion tracking',
      'Performance optimization'
    ],
    process: [
      'Account Setup & Strategy',
      'Campaign Creation',
      'Launch & Monitor',
      'Optimize & Scale'
    ],
 
    iconColor: 'text-orange-600',
    bgColor: 'bg-orange-50',
    
  },
  {
    icon: FileText,
    emoji: '📘',
    title: 'eBook & Digital Brochure Designing',
    subtitle: 'Present Your Brand Professionally & Creatively',
    description: 'From eBooks to digital brochures, we design impactful documents that speak volumes.',
    features: [
      'Custom design layouts',
      'Brand-consistent visuals',
      'Interactive elements',
      'Print-ready formats',
      'Digital optimization',
      'Content organization'
    ],
    process: [
      'Content Strategy',
      'Design Concepts',
      'Revisions & Refinement',
      'Final Delivery'
    ],

    iconColor: 'text-indigo-600',
    bgColor: 'bg-indigo-50',
    
  }
];

const Services = () => {
  const playClickSound = () => {
    const audioContext = new AudioContext();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.1);
    oscillator.frequency.exponentialRampToValueAtTime(600, audioContext.currentTime + 0.2);
    
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
    
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.3);
  };

  useEffect(() => {
    // Handle smooth scrolling when URL has hash
    const handleScrollToSection = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          // Add a small delay to ensure the page is fully loaded
          setTimeout(() => {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }, 100);
        }
      }
    };

    // Check for hash on initial load
    handleScrollToSection();

    // Listen for hash changes
    window.addEventListener('hashchange', handleScrollToSection);
    
    return () => {
      window.removeEventListener('hashchange', handleScrollToSection);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="py-16 px-6 sm:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Comprehensive digital solutions designed to elevate your brand and drive real business results.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="px-6 sm:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-16">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  id={service.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '')}
                  className={`rounded-2xl p-8 md:p-12 ${service.bgColor}`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className={`w-16 h-16 rounded-xl bg-white flex items-center justify-center ${service.iconColor}`}>
                          <service.icon className="h-8 w-8" />
                        </div>
                        <span className="text-4xl">{service.emoji}</span>
                      </div>
                      
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">
                          {service.title}
                        </h2>
                        <h3 className="text-lg md:text-xl font-semibold text-foreground mb-4">
                          {service.subtitle}
                        </h3>
                        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                          {service.description}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                          <a href="https://forms.gle/xQxeF3hhEoa2qF2t9" target="_blank" rel="noopener noreferrer">
                            <button 
                              className="connect-button px-6 py-3"
                              onClick={playClickSound}
                            >
                              Get Started
                            </button>
                          </a>
                          <Link to="/">
                            <button 
                              className="px-6 py-3 border border-border rounded-lg hover:bg-white/50 transition-colors flex items-center"
                              onClick={playClickSound}
                            >
                              Learn More <ArrowRight className="ml-2 h-4 w-4" />
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-8">
                      {/* Features */}
                      <div className="bg-white/70 rounded-xl p-6">
                        <h4 className="font-bold text-foreground mb-4 flex items-center">
                          <CheckCircle className="w-5 h-5 text-primary mr-2" />
                          What's Included
                        </h4>
                        <ul className="space-y-3">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start text-muted-foreground">
                              <div className="w-2 h-2 rounded-full bg-primary mr-3 mt-2 flex-shrink-0"></div>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Process */}
                      <div className="bg-white/70 rounded-xl p-6">
                        <h4 className="font-bold text-foreground mb-4">Our Process</h4>
                        <div className="space-y-3">
                          {service.process.map((step, stepIndex) => (
                            <div key={stepIndex} className="flex items-center">
                              <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">
                                {stepIndex + 1}
                              </div>
                              <span className="text-muted-foreground">{step}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Projects Showcase */}
                      {/* Removed projects showcase as 'projects' property does not exist on service objects */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 sm:px-8 mt-20">
          <div className="max-w-4xl mx-auto text-center bg-gradient-primary rounded-2xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Let's discuss which services are right for your business goals and create a custom solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/919391934534" target="_blank" rel="noopener noreferrer">
                <button 
                  className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  onClick={playClickSound}
                >
                  Schedule Consultation
                </button>
              </a>
              
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
