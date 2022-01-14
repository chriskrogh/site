import { useEffect, useState } from 'react';
import { COLUMN_GAP_SIZE, MAX_COLUMN_WIDTH } from 'sections/styles';

export const MOBILE_THRESHOLD = 2 * MAX_COLUMN_WIDTH + COLUMN_GAP_SIZE;
export const TABLET_THRESHOLD = 1128;

type ScreenSize = 'mobile' | 'tablet' | 'desktop';

export const useScreenSize = (): ScreenSize | undefined => {
  const [screenSize, setScreenSize] = useState<ScreenSize | undefined>();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        if (screenSize !== 'mobile' && window.innerWidth <= MOBILE_THRESHOLD) {
          setScreenSize('mobile');
        } else if (
          screenSize !== 'tablet' &&
          window.innerWidth <= TABLET_THRESHOLD &&
          window.innerWidth > MOBILE_THRESHOLD
        ) {
          setScreenSize('tablet');
        } else if (
          screenSize !== 'desktop' &&
          window.innerWidth > TABLET_THRESHOLD
        ) {
          setScreenSize('desktop');
        }
      };
      window.addEventListener('resize', handleResize);
      handleResize();
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [screenSize]);

  return screenSize;
};
