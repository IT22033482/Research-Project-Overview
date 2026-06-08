export const preloadImage = (src: string): Promise<void> =>
  new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = () => resolve();
    img.src = src;
  });

export const preloadImages = (urls: string[]): Promise<void> =>
  Promise.all(urls.map(preloadImage)).then(() => {});
