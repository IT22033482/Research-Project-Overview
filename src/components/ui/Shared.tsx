import React from 'react';
import { motion } from 'framer-motion';

export const Button = ({
  children,
  variant = 'primary',
  className = '',
  onClick,
  href,
  target,
  rel
}: {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
}) => {
  const baseStyle =
    'inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0';
  const variants = {
    primary: 'bg-peach-mid text-white shadow-float hover:bg-peach-deep hover:shadow-lg',
    secondary:
      'bg-peach-light text-peach-deep hover:bg-peach-mid hover:text-white shadow-sm',
    outline:
      'border-2 border-peach-mid text-peach-deep hover:bg-peach-light bg-white/80'
  };
  const combinedClassName = `${baseStyle} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={combinedClassName}
        onClick={onClick}
        target={target}
        rel={rel}>
        {children}
      </a>);
  }

  return (
    <button onClick={onClick} className={combinedClassName}>
      {children}
    </button>);
};

export const Badge = ({
  children,
  className = ''
}: {
  children: React.ReactNode;
  className?: string;
}) =>
<span className={`inline-flex items-center justify-center ${className}`}>
  {children}
</span>;

export const SectionHeader = ({
  title,
  subtitle,
  centered = true
}: {
  title: string;
  subtitle?: string;
  centered?: boolean;
}) =>
<div className={`mb-14 md:mb-16 ${centered ? 'text-center' : 'text-left'}`}>
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={centered ? 'flex flex-col items-center' : ''}>
    
    <span className="inline-block w-12 h-1 rounded-full bg-peach-mid mb-5" />
    <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-heading font-bold text-charcoal mb-4 leading-tight">
      {title}
    </h2>
  </motion.div>
  {subtitle &&
  <motion.p
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.08 }}
    className={`text-base md:text-lg text-charcoal/70 max-w-2xl leading-relaxed ${centered ? 'mx-auto' : ''}`}>
    
    {subtitle}
  </motion.p>
  }
</div>;

export const Card = ({
  children,
  className = '',
  delay = 0
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) =>
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: '-40px' }}
  transition={{ delay, duration: 0.45 }}
  whileHover={{ y: -4 }}
  className={`bg-white rounded-3xl p-6 md:p-7 shadow-card border border-peach-light/20 hover:shadow-soft hover:border-peach-light/50 transition-all duration-300 ${className}`}>
  
  {children}
</motion.div>;

export const PhoneMockup = ({
  children,
  className = ''
}: {
  children: React.ReactNode;
  className?: string;
}) =>
<div
  className={`relative w-[min(100%,280px)] sm:w-[300px] md:w-[320px] aspect-[800/1340] rounded-[2.5rem] shadow-2xl border-[6px] border-charcoal overflow-hidden bg-charcoal shrink-0 ring-4 ring-white/50 ${className}`}>
  
  {children}
</div>;

export const BlobBackground = () =>
<div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
  <motion.div
    animate={{ y: [0, -24, 0], x: [0, 16, 0], scale: [1, 1.08, 1] }}
    transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
    className="absolute top-10 -left-20 w-[420px] h-[420px] bg-peach-light rounded-full mix-blend-multiply filter blur-[80px] opacity-50" />
  
  <motion.div
    animate={{ y: [0, 32, 0], x: [0, -24, 0], scale: [1, 1.12, 1] }}
    transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
    className="absolute bottom-10 -right-20 w-[500px] h-[500px] bg-lavender-light rounded-full mix-blend-multiply filter blur-[80px] opacity-50" />
  
  <motion.div
    animate={{ y: [0, -16, 0], scale: [1, 1.06, 1] }}
    transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] bg-butter-light rounded-full mix-blend-multiply filter blur-[80px] opacity-40" />
</div>;
