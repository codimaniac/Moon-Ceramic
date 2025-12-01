import ProductCard from "./ProductCard"

const ProductGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-3 md:gap-8 md:grid-cols-3 lg:gap-4 lg:grid-cols-4 xl:gap-8">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  )
}

export default ProductGrid