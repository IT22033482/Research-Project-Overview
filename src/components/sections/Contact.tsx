import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader, Card, Button } from '../ui/Shared';
import { Mail, Building, Linkedin, Github, MessageSquare } from 'lucide-react';
import {
  mailtoResearcher,
  RESEARCHER_EMAIL,
  LINKEDIN_PROFILE_URL,
  SLIIT_WEBSITE_URL
} from '../../data/contact';

export const Contact = () => {
  return (
    <section
      id="contact"
      className="section-pad bg-lavender-light/25 relative overflow-hidden">
      
      <div className="absolute top-0 right-0 w-96 h-96 bg-lavender-light rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-peach-light rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <SectionHeader
          title="Ready to Bring Geological History to Life?"
          subtitle="This AR learning concept can support museums, schools, exhibitions, and cultural tourism spaces that want to make Earth’s history more interactive, accessible, and memorable." />
        

        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
            {
              icon: Mail,
              label: 'Email',
              value: RESEARCHER_EMAIL,
              href: mailtoResearcher,
              color: 'text-peach-deep',
              bg: 'bg-peach-light'
            },
            {
              icon: Building,
              label: 'Institution',
              value: 'SLIIT / Department',
              href: SLIIT_WEBSITE_URL,
              external: true,
              color: 'text-mint-mid',
              bg: 'bg-mint-light'
            },
            {
              icon: Linkedin,
              label: 'LinkedIn',
              value: 'ruwani-pradeepa',
              href: LINKEDIN_PROFILE_URL,
              external: true,
              color: 'text-sky-mid',
              bg: 'bg-sky-light'
            },
            {
              icon: Github,
              label: 'GitHub',
              value: 'Repository Link',
              color: 'text-lavender-mid',
              bg: 'bg-lavender-light'
            }].
            map((item, i) => {
            const card = (
              <Card
                className={`text-center p-8 flex flex-col items-center justify-center group hover:border-transparent ${item.href ? 'cursor-pointer' : ''}`}>
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    rotate: 10
                  }}
                  className={`w-14 h-14 ${item.bg} rounded-2xl flex items-center justify-center ${item.color} mb-4 shadow-sm group-hover:shadow-md transition-all`}>
                  <item.icon size={24} />
                </motion.div>
                <p className="text-xs text-charcoal/50 mb-2 font-bold uppercase tracking-wider">
                  {item.label}
                </p>
                <p className="text-sm font-bold text-charcoal break-all">{item.value}</p>
              </Card>
            );

            return item.href ? (
              <a
                key={i}
                href={item.href}
                className="block no-underline text-inherit"
                {...(item.external
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}>
                {card}
              </a>
            ) : (
              <div key={i}>{card}</div>
            );
            })}
          </div>

          <div className="flex flex-wrap justify-center gap-5">
            <Button href={mailtoResearcher} variant="primary" className="shadow-lg px-8 py-4 text-lg">
              <MessageSquare className="w-6 h-6 mr-3" /> Contact Researcher
            </Button>
            <Button
              variant="secondary"
              className="bg-white border border-peach-light px-8 py-4 text-lg">
              
              Download Project Summary
            </Button>
          </div>
        </div>
      </div>
    </section>);

};
