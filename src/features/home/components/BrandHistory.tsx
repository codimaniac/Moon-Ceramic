import { Button, SectionLayout } from "../../../components";
import CeramicImageOne from "../../../assets/history-1.jpg"
import CeramicImageTwo from "../../../assets/history-2.png"

const BrandHistory = () => {
  return (
    <SectionLayout>
      <div className="grid grid-cols-1 min-[820px]:grid-cols-2">
        <div className="flex flex-col flex-1 order-1 items-center justify-center gap-4 px-6 py-12 bg-desert-storm min-[820px]:py-0">
          <h2 className="text-neutral-custom-800 text-2xl times text-center font-semibold uppercase tracking-wider">
            Made in Viet Nam since 1450
          </h2>
          <p className="text-neutral-custom-700 text-sm text-center font-light">
            Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
            phasellus mollis sit aliquam sit nullam neque ultrices.
          </p>
          <Button className="text-neutral-custom-800 tracking-[6%] font-semibold border-b p-0! mt-4 pb-0.5">
            Learn More
          </Button>
        </div>
        <div
          className="min-[820px]:flex-1 order-2 w-full h-70 bg-cover bg-center"
          style={{ backgroundImage: `url('${CeramicImageOne}')` }}
        ></div>
        <div
          className="min-[820px]:flex-1 order-4 min-[820px]:order-3 w-full h-70 bg-cover bg-center"
          style={{ backgroundImage: `url('${CeramicImageTwo}')` }}
        ></div>
        <div className="flex flex-col flex-1 order-3 min-[820px]:order-4 items-center justify-center gap-4 px-6 py-12 bg-desert-storm min-[820px]:py-0">
          <h2 className="text-neutral-custom-800 text-2xl times text-center font-semibold uppercase tracking-wider">
            Our History
          </h2>
          <p className="text-neutral-custom-700 text-sm text-center font-light">
            Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
            phasellus mollis sit aliquam sit nullam neque ultrices.
          </p>
          <Button className="text-neutral-custom-800 tracking-[6%] font-semibold border-b p-0! mt-4 pb-0.5">
            Learn More
          </Button>
        </div>
      </div>
    </SectionLayout>
  );
};

export default BrandHistory;
