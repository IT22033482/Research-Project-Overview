import React from 'react';
import { SectionHeader, Card } from '../ui/Shared';
import {
  Building2,
  GraduationCap,
  Tent,
  Map,
  MonitorPlay,
  Settings,
  CheckCircle2,
  TrendingUp } from
'lucide-react';
const options = [
{
  title: 'Museum AR Learning Package',
  desc: 'A ready-to-use AR package for fossil, rock, mineral, and geological era exhibits.',
  icon: Building2,
  color: 'text-peach-deep',
  bg: 'bg-peach-light'
},
{
  title: 'QR-Based Exhibit Access',
  desc: 'QR codes placed near exhibits allow visitors to open selected AR learning scenes quickly.',
  icon: Map,
  color: 'text-mint-mid',
  bg: 'bg-mint-light'
},
{
  title: 'App-Based AR Geological Explorer',
  desc: 'A richer mobile app experience for interactive era scenes, narration, quizzes, and Color-to-AR activities.',
  icon: MonitorPlay,
  color: 'text-lavender-mid',
  bg: 'bg-lavender-light'
},
{
  title: 'School and Science Exhibition Module',
  desc: 'Adapted learning package for science classrooms, STEM events, and mobile exhibitions.',
  icon: GraduationCap,
  color: 'text-sky-mid',
  bg: 'bg-sky-light'
},
{
  title: 'Tablet / Kiosk Demonstration Setup',
  desc: 'Optional larger-screen setup for group learning and museum demonstrations.',
  icon: Tent,
  color: 'text-blush-mid',
  bg: 'bg-blush-light'
},
{
  title: 'Custom Museum Content Development',
  desc: 'The system can be adapted for other museums, heritage institutions, and geological collections.',
  icon: Settings,
  color: 'text-butter-mid',
  bg: 'bg-butter-light'
}];

const customers = [
'Museums and natural history galleries',
'Schools and science teachers',
'Science exhibitions',
'Tourism and cultural heritage institutions',
'Educational technology providers',
'Family learning centers'];

const pathways = [
'Museum licensing',
'Custom AR content packages',
'School subscription or workshop model',
'Tourism board partnerships',
'Cultural heritage grants',
'Science exhibition installations',
'Sponsored educational experiences'];

const advantages = [
'Low-cost smartphone-first approach',
'No expensive AR headset requirement',
'Combines QR access, app-based AR, storytelling, Color-to-AR, narration, and quizzes',
'Strong child-friendly learning value',
'Suitable for Sri Lankan museum context',
'Scalable to other galleries and institutions'];

const marketInsights = [
{
  number: '1',
  title: 'Potential Customers',
  items: customers,
  icon: CheckCircle2,
  cardClass: 'bg-sky-light/35 border-sky-mid/70',
  badgeClass: 'bg-[#4A9BC4] text-white',
  titleClass: 'text-[#1E5F7A]',
  itemClass: 'text-[#1E5F7A] font-bold',
  iconClass: 'text-[#4A9BC4]'
},
{
  number: '2',
  title: 'Revenue Pathways',
  items: pathways,
  icon: TrendingUp,
  cardClass: 'bg-mint-light/40 border-[#4FB88A]/70',
  badgeClass: 'bg-[#4FB88A] text-white',
  titleClass: 'text-[#2D6B4A]',
  itemClass: 'text-[#2D6B4A] font-bold',
  iconClass: 'text-[#4FB88A]'
},
{
  number: '3',
  title: 'Competitive Advantage',
  items: advantages,
  icon: CheckCircle2,
  cardClass: 'bg-peach-light/35 border-peach-mid/70',
  badgeClass: 'bg-peach-mid text-white',
  titleClass: 'text-peach-deep',
  itemClass: 'text-peach-deep font-bold',
  iconClass: 'text-peach-mid'
}] as const;

export const Commercialization = () => {
  return (
    <section id="commercialization" className="section-pad bg-cream">
      <div className="container mx-auto px-6 lg:px-12">
        <SectionHeader
          title="From Research Prototype to Deployable Museum Product"
          subtitle="Designed with clear pathways for real-world implementation and educational impact." />
        

        {/* Commercialization Options */}
        <div className="mb-24">
          <h3 className="text-2xl font-heading font-bold text-center mb-10 text-charcoal">
            Commercialization Options
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {options.map((opt, i) =>
            <Card
              key={i}
              delay={i * 0.1}
              className="group hover:border-transparent">
              
                <div
                className={`w-14 h-14 ${opt.bg} rounded-2xl flex items-center justify-center ${opt.color} mb-5 group-hover:scale-110 transition-transform duration-300`}>
                
                  <opt.icon size={28} />
                </div>
                <h4 className="font-bold text-lg mb-2 text-charcoal">
                  {opt.title}
                </h4>
                <p className="text-sm text-charcoal/70 leading-relaxed">
                  {opt.desc}
                </p>
              </Card>
            )}
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-heading font-bold text-center mb-3 text-charcoal">
            Market Opportunity & Value Proposition
          </h3>
          <p className="text-center text-charcoal/70 text-sm md:text-base mb-10 max-w-2xl mx-auto leading-relaxed">
            Target audiences, revenue models, and differentiators that support
            real-world deployment of the AR museum learning system.
          </p>

          <div className="grid lg:grid-cols-3 gap-8">
            {marketInsights.map((block) =>
            <div
              key={block.number}
              className={`rounded-[2rem] p-8 shadow-card border ${block.cardClass}`}>
              
              <h4 className={`font-heading font-bold text-xl mb-6 flex items-center ${block.titleClass}`}>
                <span className={`w-10 h-10 rounded-xl flex items-center justify-center mr-4 shadow-sm font-bold ${block.badgeClass}`}>
                  {block.number}
                </span>
                {block.title}
              </h4>
              <ul className="space-y-4">
                {block.items.map((item, i) => {
                  const ItemIcon = block.icon;
                  return (
                    <li key={i} className={`flex items-start text-sm ${block.itemClass}`}>
                      <ItemIcon
                        size={20}
                        className={`${block.iconClass} mr-3 shrink-0 mt-0.5`} />
                      
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
            )}
          </div>
        </div>
      </div>
    </section>);

};