import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/Shared';
import {
  QrCode,
  PlayCircle,
  BookOpen,
  Palette,
  CheckSquare
} from 'lucide-react';
import { publicAsset } from '../../utils/publicAsset';

const learningActivities = [
  {
    title: 'Scan and See in AR',
    subtitle: 'With AI voice narration',
    icon: QrCode
  },
  {
    title: 'Watch and Learn',
    subtitle: 'Video demonstration of the era',
    icon: PlayCircle
  },
  {
    title: 'Read Article and Learn',
    subtitle: 'Era-based reading content',
    icon: BookOpen
  },
  {
    title: 'Color to AR',
    subtitle: 'Digital coloring brought to life',
    icon: Palette
  },
  {
    title: 'Quizzes and Knowledge Check',
    subtitle: 'Test understanding after learning',
    icon: CheckSquare
  }
] as const;
const eraImages = {
  paleozoic: publicAsset('/app-ui/paleozoic.png'),
  mesozoic: publicAsset('/app-ui/mesozoic.png'),
  cenozoic: publicAsset('/app-ui/cenozoic.png')
} as const;

const eras = [
{
  name: 'Paleozoic Era',
  desc: 'Early marine life, changing land environments, and the foundation of complex life.',
  keywords: ['Marine Life', 'Early Plants', 'Trilobites'],
  color: 'border-mint-mid',
  badgeColor: 'bg-mint-light/80 text-charcoal',
  image: eraImages.paleozoic
},
{
  name: 'Mesozoic Era',
  desc: 'Prehistoric species, dinosaurs, climate conditions, and dramatic ecosystem changes.',
  keywords: ['Dinosaurs', 'Reptiles', 'Pangea Breakup'],
  color: 'border-peach-mid',
  badgeColor: 'bg-peach-light/80 text-charcoal',
  image: eraImages.mesozoic
},
{
  name: 'Cenozoic Era',
  desc: 'Mammals, recent environmental changes, and connections to present-day biodiversity.',
  keywords: ['Mammals', 'Ice Age', 'Human Ancestors'],
  color: 'border-lavender-mid',
  badgeColor: 'bg-lavender-light/80 text-charcoal',
  image: eraImages.cenozoic
}];

export const Timeline = () => {
  return (
    <section id="timeline" className="section-pad bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <SectionHeader title="Explore Earth Through Three Eras" />

        <div className="relative max-w-6xl mx-auto mt-12 pt-3">
          <div className="hidden lg:block absolute top-3 left-8 right-8 h-0.5 bg-gradient-to-r from-mint-mid via-peach-mid to-lavender-mid opacity-30 rounded-full z-0" />

          <div className="grid lg:grid-cols-3 gap-10 lg:gap-8 relative z-10">
            {eras.map((era, index) =>
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              className="relative group">

              <div className={`relative bg-white rounded-[2rem] p-6 shadow-card border ${era.color} hover:shadow-soft transition-all duration-300 h-full flex flex-col`}>
                <div
                  className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white border-[3px] ${era.color} rounded-full z-20 shadow-sm group-hover:scale-125 transition-transform`} />
                <div className="w-full aspect-[4/3] rounded-2xl mb-5 overflow-hidden relative bg-cream">
                  <img
                    src={era.image}
                    alt={era.name}
                    className="w-full h-full object-cover object-center group-hover:scale-[1.04] transition-transform duration-500" />
                </div>

                <h3 className="text-xl font-heading font-bold text-charcoal mb-2">
                  {era.name}
                </h3>
                <p className="text-charcoal/70 mb-5 text-sm leading-relaxed flex-1">
                  {era.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {era.keywords.map((kw, i) =>
                  <span
                    key={i}
                    className={`text-xs font-semibold px-3 py-1 rounded-lg ${era.badgeColor}`}>
                    
                    {kw}
                  </span>
                  )}
                </div>

                <div className="border-t border-charcoal/10 pt-4 mt-auto">
                  <p className="text-xs font-bold uppercase tracking-wider text-charcoal/45 mb-3">
                    Learn through
                  </p>
                  <ul className="space-y-2.5">
                    {learningActivities.map((activity) => {
                      const Icon = activity.icon;
                      return (
                        <li
                          key={activity.title}
                          className="flex items-start gap-2.5 text-left">
                          
                          <span className="shrink-0 w-7 h-7 rounded-lg bg-cream flex items-center justify-center text-charcoal/70 mt-0.5">
                            <Icon className="w-3.5 h-3.5" />
                          </span>
                          <span className="min-w-0">
                            <span className="block text-sm font-semibold text-charcoal leading-snug">
                              {activity.title}
                            </span>
                            <span className="block text-xs text-charcoal/55 leading-snug mt-0.5">
                              {activity.subtitle}
                            </span>
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>);
};
