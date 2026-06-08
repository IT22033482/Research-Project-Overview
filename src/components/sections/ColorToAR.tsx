import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/Shared';
import { Palette, Smartphone, Sparkles } from 'lucide-react';
import { appUiImages } from '../../data/appUiImages';

const flowPanels = [
  {
    label: 'Uncolored template',
    img: appUiImages.colorToArColoring,
    ring: 'ring-peach-light'
  },
  {
    label: 'Digitally colored',
    img: appUiImages.colorToArColoredArt,
    ring: 'ring-lavender-light'
  },
  {
    label: 'AR view active',
    img: appUiImages.colorToArCamera,
    ring: 'ring-mint-light'
  }
];

export const ColorToAR = () => {
  return (
    <section
      id="color-to-ar"
      className="section-pad bg-gradient-pastel text-charcoal overflow-hidden relative">
      
      {/* Decorative background blobs for extra vibrancy */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity
          }}
          className="absolute -top-24 -left-24 w-96 h-96 bg-white/40 rounded-full mix-blend-overlay filter blur-3xl" />
        
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, -90, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity
          }}
          className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-peach-mid/20 rounded-full mix-blend-multiply filter blur-3xl" />
        
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16">
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
            className="text-4xl md:text-5xl font-heading font-bold mb-6 text-charcoal drop-shadow-sm">
            
            Color It. Bring It to Life.
          </motion.h2>
          <motion.p
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
            transition={{
              delay: 0.1
            }}
            className="text-xl text-charcoal/80 max-w-3xl mx-auto leading-relaxed font-medium">
            
            The Color-to-AR activity adds creativity to museum learning. Users
            select a prehistoric illustration, color it digitally on a phone or
            tablet, and view the colored output as an animated AR experience.
          </motion.p>
        </div>

        {/* 3 Steps */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-20">
          {[
          {
            step: '1',
            title: 'Choose a prehistoric illustration',
            icon: Smartphone,
            color: 'text-peach-deep'
          },
          {
            step: '2',
            title: 'Color digitally',
            icon: Palette,
            color: 'text-lavender-mid'
          },
          {
            step: '3',
            title: 'Watch it appear in AR',
            icon: Sparkles,
            color: 'text-mint-mid'
          }].
          map((item, i) =>
          <motion.div
            key={i}
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
            transition={{
              delay: i * 0.1
            }}
            className="flex flex-col items-center text-center group">
            
              <motion.div
              whileHover={{
                y: -5,
                scale: 1.1
              }}
              className={`w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl font-bold mb-4 shadow-xl border border-white/50 ${item.color}`}>
              
                <item.icon size={32} />
              </motion.div>
              <h4 className="text-lg font-bold text-charcoal">{item.title}</h4>
            </motion.div>
          )}
        </div>

        <div className="bg-white/50 backdrop-blur-xl rounded-[2.5rem] p-6 md:p-10 border border-white/70 shadow-soft max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 items-end">
            {flowPanels.map((panel, i) =>
            <motion.div
              key={panel.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center">
              
              {i > 0 &&
              <div className="hidden md:flex w-8 h-8 bg-peach-mid rounded-full items-center justify-center text-white text-sm font-bold mb-4 -mt-2 shadow-md">
                →
              </div>
              }
              <div className={`w-full max-w-[220px] aspect-[800/1340] rounded-[1.75rem] overflow-hidden border-[5px] border-charcoal shadow-lg ring-4 ${panel.ring} bg-charcoal`}>
                <img
                  src={panel.img}
                  alt={panel.label}
                  className="w-full h-full object-contain" />
                
              </div>
              <p className="mt-4 text-sm font-semibold text-charcoal/80 text-center">{panel.label}</p>
            </motion.div>
            )}
          </div>
        </div>

        <div className="mt-12 text-center max-w-2xl mx-auto">
          <p className="text-charcoal/70 text-sm font-medium bg-white/40 backdrop-blur-sm py-3 px-6 rounded-full inline-block border border-white/50 shadow-sm">
            “This feature is especially designed to support children’s
            creativity, attention, and curiosity while keeping the activity
            connected to geological learning.”
          </p>
        </div>
      </div>
    </section>);

};