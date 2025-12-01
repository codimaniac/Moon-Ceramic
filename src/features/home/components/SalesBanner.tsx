import { Button, SectionLayout } from "../../../components"
import SalesImage from "../../../assets/sales-image.jpg"

const SalesBanner = () => {
  return (
    <SectionLayout>
        <div className="flex">
            <div className="flex flex-col flex-1 items-center justify-center gap-6 p-12 bg-desert-storm">
                <h2 className="text-neutral-custom-800 text-3xl times text-center font-medium uppercase tracking-widest">
                Up to 40% off our Christmas collection
                </h2>
                <p className="text-neutral-custom-700 text-sm font-light">Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.</p>
                <Button className="text-neutral-custom-800 font-semibold border-b p-0! mt-auto pb-0.5">
                Shop Now
                </Button>
            </div>
            <div className="flex-1">
                <img src={SalesImage} alt="Sales Image" />
            </div>
        </div>
    </SectionLayout>
  )
}

export default SalesBanner