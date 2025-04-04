import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Button } from "@/components/Button";
import { PrismicNextImage } from "@prismicio/next";
import { staticBlurDataUrl } from "@/lib/staticBlurUrl";

/**
 * Props for `ServicesHeroBlock`.
 */
export type ServicesHeroBlockProps =
  SliceComponentProps<Content.ServicesHeroBlockSlice>;

/**
 * Component for "ServicesHeroBlock" Slices.
 */
const ServicesHeroBlock: FC<ServicesHeroBlockProps> = ({ slice }) => {
  const getBlurSvg = staticBlurDataUrl();

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="pt-32 pb-8 bg-[radial-gradient(ellipse_100%_50%_at_bottom_left,#183EC2,#EAEEFE_66%)] overflow-hidden"
    >
      <div className="container">
        <div className="max-w-[40rem] mx-auto">
          <div className="flex flex-col items-center text-center space-y-8 md:space-y-8">
            <h1 className="text-[2.625rem] lg:text-[5rem] leading-[1em] font-black">
              {slice.primary.title}
            </h1>

            <p className="text-[1.25rem] md:text-lg lg:text-2xl -leading-[0.2px] font-medium">
              {slice.primary.content}
            </p>

            <div className="text-center">
              <Button variant="primary" link={slice.primary.btn_link}>
                {slice.primary.btn_text}
              </Button>
            </div>

            {/* <div className="flex flex-col md:flex-row justify-between space-x-4">
              {slice.primary.values.map((item, index) => {
                const IconComponent = iconsArray.get(index);
                return (
                  IconComponent && (
                    <div
                      key={index}
                      className="border rounded-lg mb-4 p-2 flex w-full  justify-between items-center gap-x-2"
                    >
                      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue text-white border border-black shrink-0">
                        <IconComponent className="w-6 h-6 min-w-min min-h-min" />
                      </div>
                      <div className="text-xl">{item.text}</div>
                      
                    </div>
                  )
                );
              })}
            </div> */}
          </div>
        </div>
      </div>

      {/* Images */}
      <div className="flex flex-col gap-y-8 md:gap-y-0 md:flex-row justify-center items-center md:w-[110%]  md:m-[8.75rem_auto_1.25rem] relative py-4 md:py-8">
        {/* Image One */}
        <PrismicNextImage
          field={slice.primary.image_one}
          className="aspect-square relative shadow-lg min-w-[80%] md:min-w-[18.75rem] lg:min-w-[28rem] max-w-[29%] rounded-[1.875rem] object-cover border-6 md:border-9 border-white  transform rotate-2"
          width={slice.primary.image_one.dimensions?.width}
          height={slice.primary.image_one.dimensions?.height}
          placeholder="blur"
          blurDataURL={getBlurSvg}
        />

        {/* Image Two */}
        <PrismicNextImage
          field={slice.primary.image_two}
          className="aspect-square relative shadow-lg min-w-[80%] md:min-w-[18.75rem] lg:min-w-[28rem]  max-w-[29%] rounded-[1.875rem] md:-mx-[3.625rem] md:-mt-[10.5625rem] object-cover border-6 md:border-9 border-white transform -rotate-5 md:-rotate-7"
          width={slice.primary.image_two.dimensions?.width}
          height={slice.primary.image_two.dimensions?.height}
          placeholder="blur"
          blurDataURL={getBlurSvg}
        />

        {/* Image three */}
        <PrismicNextImage
          field={slice.primary.image_three}
          className="aspect-square relative shadow-lg min-w-[80%] md:min-w-[18.75rem] lg:min-w-[28rem] max-w-[29%] rounded-[1.875rem] md:-mx-[1.5rem] md:mt-[2rem] object-cover border-6 md:border-9 border-white  transform rotate-2"
          width={slice.primary.image_three.dimensions?.width}
          height={slice.primary.image_three.dimensions?.height}
          placeholder="blur"
          blurDataURL={getBlurSvg}
        />

        {/* Image four */}
        <PrismicNextImage
          field={slice.primary.image_four}
          className="aspect-square relative shadow-lg min-w-[80%] md:min-w-[18.75rem] lg:min-w-[28rem] max-w-[29%] rounded-[1.875rem] md:-ml-[8.125rem] md:-mt-[8.3125rem] object-cover border-6 md:border-9 border-white transform rotate-9"
          width={slice.primary.image_four.dimensions?.width}
          height={slice.primary.image_four.dimensions?.height}
          placeholder="blur"
          blurDataURL={getBlurSvg}
        />
      </div>
    </section>
  );
};

export default ServicesHeroBlock;
