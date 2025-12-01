import { Button } from "../../../components";
import LogoIcon from "../../../../public/Icon.svg";
import { useSlide } from "../hooks/useSlide";

interface SlideState {
  currentSlide: number;
  slides: string[];
}

const Hero = () => {
  const {currentSlide, slides}: SlideState = useSlide()

  return (
    <div className="flex flex-col relative h-screen max-h-215 lg:max-h-180 bg-neutral-custom-200 pl-0 lg:pl-22 xl:pl-36">
      <div className="order-1 lg:absolute flex flex-col items-center justify-center gap-8 text-neutral-custom-100 bg-dark-brown lg:w-105 h-full p-12 z-10">
        <img src={LogoIcon} alt="Logo Icon" className="w-20 h-auto" />
        <p className="text-sm font-light">Handcrafted in Viet Nam since 1650</p>
        <h1 className="text-4xl times text-center font-semibold uppercase tracking-widest">
          Bat Trang Dinner Set
        </h1>
        <Button className="bg-neutral-custom-100 text-dark-brown">
          Shop Now
        </Button>
      </div>
      <div className="w-[calc(100vw - 144px)] h-full overflow-hidden">
        <div
          className="h-full flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="bg-cover bg-center h-full w-screen lg:w-[calc(100vw-88px)] xl:w-[calc(100vw-144px)] shrink-0"
              style={{ backgroundImage: `url('${slide}')` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
