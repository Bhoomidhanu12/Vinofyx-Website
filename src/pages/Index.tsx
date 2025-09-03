import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Services from '@/components/Services';

import { Link } from 'react-router-dom';

const playHoverSound = () => {
  // Optionally play a sound or leave empty to avoid errors
};

const playClickSound = () => {
  // Optionally play a sound or leave empty to avoid errors
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        <Hero />
        <Services />
        
        <section id="about" className="py-20 px-6 sm:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-8">Meet the Minds Behind Your Growth</h2>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
                At Vinofyx, our space reflects our mindset — modern, collaborative, and driven by purpose. We aren't just a digital marketing agency. 
                We are a team of passionate strategists, creatives, and tech experts working together to shape the future of marketing through AI and performance-driven solutions.
              </p>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Every desk, meeting, and idea here is focused on client success, because we believe that your growth is our responsibility — and we mean it.
              </p>
            </div>

            {/* What Sets Us Apart */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <div className="text-center elegant-card p-6 border border-transparent hover:bg-yellow-300 hover:border-yellow-500 transition-all duration-300 cursor-pointer">
                <div className="text-4xl mb-4">💡</div>
                <h3 className="font-bold text-foreground mb-2">AI-Powered Strategies</h3>
                <p className="text-sm text-muted-foreground">Cutting-edge AI tools combined with human expertise</p>
              </div>
              <div className="text-center elegant-card p-6 border border-transparent hover:bg-blue-300 hover:border-blue-500 transition-all duration-300 cursor-pointer">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="font-bold text-foreground mb-2">Client-Centric Collaboration</h3>
                <p className="text-sm text-muted-foreground">Building relationships and understanding your business</p>
              </div>
              <div className="text-center elegant-card p-6 border border-transparent hover:bg-orange-300 hover:border-orange-500 transition-all duration-300 cursor-pointer">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="font-bold text-foreground mb-2">Data + Creativity = Results</h3>
                <p className="text-sm text-muted-foreground">Smart, data-driven strategies with creative excellence</p>
              </div>
              <div className="text-center elegant-card p-6 border border-transparent hover:bg-indigo-300 hover:border-indigo-500 transition-all duration-300 cursor-pointer">
                <div className="text-4xl mb-4">🌐</div>
                <h3 className="font-bold text-foreground mb-2">Serving India and Global Markets</h3>
                <p className="text-sm text-muted-foreground">From Hyderabad to clients across the globe</p>
              </div>
            </div>

            {/* Our Story */}
            <div className="elegant-card p-8 md:p-12 text-center mb-16">
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">Smart Teams. Smarter Marketing.</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                At Vinofyx, we believe the strength of our work lies in the strength of our team. Behind every marketing strategy, campaign, 
                and creative idea is a passionate group of digital marketers, analysts, designers, and problem-solvers working together with one goal — your growth.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We don't just deliver services; we build relationships, understand your business, and use cutting-edge AI tools combined with human expertise 
                to drive measurable success. "Your Growth, Our Responsibility" isn't just a tagline — it's our work ethic.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From Hyderabad to clients across the globe, our culture of collaboration, trust, and innovation helps us transform challenges into opportunities — and brands into leaders.
              </p>
            </div>

            {/* Mission, Vision, Values */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="elegant-card p-8 text-center border border-transparent hover:bg-yellow-300 hover:border-yellow-500 transition-all duration-300 cursor-pointer">
                <div className="text-4xl mb-4">🏢</div>
                <h3 className="text-xl font-bold text-primary mb-4">Who We Are</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  More than just a digital marketing agency — we are your growth partners. Founded by passionate marketing professionals and tech experts, 
                  Vinofyx blends AI with creative strategies to deliver high-impact digital marketing solutions.
                </p>
              </div>
              <div className="elegant-card p-8 text-center border border-transparent hover:bg-pink-300 hover:border-pink-500 transition-all duration-300 cursor-pointer">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-primary mb-4">Our Mission</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  To help businesses grow online through smart, data-driven strategies, creative content, and transparent communication — 
                  all powered by the latest in AI and marketing technologies.
                </p>
              </div>
              <div className="elegant-card p-8 text-center border border-transparent hover:bg-purple-300 hover:border-purple-500 transition-all duration-300 cursor-pointer">
                <div className="text-4xl mb-4">💡</div>
                <h3 className="text-xl font-bold text-primary mb-4">Our Vision</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  To become one of the most trusted digital growth partners globally, empowering brands of all sizes to scale up using 
                  ethical, innovative, and AI-powered marketing practices.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-20 px-6 sm:px-8 bg-gradient-subtle">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-8">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
              Discover some of our latest work and see how we've helped brands 
              transform their digital presence.
            </p>
            <div className="elegant-card p-12">
              <p className="text-muted-foreground">Project showcase coming soon...</p>
            </div>
          </div>
        </section>

        <section id="careers" className="py-20 px-6 sm:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-8">Join Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              Our strength lies in our team — a diverse group of strategists, designers, developers, analysts, and storytellers who share a single goal: your growth.
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              With over 5+ years of collective experience, we bring deep industry knowledge and a passion for results.
            </p>
            <Link to="/careers">
              <button className="connect-button px-8 py-3 text-base">
                View Open Positions
              </button>
            </Link>
          </div>
        </section>

        <section id="contact" className="py-20 px-6 sm:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-8">Let's Connect</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Want to learn more about how we can grow your business? Book a free strategy call or get in touch with us today.
            </p>
            <a href="https://wa.me/919391934534" target="_blank" rel="noopener noreferrer">
              <button className="connect-button px-8 py-3 text-base">
                Start a Conversation
              </button>
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
