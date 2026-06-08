import React from 'react';
import { SectionHeader, Card, Button } from '../ui/Shared';
import {
  FileText,
  File,
  Presentation,
  Code,
  PlaySquare,
  Github } from
'lucide-react';
const resources = [
{
  title: 'Research Abstract PDF',
  icon: FileText,
  desc: 'Summary of the research component.',
  color: 'text-peach-deep',
  bg: 'bg-peach-light'
},
{
  title: 'Full Thesis PDF',
  icon: File,
  desc: 'Complete academic documentation.',
  color: 'text-mint-mid',
  bg: 'bg-mint-light'
},
{
  title: 'Presentation Slides',
  icon: Presentation,
  desc: 'Final evaluation slide deck.',
  color: 'text-lavender-mid',
  bg: 'bg-lavender-light'
},
{
  title: 'Technical Documentation',
  icon: Code,
  desc: 'System architecture and setup.',
  color: 'text-butter-mid',
  bg: 'bg-butter-light'
},
{
  title: 'Demo Video',
  icon: PlaySquare,
  desc: 'Full walkthrough of the prototype.',
  color: 'text-peach-deep',
  bg: 'bg-peach-light'
},
{
  title: 'GitHub Repository',
  icon: Github,
  desc: 'Source code and assets.',
  color: 'text-charcoal',
  bg: 'bg-gray-200'
}];

export const Downloads = () => {
  return (
    <section id="downloads" className="section-pad bg-cream/50">
      <div className="container mx-auto px-6 lg:px-12">
        <SectionHeader title="Download / Resource Repository" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {resources.map((res, i) =>
          <Card
            key={i}
            delay={i * 0.05}
            className="flex flex-col h-full group hover:border-transparent">
            
              <div className="flex items-start mb-6">
                <div
                className={`w-12 h-12 ${res.bg} rounded-xl flex items-center justify-center ${res.color} mr-4 shrink-0 group-hover:scale-110 transition-transform`}>
                
                  <res.icon size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-charcoal text-lg">
                    {res.title}
                  </h4>
                  <p className="text-sm text-charcoal/60 mt-1 font-medium">
                    {res.desc}
                  </p>
                </div>
              </div>
              <div className="mt-auto pt-4 border-t border-cream">
                <Button
                variant="secondary"
                className="w-full text-sm py-2.5 bg-cream text-charcoal hover:bg-peach-mid hover:text-white border-none">
                
                  Download / Open
                </Button>
              </div>
            </Card>
          )}
        </div>
      </div>
    </section>);

};