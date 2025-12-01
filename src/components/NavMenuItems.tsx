type NavMenuItemsProps = {
    className?: string
}

const NavMenuItems = ({className}: NavMenuItemsProps) => {
  return (
    <>
        <li className={`cursor-pointer hover:text-maize ${className}`}>Home</li>
        <li className={`cursor-pointer hover:text-maize ${className}`}>Shop</li>
        <li className={`cursor-pointer hover:text-maize ${className}`}>About</li>
        <li className={`cursor-pointer hover:text-maize ${className}`}>Contact</li>
    </>
  )
}

export default NavMenuItems