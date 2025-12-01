import type { ReactNode } from "react"

type SectionLayoutProps = {
    children: ReactNode
    className?: string
    
}

const SectionLayout = ({children, className}: SectionLayoutProps) => {
  return (
    <div className={`px-5 lg:px-22 xl:px-36 ${className}`}>
        {children}
    </div>
  )
}

export default SectionLayout