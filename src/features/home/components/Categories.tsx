import { SectionLayout } from "../../../components"
import HomeDecor from "../../../assets/home-decor-category.jpg"
import Holiday from "../../../assets/holiday-category.jpg"

const Categories = () => {
  return (
    <SectionLayout className="py-12">
        <div className="flex justify-between gap-8">
            <div className="flex flex-col items-center justify-center gap-6 flex-1">
                <img src={HomeDecor} alt="Home Decor" />
                <p className="uppercase font-semibold text-primary">Home Decor</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-6 flex-1">
                <img src={HomeDecor} alt="Home Decor" />
                <p className="uppercase font-semibold text-primary">Home Decor</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-6 flex-1">
                <img src={Holiday} alt="Holiday" />
                <p className="uppercase font-semibold text-primary">Holiday</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-6 flex-1">
                <img src={HomeDecor} alt="Home Decor" />
                <p className="uppercase font-semibold text-primary">Home Decor</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-6 flex-1">
                <img src={HomeDecor} alt="Home Decor" />
                <p className="uppercase font-semibold text-primary">Home Decor</p>
            </div>
        </div>
    </SectionLayout>
  )
}

export default Categories