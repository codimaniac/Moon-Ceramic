import { Button, SectionLayout } from "../../../components";

const SalesBanner = () => {
  const salesImg = "../src/assets/sales-image.jpg";

  return (
    <SectionLayout>
      <div className="flex flex-col min-[820px]:flex-row">
        <div className="flex flex-col flex-1 items-center justify-center gap-4 px-6 py-12 bg-desert-storm min-[820px]:py-0">
          <h2 className="text-neutral-custom-800 text-2xl times text-center font-semibold uppercase tracking-wider">
            Up to 40% off our Christmas collection
          </h2>
          <p className="text-neutral-custom-700 text-sm text-center font-light">
            Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
            phasellus mollis sit aliquam sit nullam neque ultrices.
          </p>
          <Button className="text-neutral-custom-800 tracking-[6%] font-semibold border-b p-0! mt-4 pb-0.5">
            Shop Now
          </Button>
        </div>
        <div
          className="min-[820px]:flex-1 w-full h-70 bg-cover bg-center"
          style={{ backgroundImage: `url('${salesImg}')` }}
        ></div>
      </div>
    </SectionLayout>
  );
};

export default SalesBanner;
