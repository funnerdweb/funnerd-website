import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { staticBlurDataUrl } from "@/lib/staticBlurUrl";
import { Button } from "@/components/Button";

/**
 * Props for `HomeFounderBlock`.
 */
export type HomeFounderBlockProps =
  SliceComponentProps<Content.HomeFounderBlockSlice>;

/**
 * Component for "HomeFounderBlock" Slices.
 */
const HomeFounderBlock: FC<HomeFounderBlockProps> = ({ slice }) => {
  const getBlurSvg = staticBlurDataUrl();

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-16"
    >
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16">
          <div className="aspect-square">
            <PrismicNextImage
              field={slice.primary.image}
              className="rounded-lg size-full object-cover object-top"
              width={slice.primary.image.dimensions?.width}
              height={slice.primary.image.dimensions?.height}
              placeholder="blur"
              blurDataURL={getBlurSvg}
            />
          </div>
          <div className="flex flex-col justify-center gap-y-4 md:gap-y-8 max-w-[40rem] mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black">
              {slice.primary.title}
            </h2>
            <p className="text-[1.125rem] md:text-lg xl:text-2xl">
              {slice.primary.content}
            </p>
            <Button variant="primary" link={slice.primary.btn_link}>
              {slice.primary.btn_text}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFounderBlock;
