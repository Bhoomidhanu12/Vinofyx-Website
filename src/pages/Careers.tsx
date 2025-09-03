import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Briefcase, Clock, Heart, MapPin, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

// Static job openings
const jobOpenings = [
  {
    id: 1,
    title: 'Ad Specialist',
    location: 'Remote',
    type: 'Full Time',
    description: 'Plan, manage, and optimize ad campaigns across multiple platforms to maximize ROI.',
  },
  {
    id: 2,
    title: 'Video Editor',
    location: 'Remote',
    type: 'Full Time',
    description: 'Edit and produce engaging video content for campaigns, ads, and brand storytelling.',
  },
  {
    id: 3,
    title: 'Web Designer',
    location: 'Remote',
    type: 'Full Time',
    description: 'Design visually stunning and user-friendly websites with modern UI/UX principles.',
  },
  {
    id: 4,
    title: 'SEO Specialist',
    location: 'Remote',
    type: 'Full Time',
    description: 'Optimize websites for search engines, conduct keyword research, and improve rankings.',
  },
  {
    id: 5,
    title: 'Graphic Designer',
    location: 'Remote',
    type: 'Full Time',
    description: 'Create impactful visual designs for digital campaigns, branding, and social media.',
  },
];

const companyValues = [
  {
    icon: Heart,
    title: 'Passion-Driven',
    description: 'We love what we do and it shows in our work quality and client relationships.'
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Great work happens when talented people work together towards common goals.'
  },
  {
    icon: Briefcase,
    title: 'Professional Growth',
    description: 'We invest in our team\'s development and provide opportunities to learn and advance.'
  }
];

const Careers = () => {
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

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="py-16 px-6 sm:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              Join Our Growing Team
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Help us create amazing digital experiences while building your career in a supportive, 
              innovative environment where your ideas matter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#job-openings">
                <button 
                  className="connect-button px-6 py-3"
                  onClick={playClickSound}
                >
                  View Open Positions
                </button>
              </a>
              <Link to="/">
                <button 
                  className="px-6 py-3 border border-border rounded-lg hover:bg-accent transition-colors"
                  onClick={playClickSound}
                >
                  Learn About Our Culture
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-16 px-6 sm:px-8 bg-gradient-subtle">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Why Work With Us?</h2>
              <p className="text-lg text-muted-foreground">Our values shape everything we do</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {companyValues.map((value, index) => (
                <div key={index} className="elegant-card p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Openings */}
        <section id="job-openings" className="py-20 px-6 sm:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Current Openings</h2>
              <p className="text-lg text-muted-foreground">Find your next opportunity with us</p>
            </div>

            <div className="space-y-8">
              {jobOpenings.map((job) => (
                <div key={job.id} className="elegant-card p-8 md:p-12 text-center border border-black">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    <div className="flex-1">
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold text-primary mb-2 text-left">{job.title}</h3>

                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {job.location}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {job.type}
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-6">{job.description}</p>
                    </div>

                    <div className="flex flex-col gap-3 lg:min-w-[200px]">
                      <a href="https://forms.gle/zhEcheAo422sXsk69" target="_blank" rel="noopener noreferrer">
                        <button 
                          className="connect-button px-6 py-3"
                          onClick={playClickSound}
                        >
                          Apply Now
                        </button>
                      </a>
                      <Link to="/">
                        <button 
                          className="px-6 py-3 border border-border rounded-lg hover:bg-accent transition-colors"
                          onClick={playClickSound}
                        >
                          Learn More
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-20 px-6 sm:px-8 bg-gradient-subtle">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">Our Hiring Process</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {['Application', 'Phone Screen', 'Technical Interview', 'Final Interview'].map((step, index) => (
                <div key={index} className="elegant-card p-6">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                    {index + 1}
                  </div>
                  <h3 className="font-semibold text-foreground">{step}</h3>
                </div>
              ))}
            </div>
            
            <div className="mt-12">
              <p className="text-muted-foreground mb-6">
                Don't see a role that fits? We're always looking for talented people to join our team.
              </p>
              <a href="https://forms.gle/zhEcheAo422sXsk69" target="_blank" rel="noopener noreferrer">
              <button 
                className="connect-button px-8 py-3"
                onClick={playClickSound}
              >
                Send Us Your Resume
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

export default Careers;
