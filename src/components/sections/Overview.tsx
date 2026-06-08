import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader, Card } from '../ui/Shared';
import { Layers, QrCode, Palette, CheckSquare, Smartphone } from 'lucide-react';
const AnimatedCounter = ({
  value,
  label,
  icon: Icon,
  delay,
  colorClass,
  bgClass







}: {value: string | number;label: string;icon: any;delay: number;colorClass: string;bgClass: string;}) => {
  return (
    <Card
      delay={delay}
      className="flex flex-col items-center text-center group">
      
      <motion.div
        whileHover={{
          rotate: 360
        }}
        transition={{
          duration: 0.5
        }}
        className={`w-14 h-14 ${bgClass} rounded-2xl flex items-center justify-center ${colorClass} mb-4 shadow-sm group-hover:shadow-md transition-shadow`}>
        
        <Icon size={28} />
      </motion.div>
      <h4 className="text-3xl font-heading font-bold text-charcoal mb-2">
        {value}
      </h4>
      <p className="text-sm text-charcoal/70 font-medium">{label}</p>
    </Card>);

};
export const Overview = () => {
  return (
    <section id="overview" className="section-pad bg-white relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-peach-light/20 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <SectionHeader title="Project Overview" />

        <div className="mb-16">
          <motion.div
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
            className="bg-gradient-to-br from-cream to-peach-light/30 rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-peach-light/50 text-center relative overflow-hidden">
            
            <div className="absolute top-0 left-0 w-32 h-32 bg-butter-light rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-sky-light rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-1/2 translate-y-1/2"></div>

            <p className="text-lg md:text-xl text-charcoal/80 leading-relaxed relative z-10 font-medium">
              This research component focuses on improving how museum visitors
              understand Earth’s geological history. Traditional museum displays
              often present fossils, rocks, minerals, and geological eras
              through static objects and short captions. This project introduces
              a mobile AR learning flow where visitors scan, view, listen,
              interact, color, and answer quizzes in a guided sequence.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <AnimatedCounter
            value="3"
            label="Geological Eras"
            icon={Layers}
            delay={0.1}
            colorClass="text-peach-deep"
            bgClass="bg-peach-light" />
          
          <AnimatedCounter
            value="QR"
            label="Image Marker Access"
            icon={QrCode}
            delay={0.2}
            colorClass="text-mint-mid"
            bgClass="bg-mint-light" />
          
          <AnimatedCounter
            value="AR"
            label="Digital Color-to-AR Activity"
            icon={Palette}
            delay={0.3}
            colorClass="text-lavender-mid"
            bgClass="bg-lavender-light" />
          
          <AnimatedCounter
            value="Quiz"
            label="Based Learning Evaluation"
            icon={CheckSquare}
            delay={0.4}
            colorClass="text-sky-mid"
            bgClass="bg-sky-light" />
          
          <AnimatedCounter
            value="Mobile"
            label="First low-cost deployment"
            icon={Smartphone}
            delay={0.5}
            colorClass="text-blush-mid"
            bgClass="bg-blush-light" />
          
        </div>
      </div>
    </section>);

};