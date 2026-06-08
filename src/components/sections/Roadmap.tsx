import React from 'react';
import { motion } from 'framer-motion';
import { Flag, Rocket, Globe } from 'lucide-react';
const phases = [
{
  title: 'Near-Term Improvements',
  icon: Flag,
  color: 'text-peach-mid',
  items: [
  'Improve AR scene compatibility',
  'Improve Color-to-AR accuracy',
  'Add more geological scenes',
  'Improve narration quality',
  'Refine quiz difficulty balancing']

},
{
  title: 'Mid-Term Improvements',
  icon: Rocket,
  color: 'text-blush-mid',
  items: [
  'Add Sinhala, Tamil, and English narration',
  'Add stronger analytics dashboard',
  'Add teacher mode and classroom worksheet support',
  'Add more prehistoric illustrations']

},
{
  title: 'Long-Term Vision',
  icon: Globe,
  color: 'text-lavender-mid',
  items: [
  'Deploy in real museum environments',
  'Expand to other museum galleries',
  'Build a full museum AR learning platform',
  'Partner with schools, tourism bodies, and cultural institutions',
  'Conduct larger-scale visitor evaluation']

}];

export const Roadmap = () => {
  return (
    <section
      id="roadmap"
      className="section-pad bg-gradient-roadmap text-white relative overflow-hidden">
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-[28rem] h-[28rem] bg-charcoal/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="mb-16 text-center">
          <motion.h2
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            className="text-4xl md:text-5xl font-heading font-bold mb-4 drop-shadow-sm">
            
            Future Roadmap
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {phases.map((phase, index) =>
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 30
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: index * 0.2
            }}
            className="bg-white/90 backdrop-blur-md rounded-[2.5rem] p-8 border border-white shadow-xl hover:-translate-y-2 transition-transform duration-300">
            
              <div
              className={`w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-gray-100 ${phase.color}`}>
              
                <phase.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-charcoal">
                {phase.title}
              </h3>
              <ul className="space-y-4">
                {phase.items.map((item, i) =>
              <li
                key={i}
                className="flex items-start text-charcoal/80 text-sm font-medium">
                
                    <span
                  className={`mr-3 mt-1.5 w-2 h-2 rounded-full shrink-0 ${phase.color.replace('text-', 'bg-')}`}>
                </span>
                    {item}
                  </li>
              )}
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

};