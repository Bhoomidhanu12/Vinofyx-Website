
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const services = [
  'WEBSITE DEVELOPMENT',
  'SEO OPTIMIZATION', 
  'SOCIAL MEDIA MANAGEMENT',
  'VIDEO EDITING',
  'GOOGLE ADS',
  'DIGITAL BROCHURES'
];

const Hero = () => {
  const [currentService, setCurrentService] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const playClickSound = () => {
    // Create climbing steps sound effect
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

  return (
    <section id="home" className="pt-32 pb-20 px-6 sm:px-8 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center space-y-8">
          
          {/* Compact Animated Header - Slack style */}
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">


              <span className="text-foreground">Where </span>
              <span 
                key={currentService}
                className="bg-gradient-primary bg-clip-text text-transparent animate-fade-in inline-block"
              >
                {services[currentService]}
              </span>
              <span className="text-foreground"> happens</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Your growth, our responsibility. Side by side with digital marketing experts.
            </p>
          </div>

          {/* CTA Buttons - Slack style */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link to="/services">
              <button 
                className="connect-button px-6 py-3 text-base font-semibold"
                onClick={playClickSound}
              >
                GET STARTED
              </button>
            </Link>
            
            <Link to="/services">
              <button 
                className="px-6 py-3 text-base font-medium text-primary border border-border rounded-lg hover:bg-accent transition-all duration-300 hover:shadow-elegant"
                onClick={playClickSound}
              >
                FIND YOUR SOLUTION →
              </button>
            </Link>
          </div>

          {/* Tech Tools Scrolling Section */}
          <div className="pt-12">
            <p className="text-sm text-muted-foreground mb-6 uppercase tracking-wide">
              Powered by industry-leading tools
            </p>
            <div className="overflow-hidden">
              <div className="flex animate-scroll space-x-12 w-max">
                <div className="flex space-x-12 text-xl font-bold text-muted-foreground opacity-60">
                  <span>N8N</span>
                  <span>FIGMA</span>
                  <span>CANVA</span>
                  <span>WORDPRESS</span>
                  <span>SHOPIFY</span>
                  <span>GOOGLE ADS</span>
                  <span>META ADS</span>
                  <span>HOOTSUITE</span>
                  <span>SEMRUSH</span>
                  <span>AHREFS</span>
                </div>
                {/* Duplicate for seamless loop */}
                <div className="flex space-x-12 text-xl font-bold text-muted-foreground opacity-60">
                  <span>N8N</span>
                  <span>FIGMA</span>
                  <span>CANVA</span>
                  <span>WORDPRESS</span>
                  <span>SHOPIFY</span>
                  <span>GOOGLE ADS</span>
                  <span>META ADS</span>
                  <span>HOOTSUITE</span>
                  <span>SEMRUSH</span>
                  <span>AHREFS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
