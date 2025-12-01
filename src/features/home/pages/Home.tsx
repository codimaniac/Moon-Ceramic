import { PageLayout } from "../../../components"
import { BestSellerGrid, Blog, BrandHistory, Categories, Hero, NewArrival, NewsLetter, SalesBanner } from "../components"

const Home = () => {

  return (
    <PageLayout>
      <Hero />
      <Categories />
      <SalesBanner />
      <BestSellerGrid />
      <BrandHistory />
      <NewArrival />
      <Blog />
      <NewsLetter />
    </PageLayout>
  )
}

export default Home