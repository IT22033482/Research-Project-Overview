import { useEffect, useState } from 'react';
import { appUiImages } from '../data/appUiImages';
import { publicAsset } from '../utils/publicAsset';
import { preloadImage, preloadImages } from '../utils/preloadImages';

const HERO_IMAGE = appUiImages.startJourney;

const ABOVE_FOLD_IMAGES = [
  HERO_IMAGE,
  publicAsset('/app-ui/paleozoic.png'),
  publicAsset('/app-ui/mesozoic.png'),
  publicAsset('/app-ui/cenozoic.png')
];

const BACKGROUND_IMAGES = [
  appUiImages.homePage,
  appUiImages.profile,
  publicAsset('/profiles/pradeepa-wdr.jpg')
];

const MIN_DISPLAY_MS = 700;
const MAX_WAIT_MS = 10000;

export const useAppLoader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let cancelled = false;
    const startedAt = Date.now();
    let loadedCount = 0;

    const updateProgress = () => {
      if (!cancelled) {
        setProgress(Math.round((loadedCount / ABOVE_FOLD_IMAGES.length) * 100));
      }
    };

    const finish = () => {
      if (cancelled) return;

      const elapsed = Date.now() - startedAt;
      const remaining = Math.max(0, MIN_DISPLAY_MS - elapsed);

      window.setTimeout(() => {
        if (!cancelled) {
          setProgress(100);
          setIsLoading(false);
          preloadImages(BACKGROUND_IMAGES);
        }
      }, remaining);
    };

    const loadAboveFold = ABOVE_FOLD_IMAGES.map((url) =>
      preloadImage(url).then(() => {
        loadedCount += 1;
        updateProgress();
      })
    );

    Promise.all(loadAboveFold).then(finish);

    const timeout = window.setTimeout(finish, MAX_WAIT_MS);

    return () => {
      cancelled = true;
      window.clearTimeout(timeout);
    };
  }, []);

  return { isLoading, progress };
};
