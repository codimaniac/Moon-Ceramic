import ProductCard from "./ProductCard"

type ProductGridProps = {
  show?: boolean;
}

const ProductGrid = ({ show }: ProductGridProps) => {
  return (
    <div className="grid max-[391px]:grid-cols-1 max-[391px]:gap-6 justify-items-center grid-cols-2 gap-3 md:gap-8 md:grid-cols-3 lg:gap-4 lg:grid-cols-4 xl:gap-8">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      { show && 
      <>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      </>
      }
    </div>
  )
}

export default ProductGrid