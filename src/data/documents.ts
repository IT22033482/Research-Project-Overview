import { publicAsset } from '../utils/publicAsset';

export const GITHUB_REPO_URL =
  'https://github.com/IT22033482/Research-Project-Overview';

export const researchDocuments = {
  cv: publicAsset('/documents/Ruwani Pradeepa- CV Resume.pdf'),
  abstract: publicAsset('/documents/IT22033482_Research_Abstract.pdf'),
  thesis: publicAsset('/documents/IT22033482_Research_Thesis.pdf'),
  presentation: publicAsset('/documents/Final PPT.pptx'),
  technicalDocumentation: publicAsset('/documents/Technical Documentation.pdf'),
  demoVideo: publicAsset('/documents/Overall Research Project Demo Video.mp4')
} as const;

export const CV_RESUME_URL = researchDocuments.cv;
export const PROJECT_SUMMARY_URL = researchDocuments.abstract;
export const DEMO_VIDEO_URL = researchDocuments.demoVideo;
export const TECH_SUMMARY_URL = researchDocuments.technicalDocumentation;
