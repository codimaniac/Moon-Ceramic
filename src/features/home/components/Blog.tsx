import { Button, SectionLayout } from "../../../components"

const Blog = () => {
  const blogImage: string[] = [
    "../src/assets/tableware-blog.jpg"
  ]

  return (
    <SectionLayout>
      <div className="grid grid-cols-1 min-[820px]:grid-cols-2">
            <div className="flex flex-col flex-1 items-center justify-center gap-4 px-6 py-12 bg-desert-storm min-[820px]:py-0">
                <h2 className="uppercase text-neutral-custom-600 text-sm font-semibold tracking-wide">Tableware</h2>
                <h3 className="text-neutral-custom-800 text-2xl times text-center font-medium uppercase tracking-wider">
                The Secret to a Kitchen Room
                </h3>
                <p className="text-neutral-custom-700 text-sm text-center font-light">Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.</p>
                <Button className="text-neutral-custom-800 tracking-[6%] font-semibold border-b p-0! mt-4 pb-0.5">
                Learn More
                </Button>
            </div>
            <div className="min-[820px]:flex-1 w-full h-70 bg-cover bg-center" style={{backgroundImage: `url('${blogImage[0]}')`}}></div>
        </div>
    </SectionLayout>
  )
}

export default Blog