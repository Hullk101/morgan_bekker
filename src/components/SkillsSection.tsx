import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { skills } from '../data/portfolio-data';

export default function SkillsSection() {
  const skillCategories = {
    Core_Competencies: skills.filter(skill => skill.category === 'Core Competencies'),
    Technical: skills.filter(skill => skill.category === 'Technical'),
    tools: skills.filter(skill => skill.category === 'tools'),
  };

  const categoryTitles = {
    Core_Competencies: 'Core Competencies',
    Technical: 'Technical',
    tools: 'Tools & Technologies',
  };

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">Skills & Technologies</h2>
          <p className="text-xl text-muted-foreground">Technologies I work with</p>
          <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(skillCategories).map(([category, categorySkills], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
                    {categoryTitles[category as keyof typeof categoryTitles]}
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {categorySkills.map((skill, index) => (
                      <motion.div
                        key={skill.id}
                        className="flex flex-col items-center p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: (categoryIndex * 0.2) + (index * 0.1) }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="text-2xl mb-2">{skill.icon}</div>
                        <span className="text-sm text-center text-foreground font-medium">
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
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