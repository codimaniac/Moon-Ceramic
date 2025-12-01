import { SectionLayout } from "../../../components"

type Category = {
  name: string,
  image: string,
}

const Categories = () => {
  const categories: Category[] = [
    {name: 'Tableware', image: '../src/assets/tableware-category.jpg'},
    {name: 'Home Decor', image: '../src/assets/home-decor-category.jpg'},
    {name: 'Holiday', image: '../src/assets/holiday-category.jpg'},
    {name: 'Collection', image: '../src/assets/collection-category.jpg'},
  ]
  
  return (
    <SectionLayout className="py-8 lg:py-12">
        <div className="flex h-70 w-full overflow-hidden">
          <div className="flex justify-between gap-8 animate-slide">
            {
              categories.map((category, index) => {
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