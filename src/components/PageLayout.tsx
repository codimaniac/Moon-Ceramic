import type { ReactNode } from "react"
import Footer from "./Footer"
import NavBar from "./NavBar"

type PageLayoutProp = {
    children: ReactNode
}

const PageLayout = ({children}: PageLayoutProp) => {
  return (
    <>
        <NavBar />
        {children}
        <Footer />
    </>
  )
}

export default PageLayout