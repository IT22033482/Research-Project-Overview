import React from 'react';
import { motion } from 'framer-motion';

type LoadingScreenProps = {
  progress: number;
};

export const LoadingScreen = ({ progress }: LoadingScreenProps) => (
  <motion.div
    className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-cream px-6"
    initial={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.45, ease: 'easeInOut' }}>
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,141,0,0.08)_0%,_transparent_55%)] pointer-events-none" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(190,173,250,0.1)_0%,_transparent_50%)] pointer-events-none" />

    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative z-10 flex flex-col items-center text-center max-w-md">
      <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-[1.75rem] bg-white shadow-float ring-4 ring-peach-light/60">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'linear' }}
          className="h-10 w-10 rounded-full border-[3px] border-peach-light border-t-peach-mid"
        />
      </div>

      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-peach-deep">
        Research Project Showcase
      </p>
      <h1 className="font-heading text-2xl font-bold text-charcoal md:text-3xl">
        AR Geological History
      </h1>
      <p className="mt-3 text-sm text-charcoal/60">
        Loading interactive experience…
      </p>

      <div className="mt-10 h-2 w-56 overflow-hidden rounded-full bg-peach-light/70 md:w-72">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-peach-mid to-lavender-mid"
          initial={{ width: '0%' }}
          animate={{ width: `${Math.max(progress, 8)}%` }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        />
      </div>
      <p className="mt-3 text-xs font-medium text-charcoal/45">{progress}%</p>
    </motion.div>
  </motion.div>
);
