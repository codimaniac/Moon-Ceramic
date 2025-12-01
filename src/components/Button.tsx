import type { ReactNode } from "react"

type ButtonProps = {
    children: ReactNode,
    className?: string,
    onClick?: () => void
}

const Button = ({ children, className, onClick }: ButtonProps) => {
  return (
    <button className={`px-12 py-2 uppercase text-xs cursor-pointer ${className}`} onClick={onClick}>
        {children}
    </button>
  )
}

export default Button