import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { staticBlurDataUrl } from "@/lib/staticBlurUrl";
import { Plus } from "lucide-react";

/**
 * Props for `AboutFunnerdBlock`.
 */
export type AboutFunnerdBlockProps =
  SliceComponentProps<Content.AboutFunnerdBlockSlice>;

/**
 * Component for "AboutFunnerdBlock" Slices.
 */
const AboutFunnerdBlock: FC<AboutFunnerdBlockProps> = ({ slice }) => {
  const getBlurSvg = staticBlurDataUrl();

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-16"
    >
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16">
          <div className="">
            <PrismicNextImage
              field={slice.primary.image}
              className="rounded-lg size-full object-contain"
              width={slice.primary.image.dimensions?.width}
              height={slice.primary.image.dimensions?.height}
              placeholder="blur"
              blurDataURL={getBlurSvg}
            />
          </div>
          <div className="flex flex-col justify-center items-center gap-y-4 md:gap-y-8 max-w-[32rem] mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black">
              {slice.primary.title}
            </h2>
            <p className="text-[1.125rem] md:text-lg lg:text-2xl">
              {slice.primary.content}
            </p>

              <div className="grid grid-cols-3 gap-6">
                {slice.primary.info.map((item, index) => (
                  <div className="flex flex-col justify-center" key={index}>
                    <h3 className="text-5xl xl:text-7xl font-black gradient">{item.text}</h3>
                    <p className="text-[1rem] md:text-xl font-medium">{item.subtext}</p>
                  </div>
                ))}
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFunnerdBlock;
