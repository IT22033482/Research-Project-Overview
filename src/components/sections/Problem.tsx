import React from 'react';
import { SectionHeader, Card } from '../ui/Shared';
import {
  FileText,
  Clock,
  MousePointerClick,
  MessageSquareX,
  Banknote } from
'lucide-react';

const problems = [
{
  title: 'Static Labels',
  icon: FileText,
  desc: 'Museum geology exhibits are often static, text-heavy, and difficult for young visitors to understand.',
  color: 'text-mint-mid',
  bg: 'bg-mint-light'
},
{
  title: 'Hard-to-Imagine Time',
  icon: Clock,
  desc: 'Concepts like fossilization, extinction, climate change, plate movement, and geological time are abstract.',
  color: 'text-sky-mid',
  bg: 'bg-sky-light'
},
{
  title: 'Low Interactivity',
  icon: MousePointerClick,
  desc: 'Fossils and rocks represent millions of years, but visitors often see only the final preserved object.',
  color: 'text-blush-mid',
  bg: 'bg-blush-light'
},
{
  title: 'Limited Learning Feedback',
  icon: MessageSquareX,
  desc: 'Children and families need more visual, playful, and guided learning methods.',
  color: 'text-butter-mid',
  bg: 'bg-butter-light'
},
{
  title: 'Need for Low-Cost Museum Innovation',
  icon: Banknote,
  desc: 'Museums need affordable digital solutions that do not require expensive headsets or major physical changes.',
  color: 'text-lavender-mid',
  bg: 'bg-lavender-light'
}];

export const Problem = () => {
  return (
    <section id="problem" className="section-pad bg-cream relative overflow-hidden">
      <div className="absolute -left-24 top-1/4 w-72 h-72 bg-sky-light/30 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <SectionHeader
          title="Why This Project Matters"
          subtitle="The intended users are school children, families, museum visitors, teachers, museum educators, tourists, and science exhibition audiences." />
        

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {problems.map((problem, index) =>
          <Card key={index} delay={index * 0.08} className="flex flex-col h-full">
              <div
                className={`w-14 h-14 ${problem.bg} rounded-2xl shadow-sm flex items-center justify-center ${problem.color} mb-5 border border-white`}>
              
                <problem.icon size={28} />
              </div>
              <h3 className="text-xl font-heading font-bold text-charcoal mb-3">
                {problem.title}
              </h3>
              <p className="text-charcoal/70 leading-relaxed text-sm md:text-base">{problem.desc}</p>
            </Card>
          )}
        </div>
      </div>
    </section>);
};
