import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/Shared';
import {
  QrCode,
  Search,
  Headphones,
  Palette,
  CheckCircle,
  TrendingUp,
  ArrowRight,
  BoxIcon } from
'lucide-react';
const steps = [
{
  title: 'Scan',
  icon: QrCode,
  color: 'text-peach-deep',
  bg: 'bg-peach-light',
  border: 'border-peach-mid'
},
{
  title: 'Explore',
  icon: Search,
  color: 'text-butter-mid',
  bg: 'bg-butter-light',
  border: 'border-butter-mid'
},
{
  title: 'Listen',
  icon: Headphones,
  color: 'text-mint-mid',
  bg: 'bg-mint-light',
  border: 'border-mint-mid'
},
{
  title: 'Color',
  icon: Palette,
  color: 'text-sky-mid',
  bg: 'bg-sky-light',
  border: 'border-sky-mid'
},
{
  title: 'View in AR',
  icon: BoxIcon,
  color: 'text-lavender-mid',
  bg: 'bg-lavender-light',
  border: 'border-lavender-mid'
},
{
  title: 'Answer Quiz',
  icon: CheckCircle,
  color: 'text-blush-mid',
  bg: 'bg-blush-light',
  border: 'border-blush-mid'
},
{
  title: 'See Progress',
  icon: TrendingUp,
  color: 'text-peach-deep',
  bg: 'bg-peach-light',
  border: 'border-peach-mid'
}];

export const Solution = () => {
  return (
    <section id="solution" className="section-pad bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <SectionHeader title="The Proposed AR Learning Experience" />

        <div className="max-w-4xl mx-auto mb-20 text-center">
          <p className="text-lg text-charcoal/70 leading-relaxed mb-8">
            This system turns the museum visit into an interactive learning
            journey. Visitors scan a QR code or image marker near an exhibit,
            open an AR learning scene, explore 3D geological content, listen to
            AI-supported narration, complete a digital coloring activity, and
            answer quizzes to reflect on what they learned.
          </p>
          <motion.div
            initial={{
              scale: 0.95,
              opacity: 0
            }}
            whileInView={{
              scale: 1,
              opacity: 1
            }}
            viewport={{
              once: true
            }}
            className="text-lg font-medium text-charcoal bg-gradient-pastel p-[2px] rounded-3xl inline-block shadow-lg">
            
            <div className="bg-white py-5 px-8 rounded-[22px]">
              Instead of only reading about Earth’s history, visitors can see
              ancient environments, interact with prehistoric life, and connect
              fossils with the story of the era they belong to.
            </div>
          </motion.div>
        </div>

        {/* Workflow visualization */}
        <div className="relative max-w-6xl mx-auto">
          {/* Connecting Line for Desktop */}
          <div className="hidden lg:block absolute top-10 left-10 right-10 h-1.5 bg-gradient-to-r from-peach-light via-mint-light to-peach-light rounded-full opacity-50"></div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 relative z-10">
            {steps.map((step, index) =>
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
                delay: index * 0.1,
                type: 'spring',
                stiffness: 100
              }}
              className="flex flex-col items-center group">
              
                <motion.div
                whileHover={{
                  y: -10,
                  scale: 1.1
                }}
                className={`w-20 h-20 ${step.bg} rounded-full shadow-md border-4 border-white flex items-center justify-center ${step.color} mb-4 relative z-10`}>
                
                  <step.icon size={32} />
                </motion.div>
                <span className="font-heading font-bold text-charcoal text-base text-center bg-white px-3 py-1 rounded-full shadow-sm">
                  {step.title}
                </span>

                {/* Mobile arrow indicator */}
                {index < steps.length - 1 &&
              <div className="lg:hidden mt-4 text-charcoal/20">
                    <ArrowRight size={24} className="rotate-90" />
                  </div>
              }
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>);

};