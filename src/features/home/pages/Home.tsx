import { NavBar } from "../../../components"
import { BestSellerGrid, Categories, Hero, SalesBanner } from "../components"

const Home = () => {

  return (
    <>
      <NavBar />
      <Hero  />
      <Categories />
      <SalesBanner />
      <BestSellerGrid />
    </>
  )
}

export default Home