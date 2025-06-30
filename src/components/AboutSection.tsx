import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Download } from 'lucide-react';
import { portfolioSettings } from '../data/portfolio-data';

export default function AboutSection() {
  const settings = portfolioSettings;

  const handleDownloadResume = () => {
    // Generate a simple resume text
    const resumeContent = `
${settings.name}
${settings.title}

Contact Information:
Email: ${settings.email}
Phone: ${settings.phone}
Location: ${settings.location}
GitHub: ${settings.githubUrl}
LinkedIn: ${settings.linkedinUrl}

About:
${settings.description}

Skills:
- Frontend: React, TypeScript, Next.js, Vue.js, Tailwind CSS, JavaScript
- Backend: Node.js, Python, Express.js, PostgreSQL, MongoDB, GraphQL
- Tools: Git, Docker, AWS, Vercel, Figma, VS Code

Experience:
Senior Software Engineer at TechCorp Inc. (2022 - Present)
- Leading development of scalable web applications
- Architected real-time collaboration platform serving 10,000+ users
- Reduced application load time by 40% through optimization
- Led migration from monolithic to microservices architecture

Full Stack Developer at StartupXYZ (2020 - 2022)
- Built 5+ production applications using modern frameworks
- Integrated payment systems and third-party APIs
- Optimized database queries for 50% faster response times
- Collaborated with design team for pixel-perfect UI/UX

Junior Developer at WebSolutions Ltd. (2019 - 2020)
- Developed responsive websites for 20+ clients
- Learned React, Node.js, and database design
- Contributed to open-source projects
- Completed AWS certification
`;

    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${settings.name.replace(' ', '_')}_Resume.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground">Get to know me better</p>
          <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-card rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Personal Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="text-primary mr-4 h-5 w-5" />
                  <span className="text-muted-foreground">{settings.email}</span>
                </div>
                <div className="flex items-center">
                  <Phone className="text-primary mr-4 h-5 w-5" />
                  <span className="text-muted-foreground">{settings.phone}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="text-primary mr-4 h-5 w-5" />
                  <span className="text-muted-foreground">{settings.location}</span>
                </div>
              </div>

              <motion.button
                onClick={handleDownloadResume}
                className="mt-8 w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </motion.button>
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                {settings.description}
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                Hi, I'm Morgan - A RPA developer with a passion for making complex processes simple, efficient,
                and (dare I say) fun. With over a decade of experience across industries like e-commerce, banking, hospitality, 
                and government, I’ve built a reputation for translating tech-speak into human-speak and delivering automation that actually works.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                When I'm not doing my normal day-to-day, I am hard at work exploring and building AI Agents. I love  
                to come up with everyday problems and solve for them using protocals like OpenAi, Crewai or MCP.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                When I'm really not behind my computer, I will be
                surfing, hiking with my dog, powerlifting or travelling the world looking for my perfect wave.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center p-4 bg-card rounded-lg">
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg">
                  <div className="text-2xl font-bold text-primary">14+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}