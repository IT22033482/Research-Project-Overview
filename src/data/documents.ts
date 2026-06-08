import { publicAsset } from '../utils/publicAsset';

export const GITHUB_REPO_URL =
  'https://github.com/IT22033482/Research-Project-Overview';

export const DEMO_VIDEO_URL =
  'https://mysliit-my.sharepoint.com/:v:/g/personal/it22033482_my_sliit_lk/IQCw7G9YaE_uTY6YSs0uYBmFATwrp3BR_pAM8EC432da_5U?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=9vRj9t';

export const researchDocuments = {
  cv: publicAsset('/documents/Ruwani Pradeepa- CV Resume.pdf'),
  abstract: publicAsset('/documents/IT22033482_Research_Abstract.pdf'),
  thesis: publicAsset('/documents/IT22033482_Research_Thesis.pdf'),
  presentation: publicAsset('/documents/Final PPT.pptx'),
  technicalDocumentation: publicAsset('/documents/Technical Documentation.pdf'),
  demoVideo: DEMO_VIDEO_URL
} as const;

export const CV_RESUME_URL = researchDocuments.cv;
export const PROJECT_SUMMARY_URL = researchDocuments.abstract;
export const TECH_SUMMARY_URL = researchDocuments.technicalDocumentation;
