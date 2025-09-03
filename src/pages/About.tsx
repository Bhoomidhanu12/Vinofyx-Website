import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { CheckCircle, Globe, Lightbulb, Star, Target, TrendingUp, Users } from 'lucide-react';

const About = () => {
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

  const achievements = [
    { icon: CheckCircle, stat: "95%", label: "Client Satisfaction Rate" },
    { icon: Star, stat: "5+", label: "Years of Experience" },
    { icon: TrendingUp, stat: "100+", label: "Successful Projects" },
    { icon: Globe, stat: "Global", label: "Market Reach" }
  ];

  const industries = [
    "E-commerce", "Healthcare", "Real Estate", "Education", "Local Services", "Startups & Entrepreneurs"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="py-16 px-6 sm:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              Meet the Minds Behind Your Growth
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              At Vinofyx, our space reflects our mindset — modern, collaborative, and driven by purpose.
            </p>
          </div>
        </section>

        {/* Introduction */}
       <section className="py-16 px-6 sm:px-8 bg-gradient-subtle">
  <div className="max-w-7xl mx-auto">
    <div
      className="elegant-card p-8 md:p-12 text-center border border-transparent hover:border-blue-900 transition-colors duration-300 rounded-xl"
    >
      <p className="text-lg text-muted-foreground leading-relaxed mb-8">
        We aren't just a digital marketing agency. We are a team of passionate strategists, creatives, and tech experts 
        working together to shape the future of marketing through AI and performance-driven solutions.
      </p>
      <p className="text-lg text-muted-foreground leading-relaxed">
        Every desk, meeting, and idea here is focused on client success, because we believe that your growth is our responsibility — and we mean it.
      </p>
    </div>
  </div>
</section>


        {/* What Sets Us Apart */}
        <section className="py-20 px-6 sm:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">What Sets Us Apart?</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center elegant-card p-8 border border-transparent hover:border-yellow-500 transition-all duration-300 cursor-pointer">
                <div className="text-5xl mb-6">💡</div>
                <h3 className="text-xl font-bold text-foreground mb-4">AI-Powered Strategies</h3>
                <p className="text-muted-foreground">Cutting-edge AI tools combined with human expertise for smarter marketing solutions</p>
              </div>
              <div className="text-center elegant-card p-8 border border-transparent hover:border-green-500 transition-all duration-300 cursor-pointer">
                <div className="text-5xl mb-6">🤝</div>
                <h3 className="text-xl font-bold text-foreground mb-4">Client-Centric Collaboration</h3>
                <p className="text-muted-foreground">Building relationships and understanding your business to deliver personalized results</p>
              </div>
              <div className="text-center elegant-card p-8 border border-transparent hover:border-blue-500 transition-all duration-300 cursor-pointer">
                <div className="text-5xl mb-6">📊</div>
                <h3 className="text-xl font-bold text-foreground mb-4">Data + Creativity = Results</h3>
                <p className="text-muted-foreground">Smart, data-driven strategies combined with creative excellence</p>
              </div>
              <div className="text-center elegant-card p-8 border border-transparent hover:border-violet-500 transition-all duration-300 cursor-pointer">
                <div className="text-5xl mb-6">🌐</div>
                <h3 className="text-xl font-bold text-foreground mb-4">Serving India and Global Markets</h3>
                <p className="text-muted-foreground">From Hyderabad to clients across the globe</p>
              </div>
            </div>
          </div>
        </section>

        {/* Smart Teams Section */}
        <section className="py-20 px-6 sm:px-8 bg-gradient-subtle">
          <div className="max-w-7xl mx-auto">
            <div
      className="elegant-card p-8 md:p-12 text-center border border-transparent border-blue-900 transition-colors duration-300 rounded-xl">
  
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">Smart Teams. Smarter Marketing.</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                At Vinofyx, we believe the strength of our work lies in the strength of our team. Behind every marketing strategy, campaign, 
                and creative idea is a passionate group of digital marketers, analysts, designers, and problem-solvers working together with one goal — your growth.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                We don't just deliver services; we build relationships, understand your business, and use cutting-edge AI tools combined with human expertise 
                to drive measurable success. "Your Growth, Our Responsibility" isn't just a tagline — it's our work ethic.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From Hyderabad to clients across the globe, our culture of collaboration, trust, and innovation helps us transform challenges into opportunities — and brands into leaders.
              </p>
            </div>
          </div>
        </section>

        {/* Company Info Cards */}
        <section className="py-20 px-6 sm:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="elegant-card p-8 text-center border border-transparent hover:border-blue-500 transition-all duration-300 cursor-pointer">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">🏢 Who We Are</h3>
                <p className="text-muted-foreground leading-relaxed">
                  At Vinofyx, we are more than just a digital marketing agency — we are your growth partners. Founded by a team of passionate marketing 
                  professionals and tech experts, Vinofyx blends artificial intelligence with creative strategies to deliver high-impact digital marketing solutions. 
                  Based in Hyderabad, we serve clients all over India and beyond, helping brands thrive in today's fast-paced digital world.
                </p>
              </div>
              <div className="elegant-card p-8 text-center border border-transparent hover:border-blue-500 transition-all duration-300 cursor-pointer">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">🎯 Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To help businesses grow online through smart, data-driven strategies, creative content, and transparent communication — 
                  all powered by the latest in AI and marketing technologies.
                </p>
              </div>
              <div className="elegant-card p-8 text-center border border-transparent hover:border-blue-500 transition-all duration-300 cursor-pointer">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Lightbulb className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">💡 Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become one of the most trusted digital growth partners globally, empowering brands of all sizes to scale up using 
                  ethical, innovative, and AI-powered marketing practices.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-20 px-6 sm:px-8 bg-gradient-subtle">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">🚀 What We Do</h2>
              <p className="text-lg text-muted-foreground">We specialize in a wide range of digital marketing services</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="elegant-card p-6 text-center">
                <div className="text-3xl mb-4">🔍</div>
                <h3 className="font-bold text-foreground mb-2">Search Engine Optimization (SEO)</h3>
                <p className="text-sm text-muted-foreground">Boost your visibility and organic traffic</p>
              </div>
              <div className="elegant-card p-6 text-center">
                <div className="text-3xl mb-4">📱</div>
                <h3 className="font-bold text-foreground mb-2">Social Media Management & Strategy</h3>
                <p className="text-sm text-muted-foreground">Build and engage your community</p>
              </div>
              <div className="elegant-card p-6 text-center">
                <div className="text-3xl mb-4">🎯</div>
                <h3 className="font-bold text-foreground mb-2">Performance Marketing</h3>
                <p className="text-sm text-muted-foreground">Google Ads & Meta Ads that convert</p>
              </div>
              <div className="elegant-card p-6 text-center">
                <div className="text-3xl mb-4">💻</div>
                <h3 className="font-bold text-foreground mb-2">Website Design & Development</h3>
                <p className="text-sm text-muted-foreground">Beautiful, functional websites that perform</p>
              </div>
              <div className="elegant-card p-6 text-center">
                <div className="text-3xl mb-4">📊</div>
                <h3 className="font-bold text-foreground mb-2">Analytics & Growth Tracking</h3>
                <p className="text-sm text-muted-foreground">Data-driven insights for better decisions</p>
              </div>
              <div className="elegant-card p-6 text-center">
                <div className="text-3xl mb-4">🎥</div>
                <h3 className="font-bold text-foreground mb-2">Video Editing & Content Creation</h3>
                <p className="text-sm text-muted-foreground">Engaging content that tells your story</p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <p className="text-lg text-muted-foreground mb-6">
                Whether you're a startup, small business, or enterprise, we tailor solutions to meet your unique needs.
              </p>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-20 px-6 sm:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">👨‍💻 Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our strength lies in our team — a diverse group of strategists, designers, developers, analysts, and storytellers who share a single goal: your growth. 
              With over 5+ years of collective experience, we bring deep industry knowledge and a passion for results.
            </p>
          </div>
        </section>

        {/* Why Choose Vinofyx */}
        <section className="py-20 px-6 sm:px-8 bg-gradient-subtle">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">📈 Why Choose Vinofyx?</h2>
            </div>
            
            
                  
            
            </div>
            
            <div
      className="elegant-card p-8 md:p-12 text-center border border-transparent border-blue-900 transition-colors duration-300 rounded-xl"
    >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div>
                  <h3 className="font-bold text-foreground mb-4">Our Advantages:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">AI-Powered Tools for Smarter Marketing</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Transparent Work Process & Regular Reporting</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Strong Track Record Across Multiple Industries</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-4">Our Promise:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Friendly, Dedicated, and Strategic Team</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Ethical and Innovative Marketing Practices</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Your Growth is Our Responsibility</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
        
        </section>

        {/* Who We Serve */}
        <section className="py-20 px-6 sm:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">🗺 Who We Serve</h2>
            <p className="text-lg text-muted-foreground mb-12">
              We've proudly worked with businesses across various sectors including:
            </p>
            <p className="text-lg text-muted-foreground mb-12">EVERYONE WHO WANT TO BUILD AND CREATE IMPACT</p>
           
            <p className="text-lg text-muted-foreground">
              From Hyderabad to global clients, we've built a reputation for excellence and impact.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 sm:px-8 bg-gradient-subtle">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">📞 Let's Connect</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Want to learn more about how we can grow your business?
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="elegant-card p-6 border border-transparent hover:border-blue-500 transition-all duration-300 cursor-pointer">
                <div className="text-2xl mb-2">📅</div>
                <h3 className="font-bold text-foreground mb-2">Book a Free Strategy Call</h3>
                <p className="text-sm text-muted-foreground">Get personalized insights for your business</p>
              </div>
              <div className="elegant-card p-6 border border-transparent hover:border-green-500 transition-all duration-300 cursor-pointer">
                <div className="text-2xl mb-2">📧</div>
                <h3 className="font-bold text-foreground mb-2">Email Us</h3>
                <p className="text-sm text-muted-foreground">info@vinofyx.com</p>
              </div>
              <div className="elegant-card p-6 border border-transparent hover:border-red-500 transition-all duration-300 cursor-pointer">
                <div className="text-2xl mb-2">📱</div>
                <h3 className="font-bold text-foreground mb-2">Call/WhatsApp</h3>
                <p className="text-sm text-muted-foreground">+91-93919-34534</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                          <a href="https://forms.gle/xQxeF3hhEoa2qF2t9" target="_blank" rel="noopener noreferrer">
                <button 
                  className="connect-button px-8 py-3 text-lg"
                  onClick={playClickSound}
                >
                  Start Your Project
                </button>
              </a>
              <a href="https://wa.me/919391934534" target="_blank" rel="noopener noreferrer">
                <button 
                  className="px-8 py-3 border border-border rounded-lg hover:bg-accent transition-colors text-lg"
                  onClick={playClickSound}
                >
                  WhatsApp Us
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

export default About;