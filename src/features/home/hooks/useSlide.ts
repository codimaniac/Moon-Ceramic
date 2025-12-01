import { useEffect, useState } from "react";
// import HeroImg from '../../../assets/44a15a2b362a977c99f2850819b159c6.jpg'

export const useSlide = (slides: string[]) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  return { currentSlide };
};
