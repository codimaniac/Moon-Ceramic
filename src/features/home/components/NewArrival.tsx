import { ProductGrid, SectionLayout } from "../../../components"

const NewArrival = () => {
  return (
    <SectionLayout className="py-8 lg:py-12">
      <h2 className="text-neutral-custom-800 text-3xl times text-center font-medium uppercase tracking-wider mb-12">Discover New Arrivals</h2>
      <ProductGrid/>
    </SectionLayout>
  )
}

export default NewArrival