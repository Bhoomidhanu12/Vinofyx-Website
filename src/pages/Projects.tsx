
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { ExternalLink } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Define Project type
interface Project {
  id: number;
  title: string;
  description: string;
  image_url: string;
  category: string;
  link: string;
}

// Static projects data
const staticProjects: Project[] = [
  {
    id: 1,
    title: "EMUA Website",
    description: "A comprehensive platform for earning money using AI technologies and strategies.",
    image_url: "/earnwithai.jpg",
    category: "Website Development",
    link: "https://earningmoneyusingai.com"
  },
  {
    id: 2,
    title: "PYG Website",
    description: "Custom printing services for personalized gifts and merchandise.",
    image_url: "/gifts.jpg",
    category: "Website Development",
    link: "https://printyourgifts.in"
  },
  {
    id: 3,
    title: "Real Estate Website",
    description: "Professional real estate services and property listings platform.",
    image_url: "/realestate.jpg",
    category: "Website Development",
    link: "https://realestate.vinofyx.com"
  },
  {
    id: 4,
    title: "eBooks Website",
    description: "Collection of inspiring eBooks by Nalini J Shankar Muses.",
    image_url: "/storywebsite.jpg",
    category: "Website Development",
    link: "https://nalinijshnkrmuses.com/"
  },
   {
    id: 5,
    title: "Promotions Website",
    description: "Collection of inspiring eBooks by Nalini J Shankar Muses.",
    image_url: "/promotions.jpg",
    category: "Website Development",
    link: "http://Promotions.vinofyx.com"
  }
];

// Fetch projects from website/database
const fetchProjects = async (): Promise<Project[]> => {
  try {
    // Replace with actual API endpoint
    const response = await fetch('/api/projects');
    if (!response.ok) {
      throw new Error('Failed to fetch projects');
    }
    const data = await response.json();
    return data.length > 0 ? data : staticProjects;
  } catch (error) {
    console.error('Error fetching projects:', error);
    return staticProjects;
  }
};

const Projects = () => {
  
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const categories = ['All', 'Website Development', 'Digital Marketing', 'Branding & Design'];

  useEffect(() => {
    const loadProjects = async () => {
      setIsLoading(true);
      const fetchedProjects = await fetchProjects();
      setProjects(fetchedProjects);
      setIsLoading(false);
    };

    loadProjects();
  }, []);

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

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
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              Our Featured Projects
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover how we've helped businesses transform their digital presence and achieve remarkable results.
            </p>
          </div>
        </section>

        {/* Filter Section */}
        <section className="px-6 sm:px-8 mb-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    playClickSound();
                    setSelectedCategory(category);
                  }}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-accent'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="px-6 sm:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div key={project.id} className="elegant-card overflow-hidden group">
                  <div className="aspect-video bg-muted relative overflow-hidden">
                    <img
                      src={project.image_url}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-6">
                    <div className="mb-3">
                      <span className="text-sm text-primary font-medium">{project.category}</span>
                    </div>

                    <h3 className="text-xl font-bold text-primary mb-3">{project.title}</h3>
                    <p className="text-muted-foreground mb-6 line-clamp-2">{project.description}</p>

                    <div className="flex gap-3">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-light transition-colors inline-flex items-center justify-center"
                        onClick={playClickSound}
                      >
                        <ExternalLink className="w-4 h-4 inline mr-2" />
                        View Project
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 sm:px-8 mt-20 bg-gradient-subtle">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how we can help transform your business with our proven strategies.
            </p>
            <Link to="/services">
              <button 
                className="connect-button px-8 py-3 text-lg"
                onClick={playClickSound}
              >
                Get Started Today
              </button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
