import { ChevronDown, Menu, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'Careers', href: '/careers' },
  { name: 'Blog', href: '/blog' },
  { name: 'About Us', href: '/about' },
];

const services = [
  { name: '💻 Website Development', href: '/services#website-development' },
  { name: '🌐 Search Engine Optimization (SEO)', href: '/services#search-engine-optimization' },
  { name: '📱 Social Media Management', href: '/services#social-media-management' },
  { name: '🎬 Video Editing & Reels Creation', href: '/services#video-editing--reels-creation' },
  { name: '📈 Google Ads (SEM / PPC)', href: '/services#google-ads' },
  { name: '📘 eBook & Digital Brochure Designing', href: '/services#ebook--digital-brochure-designing' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  const playHoverSound = () => {
    const audioContext = new AudioContext();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    oscillator.frequency.setValueAtTime(300, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(450, audioContext.currentTime + 0.05);
    gainNode.gain.setValueAtTime(0.05, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.1);
  };

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
    function handleClickOutside(event: Event) {
      if (servicesRef.current && event.target instanceof Node && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [servicesRef]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[500] bg-white backdrop-blur-sm border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24 md:h-28">
          {/* Left Section - Logo */}
          <div className="flex items-center space-x-3">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="/logo.jpg"
                alt="Vinofyx"
                className="h-14 w-auto md:h-18 object-contain"
              />
            </Link>
          </div>

          {/* Center Section - Navigation Links (Desktop) */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onMouseEnter={playHoverSound}
                onClick={playClickSound}
                className="px-4 py-2.5 text-sm font-medium text-foreground transition-all duration-300 ease-in-out hover:bg-accent hover:rounded-lg"
              >
                {item.name}
              </Link>
            ))}

            {/* Services Dropdown */}
            <div className="relative" ref={servicesRef}>
              <button
                onClick={() => {
                  playClickSound();
                  setIsServicesOpen(!isServicesOpen);
                }}
                className="px-4 py-2.5 text-sm font-medium text-foreground flex items-center space-x-1 hover:bg-accent hover:rounded-lg"
              >
                <span>Services</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-card border border-border rounded-lg shadow-hover z-50">
                  <div className="p-4 space-y-2">
                    {services.map((service, index) => (
                      <a
                        key={index}
                        href={service.href}
                        className="block p-3 rounded-lg hover:bg-accent transition-colors text-sm"
                        onMouseEnter={playHoverSound}
                        onClick={() => {
                          playClickSound();
                          setIsServicesOpen(false);
                        }}
                      >
                        {service.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Section */}
          <div className="hidden lg:block">
            <a href="https://forms.gle/xQxeF3hhEoa2qF2t9" target="_blank" rel="noopener noreferrer">
              <button
                className="connect-button"
                onMouseEnter={playHoverSound}
                onClick={playClickSound}
              >
                Let's Connect
              </button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => {
                playClickSound();
                setIsMenuOpen(!isMenuOpen);
              }}
              className="p-2 rounded-lg text-foreground hover:bg-accent"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border/50 bg-background">
            <div className="px-2 pt-2 pb-3 space-y-1 max-h-screen overflow-y-auto">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-4 py-3 rounded-lg text-base font-medium text-foreground hover:bg-accent"
                  onClick={() => {
                    playClickSound();
                    setIsMenuOpen(false);
                  }}
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile Services */}
              <div className="pt-2 border-t border-border/50">
                <div className="px-4 py-2 text-base font-medium text-foreground">Services</div>
                {services.map((service, index) => (
                  <a
                    key={index}
                    href={service.href}
                    className="block px-4 py-3 rounded-lg text-base font-medium text-foreground hover:bg-accent"
                    onClick={() => {
                      playClickSound();
                      setIsMenuOpen(false);
                    }}
                  >
                    {service.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
