import {
  FileText,
  File,
  Presentation,
  Code,
  PlaySquare,
  Github
} from 'lucide-react';
import { GITHUB_REPO_URL, researchDocuments } from './documents';

export const downloadResources = [
  {
    title: 'Research Abstract PDF',
    desc: 'Summary of the research component.',
    url: researchDocuments.abstract,
    download: 'IT22033482_Research_Abstract.pdf',
    icon: FileText,
    color: 'text-peach-deep',
    bg: 'bg-peach-light'
  },
  {
    title: 'Full Thesis PDF',
    desc: 'Complete academic documentation.',
    url: researchDocuments.thesis,
    download: 'IT22033482_Research_Thesis.pdf',
    icon: File,
    color: 'text-mint-mid',
    bg: 'bg-mint-light'
  },
  {
    title: 'Presentation Slides',
    desc: 'Final evaluation slide deck.',
    url: researchDocuments.presentation,
    download: 'Final PPT.pptx',
    icon: Presentation,
    color: 'text-lavender-mid',
    bg: 'bg-lavender-light'
  },
  {
    title: 'Technical Documentation',
    desc: 'System architecture and setup.',
    url: researchDocuments.technicalDocumentation,
    download: 'Technical Documentation.pdf',
    icon: Code,
    color: 'text-butter-mid',
    bg: 'bg-butter-light'
  },
  {
    title: 'Demo Video',
    desc: 'Full walkthrough of the prototype.',
    url: researchDocuments.demoVideo,
    icon: PlaySquare,
    color: 'text-peach-deep',
    bg: 'bg-peach-light',
    external: true
  },
  {
    title: 'GitHub Repository',
    desc: 'Source code and assets.',
    url: GITHUB_REPO_URL,
    icon: Github,
    color: 'text-charcoal',
    bg: 'bg-gray-200',
    external: true
  }
] as const;
