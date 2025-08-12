
import Navbar from '@/components/Navbar';
import { useApi } from '@/hooks/useApi';
import { Briefcase, Clock, DollarSign, Heart, MapPin, Users } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Static fallback data

const fallbackJobs = [
  {
    id: 1,
    title: 'Internship',
    department: 'Web Develpement,Digital Marketing,SEO,Google Ads,Vedio Editing',
    location: 'Remote',
    type: 'Internship',
    salary: 'Unpaid',
    description: 'Learn and Build',
    requirements: [
      'Strong Intrest To create and innovate'
    ],
    benefits: [
      'Flexible hours',
      'Remote work',

    ]
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

type JobOpening = {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  salary: string;
  description: string;
  requirements: string[];
  benefits: string[];
};

const Careers = () => {
  const { fetchJobOpenings } = useApi();
  const [jobOpenings, setJobOpenings] = useState<JobOpening[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadJobOpenings = async () => {
      setIsLoading(true);
      const jobs = await fetchJobOpenings();
      if (jobs && jobs.length > 0) {
        // Transform database jobs to match expected format
        const transformedJobs = jobs.map(job => ({
          id: job.id,
          title: job.title,
          department: job.department,
          location: job.location,
          type: job.type.charAt(0).toUpperCase() + job.type.slice(1).replace('-', '-'),
          salary: job.salary_range || 'Competitive',
          description: job.description,
          requirements: job.requirements || [],
          benefits: job.benefits || []
        }));
        setJobOpenings(transformedJobs);
      } else {
        setJobOpenings(fallbackJobs);
      }
      setIsLoading(false);
    };

    loadJobOpenings();
  }, []);
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
                <div key={job.id} className="elegant-card p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    <div className="flex-1">
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold text-primary mb-2">{job.title}</h3>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Briefcase className="w-4 h-4 mr-1" />
                            {job.department}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {job.location}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {job.type}
                          </div>
                          <div className="flex items-center">
                            <DollarSign className="w-4 h-4 mr-1" />
                            {job.salary}
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-6">{job.description}</p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-foreground mb-3">Requirements:</h4>
                          <ul className="space-y-2">
                            {job.requirements.map((req, index) => (
                              <li key={index} className="text-sm text-muted-foreground flex items-start">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3 mt-2 flex-shrink-0"></div>
                                {req}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-foreground mb-3">Benefits:</h4>
                          <ul className="space-y-2">
                            {job.benefits.map((benefit, index) => (
                              <li key={index} className="text-sm text-muted-foreground flex items-start">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3 mt-2 flex-shrink-0"></div>
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
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
    </div>
  );
};

export default Careers;