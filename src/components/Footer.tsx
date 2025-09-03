import { Instagram, Linkedin, MessageCircle, Youtube } from "lucide-react";
import { Link } from 'react-router-dom';

const Footer = () => {
  const playHoverSound = () => {
    // Optionally play a sound or leave empty to avoid errors
  };

  const playClickSound = () => {
    // Optionally play a sound or leave empty to avoid errors
  };

  return (
    <footer className="bg-gradient-subtle border-t border-border/50 py-16 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

          {/* Company Info */}
          <div className="space-y-4">

            <p className="text-muted-foreground text-sm leading-relaxed">
              Your Growth, Our Responsibility. We're a team of passionate marketing professionals and tech experts who blend AI with creative strategies to deliver high-impact digital marketing solutions. Based in Hyderabad, serving clients across India and beyond.
            </p>
           
    <div className="flex space-x-4">
      <a
        href="https://www.instagram.com/vinofyxdigitalmedia/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        <span className="sr-only">Instagram</span>
        <Instagram className="h-5 w-5" />
      </a>
      <a
        href="https://www.linkedin.com/in/venkat-sadhu-0555a5367/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        <span className="sr-only">LinkedIn</span>
        <Linkedin className="h-5 w-5" />
      </a>
      <a
        href="https://wa.me/919391934534"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        <span className="sr-only">WhatsApp</span>
        <MessageCircle className="h-5 w-5" />
      </a>
      <a
        href="https://www.youtube.com/@VinofyxDigital"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        <span className="sr-only">YouTube</span>
        <Youtube className="h-5 w-5" />
      </a>
    </div>
  
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors">🔍 Search Engine Optimization (SEO)</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors">📱 Social Media Management & Strategy</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors">🎯 Performance Marketing (Google Ads & Meta Ads)</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors">💻 Website Design & Development</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors">📊 Analytics & Growth Tracking</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors">🎥 Video Editing & Content Creation</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">Home</a></li>
       
              <li><a href="#careers" className="text-muted-foreground hover:text-primary transition-colors">Careers</a></li>
              <li><Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Projects</a></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Get In Touch</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>📧 info@vinofyx.com</p>
              <p>📞 +91-93919-34534</p>
              <p>💬 WhatsApp: +91-93919-34534</p>
              <p>📍 Hyderabad, India<br />Serving India & Global Markets</p>
            </div>
              <div className="hidden lg:block">
            <a href="https://forms.gle/xQxeF3hhEoa2qF2t9" target="_blank" rel="noopener noreferrer">
              <button
                className="connect-button"
                onMouseEnter={playHoverSound}
                onClick={playClickSound}
              >
                Start Your Project
              </button>
            </a>
          </div>

          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-muted-foreground text-sm">
            © 2025 Vinofyx. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link to="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors underline">Privacy Policy</Link>
            <Link to="/gdpr" className="text-muted-foreground hover:text-primary transition-colors underline">GDPR</Link>
            <Link to="/disclaimer" className="text-muted-foreground hover:text-primary transition-colors underline">Disclaimer</Link>
            <Link to="/terms-and-conditions" className="text-muted-foreground hover:text-primary transition-colors underline">Terms of Service</Link>
            <Link to="/cookie-policy" className="text-muted-foreground hover:text-primary transition-colors underline">Cookie Policy</Link>
            <Link to="/refund-cancellation-policy" className="text-muted-foreground hover:text-primary transition-colors underline">Refund & Cancellation Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
