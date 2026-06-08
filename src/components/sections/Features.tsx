import React, { Children } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader, Card } from '../ui/Shared';
import {
  QrCode,
  BookOpen,
  Mic,
  Palette,
  CheckSquare,
  Smartphone,
  BoxIcon } from
'lucide-react';
const features = [
{
  title: 'QR-Triggered AR Access',
  icon: QrCode,
  desc: 'Visitors can scan QR codes or image markers placed near museum exhibits to open AR learning content quickly.',
  color: 'text-peach-deep',
  bg: 'bg-peach-light',
  hoverBg: 'hover:bg-peach-mid'
},
{
  title: 'Era-Based AR Storytelling',
  icon: BookOpen,
  desc: 'The experience is organized around the Paleozoic, Mesozoic, and Cenozoic eras, helping visitors follow Earth’s history as a connected timeline.',
  color: 'text-mint-mid',
  bg: 'bg-mint-light',
  hoverBg: 'hover:bg-[#6BC48A]'
},
{
  title: '3D Visualizations and Animations',
  icon: BoxIcon,
  desc: 'Prehistoric animals, geological environments, and visual explanations help make deep-time concepts easier to understand.',
  color: 'text-lavender-mid',
  bg: 'bg-lavender-light',
  hoverBg: 'hover:bg-lavender-mid'
},
{
  title: 'AI-Supported Narration',
  icon: Mic,
  desc: 'Short guided narration and contextual explanations support personalized learning and reduce the difficulty of scientific terms.',
  color: 'text-sky-mid',
  bg: 'bg-sky-light',
  hoverBg: 'hover:bg-sky-mid'
},
{
  title: 'Digital Color-to-AR',
  icon: Palette,
  desc: 'Children can digitally color prehistoric illustrations and then view their colored creation as an animated AR output.',
  color: 'text-blush-mid',
  bg: 'bg-blush-light',
  hoverBg: 'hover:bg-blush-mid'
},
{
  title: 'Knowledge Check Quizzes',
  icon: CheckSquare,
  desc: 'Era-based quizzes and learning feedback help measure understanding before and after the experience.',
  color: 'text-butter-mid',
  bg: 'bg-butter-light',
  hoverBg: 'hover:bg-[#D9B44A]'
},
{
  title: 'Mobile-First and Low-Cost',
  icon: Smartphone,
  desc: 'The system is designed for smartphones and tablets, making it suitable for museums, schools, science exhibitions, and resource-constrained learning environments.',
  color: 'text-peach-deep',
  bg: 'bg-peach-light',
  hoverBg: 'hover:bg-peach-mid'
}];

export const Features = () => {
  return (
    <section id="features" className="section-pad bg-cream">
      <div className="container mx-auto px-6 lg:px-12">
        <SectionHeader title="Key Features" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) =>
          <Card
            key={index}
            delay={index * 0.1}
            className={`group ${feature.hoverBg} hover:text-white transition-all duration-500 ${index === 6 ? 'md:col-span-2 lg:col-span-3 xl:col-span-1' : ''}`}>
            
              <div
              className={`w-14 h-14 ${feature.bg} rounded-2xl flex items-center justify-center ${feature.color} mb-6 group-hover:bg-white/20 group-hover:text-white transition-colors duration-500`}>
              
                <feature.icon size={28} />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3 text-charcoal group-hover:text-white transition-colors duration-500">
                {feature.title}
              </h3>
              <p className="text-charcoal/70 group-hover:text-white/90 leading-relaxed text-sm transition-colors duration-500">
                {feature.desc}
              </p>
            </Card>
          )}
        </div>
      </div>
    </section>);

};