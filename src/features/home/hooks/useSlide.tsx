import { useEffect, useState } from "react";
// import HeroImg from '../../../assets/44a15a2b362a977c99f2850819b159c6.jpg'

export const useSlide = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const slides: string[] = [
    "../src/assets/2c9a125035d423391baab1b37dc3aad7.jpg",
    "../src/assets/flat-lay-composition-different-sized-plates 1.jpg",
    "../src/assets/9c8440fb6dfaf0650411d23131b1ab88 1.jpg",
    "../src/assets/44a15a2b362a977c99f2850819b159c6.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  return {currentSlide, slides}
}
