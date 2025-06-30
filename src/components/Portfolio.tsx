import { motion } from 'framer-motion';
import Navigation from './Navigation';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import SkillsSection from './SkillsSection';
import ExperienceSection from './ExperienceSection';
import ChatbotSection from './ChatbotSection';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ChatbotSection />
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-background py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm">© 2025 Alex Johnson. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a 
                href="https://github.com/alexjohnson" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-background/80 hover:text-background transition-colors"
              >
                <span className="sr-only">GitHub</span>
                GitHub
              </a>
              <a 
                href="https://linkedin.com/in/alexjohnson" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-background/80 hover:text-background transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}