import React from 'react';
import { SectionHeader, Card, Button } from '../ui/Shared';
import { downloadResources } from '../../data/downloadResources';

export const Downloads = () => {
  return (
    <section id="downloads" className="section-pad bg-cream/50">
      <div className="container mx-auto px-6 lg:px-12">
        <SectionHeader title="Download / Resource Repository" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {downloadResources.map((res, i) =>
          <Card
            key={res.title}
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
                href={res.url}
                download={'download' in res ? res.download : undefined}
                target={'external' in res && res.external ? '_blank' : undefined}
                rel={'external' in res && res.external ? 'noopener noreferrer' : undefined}
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
