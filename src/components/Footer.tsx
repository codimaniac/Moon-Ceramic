import Button from "./Button"
import SectionLayout from "./SectionLayout"
import Logo from "../assets/logo-light.svg"

const Footer = () => {
  return (
    <SectionLayout className="mt-8 lg:mt-12 bg-primary">
      <div className="flex flex-col">
        <div className="flex flex-col border-b border-b-neutral-custom-400 md:flex-row">
          <div className="flex flex-col flex-2 gap-4 p-12 border-b border-b-neutral-custom-400">
            <img src={Logo} alt="Logo" className='w-28 h-auto' />
            <p className="text-neutral-custom-400 text-xs font-light leading-[183%]">
              Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
              phasellus mollis sit aliquam sit nullam neque ultrices.
            </p>
            <Button className="flex flex-col items-center justify-center text-neutral-custom-400 tracking-[6%] font-semibold border w-fit">
              Get Started
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-6 justify-between flex-3 p-12 md:grid-cols-3 md:border-l md:border-l-neutral-custom-400">
            <ul className="flex flex-col gap-4 w-full text-xs text-neutral-custom-400 font-light">
              <li className="uppercase font-semibold pb-2">About Us</li>
              <li className="cursor-pointer">Mission</li>
              <li className="cursor-pointer">Our Team</li>
              <li className="cursor-pointer">Awards</li>
              <li className="cursor-pointer">Testimonial</li>
              <li className="cursor-pointer">Privacy Policy</li>
              <li className="cursor-pointer"></li>
            </ul>
            <ul className="flex flex-col gap-4 w-full text-xs text-neutral-custom-400 font-light">
              <li className="uppercase font-semibold pb-2">Services</li>
              <li className="cursor-pointer">Mission</li>
              <li className="cursor-pointer">Our Team</li>
              <li className="cursor-pointer">Awards</li>
              <li className="cursor-pointer">Testimonial</li>
              <li className="cursor-pointer">Privacy Policy</li>
              <li className="cursor-pointer"></li>
            </ul>
            <ul className="flex flex-col gap-4 w-full text-xs text-neutral-custom-400 font-light">
              <li className="uppercase font-semibold pb-2">Portfolio</li>
              <li className="cursor-pointer">Mission</li>
              <li className="cursor-pointer">Our Team</li>
              <li className="cursor-pointer">Awards</li>
              <li className="cursor-pointer">Testimonial</li>
              <li className="cursor-pointer">Privacy Policy</li>
              <li className="cursor-pointer"></li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center gap-1 w-full p-12 text-xs text-neutral-custom-400">
          Copyright @ 2025 Moon | All Rights Reserverd |<span className="text-neutral-custom-600 border-b pb-0.5 cursor-pointer"> Terms and Conditions </span>|<span className="text-neutral-custom-600 border-b pb-0.5 cursor-pointer"> Privacy Policy </span>
        </div>
      </div>
    </SectionLayout>
  )
}

export default Footer