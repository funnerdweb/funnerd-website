import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Button } from "@/components/Button";
import { PrismicNextImage } from "@prismicio/next";
import { staticBlurDataUrl } from "@/lib/staticBlurUrl";

/**
 * Props for `HeroBlock`.
 */
export type HeroBlockProps = SliceComponentProps<Content.HeroBlockSlice>;

/**
 * Component for "HeroBlock" Slices.
 */
const HeroBlock: FC<HeroBlockProps> = ({ slice }) => {
    const getBlurSvg = staticBlurDataUrl();
  
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="pt-32 pb-8 md:pb-16 bg-[radial-gradient(ellipse_100%_50%_at_bottom_left,#183EC2,#EAEEFE_66%)]"
    >
      <div className="container">
        <div className="max-w-[32rem] mx-auto">
          <div className="flex flex-col items-center text-center space-y-8 md:space-y-8">
            <h1 className="text-[2.625rem] lg:text-[5rem] leading-[1em] font-black">
              {slice.primary.title}
            </h1>

            <p className="text-[1.25rem] md:text-lg lg:text-2xl -leading-[0.2px] font-medium">
              {slice.primary.content}
            </p>

            <Button variant="primary" link={slice.primary.btn_link}>
              {slice.primary.btn_text}
            </Button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 px-4 md:px-0 justify-center items-center gap-4 lg:gap-8 py-16">
        {slice.primary.images.map((item, index) => (
          <div className="aspect-square md:aspect-auto" key={index}>
            <PrismicNextImage
              field={item.image}
              className="rounded-lg border border-black size-full object-cover object-center"
              width={item.image.dimensions?.width}
              height={item.image.dimensions?.height}
              placeholder="blur"
              blurDataURL={getBlurSvg}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroBlock;
