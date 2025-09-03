
import { useToast } from "@/hooks/use-toast";

export const useApi = () => {
  const { toast } = useToast();

  const submitContactForm = async (formData: {
    name: string;
    email: string;
    company?: string;
    phone?: string;
    service: string;
    budget?: string;
    message: string;
    timeline?: string;
  }) => {
    try {
      const { data, error } = await supabase.functions.invoke('submit-contact', {
        body: formData,
      });

      if (error) {
        throw error;
      }

      toast({
        title: "Success!",
        description: "Your message has been sent successfully. We'll get back to you soon!",
      });

      return data;
    } catch (error: any) {
      console.error('Contact form submission error:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to submit form. Please try again.",
        variant: "destructive",
      });
      throw error;
    }
  };

  const subscribeNewsletter = async (email: string) => {
    try {
      const { data, error } = await supabase.functions.invoke('subscribe-newsletter', {
        body: { email },
      });

      if (error) {
        throw error;
      }

      toast({
        title: "Subscribed!",
        description: "Welcome to our newsletter! You'll receive the latest updates.",
      });

      return data;
    } catch (error: any) {
      console.error('Newsletter subscription error:', error);
      
      if (error.message?.includes('already subscribed')) {
        toast({
          title: "Already subscribed",
          description: "This email is already subscribed to our newsletter.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Error",
          description: error.message || "Failed to subscribe. Please try again.",
          variant: "destructive",
        });
      }
      throw error;
    }
  };

  const applyForJob = async (applicationData: {
    job_id: string;
    applicant_name: string;
    applicant_email: string;
    applicant_phone?: string;
    cover_letter?: string;
    resume_url?: string;
  }) => {
    try {
      const { data, error } = await supabase.functions.invoke('apply-job', {
        body: applicationData,
      });

      if (error) {
        throw error;
      }

      toast({
        title: "Application Sent!",
        description: "Your job application has been submitted successfully.",
      });

      return data;
    } catch (error: any) {
      console.error('Job application error:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to submit application. Please try again.",
        variant: "destructive",
      });
      throw error;
    }
  };

  const fetchBlogPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false });

      if (error) {
        throw error;
      }

      return data;
    } catch (error: any) {
      console.error('Error fetching blog posts:', error);
      toast({
        title: "Error",
        description: "Failed to load blog posts. Please try again.",
        variant: "destructive",
      });
      return [];
    }
  };

  const fetchProjects = async () => {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        throw error;
      }

      return data;
    } catch (error: any) {
      console.error('Error fetching projects:', error);
      toast({
        title: "Error",
        description: "Failed to load projects. Please try again.",
        variant: "destructive",
      });
      return [];
    }
  };

  const fetchJobOpenings = async () => {
    try {
      const { data, error } = await supabase
        .from('job_openings')
        .select('*')
        .eq('active', true)
        .order('created_at', { ascending: false });

      if (error) {
        throw error;
      }

      return data;
    } catch (error: any) {
      console.error('Error fetching job openings:', error);
      toast({
        title: "Error",
        description: "Failed to load job openings. Please try again.",
        variant: "destructive",
      });
      return [];
    }
  };

  return {
    submitContactForm,
    subscribeNewsletter,
    applyForJob,
    fetchBlogPosts,
    fetchProjects,
    fetchJobOpenings,
  };
};