export const appUiImages = {
  homePage: '/app-ui/home-page.jpeg',
  profile: '/app-ui/profile.jpeg',
  profile2: '/app-ui/profile-2.jpeg',
  startJourney: '/app-ui/start-journey.jpeg',
  createProfile: '/app-ui/create-profile.jpeg',
  onboarding1: '/app-ui/onboarding-1.jpeg',
  onboarding2: '/app-ui/onboarding-2.jpeg',
  onboarding3: '/app-ui/onboarding-3.jpeg',
  onboarding4: '/app-ui/onboarding-4.jpeg',
  eraSelection: '/app-ui/era-selection.jpeg',
  mesozoicEraScreen: '/app-ui/mesozoic-era-screen.jpeg',
  watchAndLearnMesozoic: '/app-ui/watch-and-learn-mesozoic.jpeg',
  colorToArColoring: '/app-ui/color-to-ar-coloring.jpeg',
  colorToArColoredArt: '/app-ui/color-to-ar-colored-art.jpeg',
  colorToArCamera: '/app-ui/color-to-ar-camera.jpeg',
  colorToArEra: '/app-ui/color-to-ar-era.jpeg',
  knowledgeCheckPreQuiz: '/app-ui/knowledge-check-pre-quiz.jpeg',
  knowledgeCheckComplete: '/app-ui/knowledge-check-complete.jpeg',
  learningStats: '/app-ui/learning-stats.jpeg',
  learningStats2: '/app-ui/learning-stats-2.jpeg',
  mesozoicEraQuiz: '/app-ui/mesozoic-era-quiz.jpeg',
  achievements: '/app-ui/achievements.jpeg'
} as const;

export const prototypeScreens = [
  {
    name: 'Main menu / profile',
    img: appUiImages.profile
  },
  {
    name: 'QR or image marker scanning',
    img: appUiImages.homePage
  },
  {
    name: 'Era selection',
    img: appUiImages.eraSelection
  },
  {
    name: 'Era learning screens',
    img: appUiImages.mesozoicEraScreen
  },
  {
    name: 'AI-supported narration panel',
    img: appUiImages.watchAndLearnMesozoic
  },
  {
    name: 'Color-to-AR coloring canvas',
    img: appUiImages.colorToArColoring
  },
  {
    name: 'AR output preview',
    img: appUiImages.colorToArCamera
  },
  {
    name: 'Quiz / knowledge check',
    img: appUiImages.knowledgeCheckPreQuiz
  },
  {
    name: 'Learning result / statistics screen',
    img: appUiImages.learningStats
  }
] as const;

export const galleryItems = [
  { img: appUiImages.onboarding1, caption: 'Onboarding — introduction' },
  { img: appUiImages.onboarding2, caption: 'Onboarding — explore eras' },
  { img: appUiImages.onboarding3, caption: 'Onboarding — Color-to-AR' },
  { img: appUiImages.onboarding4, caption: 'Onboarding — learn & quiz' },
  { img: appUiImages.startJourney, caption: 'Welcome & start journey' },
  { img: appUiImages.createProfile, caption: 'Create profile' },
  { img: appUiImages.profile, caption: 'User profile' },
  { img: appUiImages.profile2, caption: 'Profile & awards' },
  { img: appUiImages.homePage, caption: 'Home — milestone goals' },
  { img: appUiImages.eraSelection, caption: 'Choose an era' },
  { img: appUiImages.mesozoicEraScreen, caption: 'Mesozoic era hub' },
  { img: appUiImages.watchAndLearnMesozoic, caption: 'Watch & learn narration' },
  { img: appUiImages.colorToArEra, caption: 'Color-to-AR picker' },
  { img: appUiImages.colorToArColoring, caption: 'Digital coloring canvas' },
  { img: appUiImages.colorToArColoredArt, caption: 'Colored artwork' },
  { img: appUiImages.colorToArCamera, caption: 'AR camera view' },
  { img: appUiImages.knowledgeCheckPreQuiz, caption: 'Pre-quiz knowledge check' },
  { img: appUiImages.mesozoicEraQuiz, caption: 'Mesozoic era quiz' },
  { img: appUiImages.knowledgeCheckComplete, caption: 'Quiz completion' },
  { img: appUiImages.learningStats, caption: 'Learning statistics' },
  { img: appUiImages.learningStats2, caption: 'Activity breakdown' },
  { img: appUiImages.achievements, caption: 'Achievements & badges' }
] as const;
