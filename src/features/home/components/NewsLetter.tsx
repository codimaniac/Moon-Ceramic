import { Button, SectionLayout } from "../../../components"

const NewsLetter = () => {
  return (
    <SectionLayout className="py-8 lg:py-12">
      <div className="flex flex-col gap-4 items-center justify-center">
        <p className="text-primary text-sm font-semibold">Sign up for emails</p>
        <h2 className="text-neutral-custom-800 text-2xl times text-center font-semibold uppercase tracking-wider">
          For News, Collections & More
        </h2>
        <input type="email" name="email" id="email" placeholder="Enter your email address" className="border-b text-center w-100 text-sm p-2" />
        <Button className="border border-primary mt-2">Sign Up</Button>
      </div>
    </SectionLayout>
  )
}

export default NewsLetter