import React from 'react';
import { SectionHeader, Card, Button } from '../ui/Shared';
import { Briefcase, Mail, FileText } from 'lucide-react';
import { publicAsset } from '../../utils/publicAsset';
import { BEHANCE_PROFILE_URL, mailtoResearcher } from '../../data/contact';

const profileImages = {
  researcher: publicAsset('/profiles/pradeepa-wdr.jpg'),
  supervisor: publicAsset('/profiles/mr-aruna-ishara-gamage.jpeg'),
  coSupervisor: publicAsset('/profiles/mr-nushkan-nizme.jpeg')
} as const;

const supervisors = [
  {
    name: 'Mr. Aruna Ishara Gamage',
    role: 'Supervisor',
    title: 'Senior Lecturer',
    department: 'Department of Information Technology',
    faculty: 'Faculty of Computing',
    image: profileImages.supervisor,
    border: 'border-mint-light',
    accent: 'text-mint-mid',
    contribution:
      'Provided research supervision, academic guidance, feedback, and direction throughout the development and evaluation of the AR museum learning component.'
  },
  {
    name: 'Mr. Nushkan Nizme',
    role: 'Co-Supervisor',
    title: 'Assistant Lecturer',
    department: 'Department of Information Technology',
    faculty: 'Faculty of Computing',
    image: profileImages.coSupervisor,
    border: 'border-sky-light',
    accent: 'text-sky-mid',
    contribution:
      'Provided co-supervision, technical and research feedback, and support during the development, testing, and evaluation stages.'
  }
] as const;

export const Profiles = () => {
  return (
    <section id="profiles" className="section-pad bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <SectionHeader title="Researcher and Supervisory Team" />

        <div className="max-w-5xl mx-auto space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            {supervisors.map((person) =>
            <Card key={person.name} className="bg-white h-full">
                <div className="flex items-start gap-5 mb-5">
                  <div className={`w-24 h-24 rounded-full overflow-hidden shrink-0 shadow-sm border-2 ${person.border} ring-2 ring-white bg-cream`}>
                    <img
                      src={person.image}
                      loading="lazy"
                      decoding="async"
                      alt={person.name}
                      className="w-full h-full object-cover object-[center_20%]" />
                  </div>
                  <div className="min-w-0 pt-1">
                    <h4 className="font-heading font-bold text-xl text-charcoal leading-tight mb-1">
                      {person.name}
                    </h4>
                    <p className={`text-sm font-bold ${person.accent} mb-2`}>
                      {person.role}
                    </p>
                    <p className="text-xs text-charcoal/60 leading-relaxed font-medium">
                      {person.title} · {person.department} · {person.faculty}
                    </p>
                  </div>
                </div>
                <p className="text-xs text-charcoal/45 mb-3 font-semibold uppercase tracking-wider">
                  Sri Lanka Institute of Information Technology
                </p>
                <p className="text-sm text-charcoal/70 leading-relaxed">
                  <strong>Contribution:</strong> {person.contribution}
                </p>
              </Card>
            )}
          </div>

          <Card className="border-2 border-peach-light bg-gradient-to-br from-white to-peach-light/20 shadow-lg">
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              <div className="w-36 h-36 rounded-full overflow-hidden shrink-0 shadow-md border-4 border-white ring-2 ring-peach-light/50">
                <img
                  src={profileImages.researcher}
                  loading="lazy"
                  decoding="async"
                  alt="Pradeepa W D R"
                  className="w-full h-full object-cover object-top" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl font-heading font-bold text-charcoal mb-1">
                  Pradeepa W D R
                </h3>
                <p className="text-peach-deep font-bold mb-1 text-lg">
                  Researcher & Developer
                </p>
                <p className="text-sm text-charcoal/55 mb-5 font-medium">
                  B.Sc. (Hons) in Information Technology · Interactive Media · IT22033482
                </p>

                <div className="bg-white/80 backdrop-blur-sm p-5 rounded-2xl shadow-sm mb-6 border border-peach-light/40">
                  <p className="text-sm text-charcoal/80 leading-relaxed">
                    <strong>Contribution:</strong> Designed and developed the
                    Interactive AR Exploration of Earth’s Geological History
                    component, including QR-triggered access, app-based AR era
                    storytelling, Color-to-AR interaction, AR scene design,
                    narration flow, and quiz-based evaluation.
                  </p>
                </div>

                <div className="flex flex-wrap justify-center md:justify-start gap-3">
                  <Button
                    href={BEHANCE_PROFILE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                    className="text-sm py-2.5 px-5">
                    <Briefcase size={18} className="mr-2" /> View Portfolio
                  </Button>
                  <Button href={mailtoResearcher} variant="secondary" className="text-sm py-2.5 px-5 bg-white border border-peach-light">
                    <Mail size={18} className="mr-2" /> Contact
                  </Button>
                  <Button variant="outline" className="text-sm py-2.5 px-5 bg-white">
                    <FileText size={18} className="mr-2" /> Download CV
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>);
};
