
import Navbar from '@/components/Navbar';
import { useApi } from '@/hooks/useApi';
import { Calendar, ExternalLink } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Static fallback data


const Projects = () => {
  const { fetchProjects } = useApi();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [projects, setProjects] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const categories = ['All', 'Website Development', 'Digital Marketing', 'Branding & Design'];

  useEffect(() => {
    const loadProjects = async () => {
      setIsLoading(true);
      const fetchedProjects = await fetchProjects();
      if (fetchedProjects && fetchedProjects.length > 0) {
        // Transform database projects to match expected format
        const transformedProjects = fetchedProjects.map(project => ({
          id: project.id,
          title: project.title,
          description: project.description,
          image: project.image_url || '/lovable-uploads/2681d1e1-03a3-496d-82f8-b4dbb55bc8bc.png',
          category: project.category,
          technologies: project.technologies || [],
          date: project.date_completed ? new Date(project.date_completed).getFullYear().toString() : '2024',
          client: project.client || 'Confidential',
          results: project.results || [],
          status: project.status === 'completed' ? 'Completed' : 'Ongoing'
        }));
        setProjects(transformedProjects);
      } else {
        setProjects(fallbackProjects);
      }
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
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === 'Completed' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-primary font-medium">{project.category}</span>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-1" />
                        {project.date}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-primary mb-3">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
                    
                    <div className="mb-4">
                      <p className="text-sm font-medium text-foreground mb-2">Client: {project.client}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech, index) => (
                          <span key={index} className="px-2 py-1 bg-muted text-xs rounded-md">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-foreground mb-2">Key Results:</h4>
                      <ul className="space-y-1">
                        {project.results.slice(0, 2).map((result, index) => (
                          <li key={index} className="text-sm text-muted-foreground flex items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2 mt-2 flex-shrink-0"></div>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex gap-3">
                      <button 
                        className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-light transition-colors"
                        onClick={playClickSound}
                      >
                        <ExternalLink className="w-4 h-4 inline mr-2" />
                        View Case Study
                      </button>
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
    </div>
  );
};

export default Projects;
