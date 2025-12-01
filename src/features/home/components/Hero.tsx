import { Button } from "../../../components";
import LogoIcon from "../../../../public/Icon.svg";
import { useSlide } from "../hooks/useSlide";

interface SlideState {
  currentSlide: number;
}

const Hero = () => {
  const slides: string[] = [
      "../src/assets/slider-1.jpg",
      "../src/assets/slider-2.jpg",
      "../src/assets/slider-3.jpg",
      "../src/assets/slider-4.jpg",
      "../src/assets/slider-5.jpg",
    ];
  const {currentSlide}: SlideState = useSlide(slides)

  return (
    <div className="flex flex-col relative h-screen max-h-215 lg:max-h-142 bg-neutral-custom-200">
      <div className="order-1 lg:absolute lg:left-22 xl:left-36 flex flex-col items-center justify-center gap-8 text-neutral-custom-100 bg-dark-brown lg:w-105 h-full p-12 z-10">
        <img src={LogoIcon} alt="Logo Icon" className="w-20 h-auto" />
        <p className="text-sm font-light">Handcrafted in Viet Nam since 1650</p>
        <h1 className="text-4xl times text-center font-semibold uppercase tracking-widest">
          Bat Trang Dinner Set
        </h1>
        <Button className="bg-neutral-custom-100 text-dark-brown">
          Shop Now
        </Button>
      </div>
      <div className="w-full h-full overflow-hidden">
        <div
          className="h-full flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="bg-cover bg-center h-full w-full shrink-0"
              style={{ backgroundImage: `url('${slide}')` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
