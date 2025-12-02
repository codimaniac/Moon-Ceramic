import { SectionLayout } from "../../../components"
import Tableware from '../../../assets/tableware-category.jpg';
import HomeDecor from '../../../assets/home-decor-category.jpg';
import Holiday from '../../../assets/holiday-category.jpg'
import Collection from '../../../assets/collection-category.jpg'

type Category = {
  name: string,
  image: string,
}

const Categories = () => {
  const categories: Category[] = [
    {name: 'Tableware', image: Tableware},
    {name: 'Home Decor', image: HomeDecor},
    {name: 'Holiday', image: Holiday},
    {name: 'Collection', image: Collection},
  ]
  const copy: Category[] = categories.slice()
  const displayedCategories: Category[] = categories.concat(copy)
  
  return (
    <SectionLayout className="py-8 lg:py-12">
        <div className="flex h-70 w-full overflow-hidden">
          <div className="flex justify-between gap-8 animate-slide">
            {
              displayedCategories.map((category, index) => {
                return (
                  <div key={index} className="flex flex-col items-center justify-center gap-6 flex-1">
                      <div className="bg-cover bg-center h-56 w-56 shrink-0" style={{ backgroundImage: `url('${category.image}')` }}></div>
                      <p className="uppercase font-semibold text-primary">{category.name}</p>
                  </div>
                )
              })
            }
          </div>
        </div>
    </SectionLayout>
  )
}

export default Categories