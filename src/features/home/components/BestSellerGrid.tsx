import { ProductGrid, SectionLayout } from "../../../components"

const BestSellerGrid = () => {
  return (
    <SectionLayout className="py-8 lg:py-12 w-full">
        <h2 className="text-neutral-custom-800 text-3xl times text-center font-medium uppercase tracking-wider mb-12">Best Seller</h2>
        <ProductGrid show />
    </SectionLayout>
  )
}

export default BestSellerGrid