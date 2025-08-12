
import { ChevronDown, ChevronUp, FileText, Monitor, Search, Smartphone, Target, Video } from 'lucide-react';
import { useState } from 'react';

const services = [
  {
    icon: Monitor,
    emoji: '💻',
    title: 'Website Development',
    subtitle: 'Build a Website That Works as Hard as You Do.',
    description: 'We design fast, mobile-responsive, and SEO-optimized websites that convert visitors into customers.',
    whatYouGet: ['Business websites', 'Landing pages', 'E-commerce stores', 'WordPress development'],
    fullDescription: 'Our comprehensive website development service ensures your online presence stands out. We focus on creating websites that not only look stunning but also perform exceptionally. From responsive design to SEO optimization, we handle every aspect of your digital storefront to maximize conversions and user engagement.',
    hoverColor: 'hover:bg-blue-100 hover:ring-4 hover:ring-blue-400'
,
    iconColor: 'text-blue-600'
  },
  {
    icon: Search,
    emoji: '🌐',
    title: 'Search Engine Optimization (SEO)',
    subtitle: 'Rank Higher. Get Found. Grow Organically.',
    description: 'We help you appear at the top of Google with result-driven SEO strategies.',
    whatYouGet: ['Keyword research & targeting', 'On-page & technical SEO', 'Local SEO optimization', 'Competitor analysis'],
    fullDescription: 'Our SEO experts use cutting-edge techniques and proven strategies to improve your search engine rankings. We conduct thorough keyword research, optimize your website structure, and implement local SEO tactics to ensure your business gets found by the right customers at the right time.',
    hoverColor:'hover:bg-green-100 hover:ring-4 hover:ring-green-400'
,
    iconColor: 'text-green-600'
  },
  {
    icon: Smartphone,
    emoji: '📱',
    title: 'Social Media Management',
    subtitle: 'Connect. Engage. Grow.',
    description: 'We handle everything from content creation to engagement across all platforms.',
    whatYouGet: ['Profile optimization', 'Content calendars', 'Post design & captions', 'Audience growth'],
    fullDescription: 'Transform your social media presence with our comprehensive management service. We create engaging content, maintain consistent posting schedules, and actively engage with your audience to build a strong community around your brand. Our data-driven approach ensures maximum reach and engagement.',
    hoverColor: 'hover:bg-purple-100 hover:ring-4 hover:ring-purple-400'
,
    iconColor: 'text-purple-600'
  },
  {
    icon: Video,
    emoji: '🎬',
    title: 'Video Editing & Reels Creation',
    subtitle: 'Bring Your Brand to Life With Compelling Visuals.',
    description: 'Stand out with professionally edited videos and reels that drive engagement.',
    whatYouGet: ['Promotional videos', 'Instagram/Facebook reels', 'Motion graphics', 'Brand storytelling'],
    fullDescription: 'Our creative video production team specializes in creating viral-worthy content that captures attention and drives engagement. From concept to final edit, we handle all aspects of video production including motion graphics, sound design, and color grading to ensure your brand story resonates with your audience.',
    hoverColor: 'hover:bg-red-100 hover:ring-4 hover:ring-red-400'
,
    iconColor: 'text-red-600'
  },
  {
    icon: Target,
    emoji: '📈',
    title: 'Google Ads (SEM / PPC)',
    subtitle: 'Drive Instant Traffic and Conversions.',
    description: 'Target your audience with precision and get immediate ROI through Google Ads.',
    whatYouGet: ['Campaign setup & management', 'Keyword optimization', 'Performance tracking', 'Retargeting campaigns'],
    fullDescription: 'Maximize your advertising ROI with our expert Google Ads management. We create targeted campaigns that reach your ideal customers at the perfect moment. Our data-driven approach includes continuous optimization, A/B testing, and detailed performance reporting to ensure every dollar spent delivers maximum results.',
    hoverColor: 'hover:bg-orange-100 hover:ring-4 hover:ring-orange-400'
,
    iconColor: 'text-orange-600'
  },
  {
    icon: FileText,
    emoji: '📘',
    title: 'eBook & Digital Brochure Designing',
    subtitle: 'Present Your Brand Professionally & Creatively.',
    description: 'From eBooks to digital brochures, we design impactful documents that speak volumes.',
    whatYouGet: ['Informative layouts', 'Professional design', 'Branded visuals', 'Shareable formats'],
    fullDescription: 'Create lasting impressions with our professional design services. We craft visually stunning eBooks and digital brochures that effectively communicate your message and showcase your expertise. Perfect for lead generation, client presentations, and establishing thought leadership in your industry.',
    hoverColor: 'hover:bg-indigo-100 hover:ring-4 hover:ring-indigo-400'
,
    iconColor: 'text-indigo-600'
  }
];

const Services = () => {
  const [expandedCards, setExpandedCards] = useState<number[]>([]);

  const toggleCard = (index: number) => {
    setExpandedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

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
    <section id="services" className="py-20 px-6 sm:px-8 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer comprehensive digital solutions tailored to elevate your brand 
            and create meaningful connections with your audience.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className={`group bg-card border-2 border-border rounded-xl p-8 transition-all duration-300 hover:shadow-hover ${service.hoverColor} cursor-pointer`}>
              
              {/* Icon and Emoji */}
              <div className="flex items-center space-x-3 mb-6">
                <div className={`w-12 h-12 rounded-lg bg-muted flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${service.iconColor}`}>
                  <service.icon className="h-6 w-6" />
                </div>
                <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                  {service.emoji}
                </span>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-primary group-hover:text-opacity-90">
                  {service.title}
                </h3>
                
                <h4 className="text-lg font-semibold text-foreground">
                  {service.subtitle}
                </h4>
                
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* What You Get */}
                <div className="space-y-2 pt-4">
                  <div className="text-sm font-medium text-primary">✅ What you get:</div>
                  <ul className="space-y-2">
                    {service.whatYouGet.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3 mt-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Expandable Content */}
                {expandedCards.includes(index) && (
                  <div className="mt-4 pt-4 border-t border-border/50">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.fullDescription}
                    </p>
                  </div>
                )}

                {/* Read More Button */}
                <button
                  onClick={() => {
                    playClickSound();
                    toggleCard(index);
                  }}
                  className="flex items-center space-x-2 text-primary hover:text-primary-light transition-colors duration-200 text-sm font-medium mt-4 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:rounded-lg"
                >
                  <span>{expandedCards.includes(index) ? 'Read Less' : 'Read More'}</span>
                  {expandedCards.includes(index) ? 
                    <ChevronUp className="h-4 w-4" /> : 
                    <ChevronDown className="h-4 w-4" />
                  }
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
