import Image from "../assets/mercer-grey-bowl.jpg"
import Button from "./Button"

// type ProductCardProps = {
//   product_image: string;
//   product_name: string;
//   description: string;
//   price: number;
// }

const ProductCard = () => {
  return (
    <div className="flex flex-col gap-4 w-45 tracking-wider md:w-55 lg:w-50 xl:w-55">
      <div className="w-full h-60 overflow-hidden"><img src={Image} alt="Bowl" /></div>
      <div className="flex flex-col gap-2 uppercase text-xs font-semibold">
        <h3 className="text-primary">Small Ecur Ceramic Compote</h3>
        <span>$43.00</span>
      </div>
      <p className="text-neutral-custom-600 text-xs font-light">Lorem, ipsum dolor sit amet consect elit. Incidunt, explicabo.</p>
      <Button className="px-0! border border-primary mt-4 md:px-12!">Add to Cart</Button>
    </div>
  )
}

export default ProductCard