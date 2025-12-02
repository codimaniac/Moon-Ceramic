import Logo from '../assets/logo-dark.svg'
import Menu from '../assets/icons/Menu.svg'
import Search from '../assets/icons/Search.svg'
import Avatar from '../assets/icons/Avatar.svg'
import Heart from '../assets/icons/Heart.svg'
import Cart from '../assets/icons/Shopping cart.svg'
import { useState } from 'react'
import SectionLayout from './SectionLayout'
import NavMenuItems from './NavMenuItems'

const NavBar = () => {
  const [isNavOpen, setNavOpen] = useState<boolean>(false)
  const toggleNav = () => setNavOpen(!isNavOpen)

  return (
    <SectionLayout className="relative flex items-center justify-between bg-neutral-custom-100 text-sm text-primary border-b border-b-neutral-custom-400 py-5 lg:py-6 xl:py-7">
      <div className="lg:hidden">
        <button onClick={toggleNav}><img src={Menu} alt="Menu" /></button>
        { isNavOpen && 
          <ul className="absolute z-1000 bg-neutral-custom-100 left-0 bottom-0 translate-y-full flex flex-col border-b border-b-neutral-custom-400 w-full scale-up-center">
            <NavMenuItems className="px-5 py-5 hover:bg-neutral-custom-300" />
          </ul>
        }
      </div>
      <img src={Logo} alt="Logo" className='w-36 h-auto' />
      <ul className="hidden lg:flex lg:gap-15">
        <NavMenuItems />
      </ul>
      <div className="flex gap-6.5">
        <button className="hidden lg:block cursor-pointer"><img src={Search} alt="Search" /></button>
        <button className="hidden lg:block cursor-pointer"><img src={Avatar} alt="Avatar" /></button>
        <button className="hidden lg:block cursor-pointer"><img src={Heart} alt="Heart" /></button>
        <button className="cursor-pointer"><img src={Cart} alt="Cart" /></button>
      </div>
    </SectionLayout>
  )
}

export default NavBar