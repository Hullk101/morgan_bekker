import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import { experiences } from '../data/portfolio-data';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">Work Experience</h2>
          <p className="text-xl text-muted-foreground">My professional journey</p>
          <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="lg:flex">
                    <div className="lg:w-1/3 bg-primary/10 p-6 flex flex-col justify-center">
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {experience.title}
                      </h3>
                      <p className="text-primary font-medium mb-1">{experience.company}</p>
                      <p className="text-sm text-muted-foreground">{experience.period}</p>
                    </div>
                    
                    <div className="lg:w-2/3 p-6">
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {experience.description}
                      </p>
                      
                      <div className="space-y-3">
                        <h4 className="font-medium text-foreground mb-3">Key Accomplishments:</h4>
                        {experience.accomplishments.map((accomplishment, idx) => (
                          <motion.div
                            key={idx}
                            className="flex items-start"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: (index * 0.2) + (idx * 0.1) }}
                            viewport={{ once: true }}
                          >
                            <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{accomplishment}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}