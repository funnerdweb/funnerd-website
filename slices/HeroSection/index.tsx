import { staticBlurDataUrl } from "@/lib/staticBlurUrl";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import { Expand } from "lucide-react";
import { FC } from "react";

/**
 * Props for `HeroSection`.
 */
export type HeroSectionProps = SliceComponentProps<Content.HeroSectionSlice>;

/**
 * Component for "HeroSection" Slices.
 */
const HeroSection: FC<HeroSectionProps> = ({ slice }) => {
  const getBlurSvg = staticBlurDataUrl();

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="lg:h-screen pt-32 pb-16 bg-[radial-gradient(ellipse_100%_50%_at_bottom_left,#183EC2,#EAEEFE_66%)]"
    >
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center gap-y-6 ">
            <div className="text-sm inline-flex w-[fit-content] bg-blue text-white border border-black px-3 py-1 rounded-full tracking-tight">
              {slice.primary.subtitle}
            </div>
            <h1 className="tracking-tighter text-4xl md:text-6xl font-bold  bg-gradient-to-b from-black to-blue text-transparent bg-clip-text">
              {slice.primary.title}
            </h1>
            <p className="text-xl tracking-tight">{slice.primary.content}</p>

            {/* button */}
            <div className="w-[fit-content]">
              {/* <Button link={}>{slice.primary.link_text}</Button> */}
            </div>
          </div>

          <div className="flex flex-col">
            <div className="relative w-full h-full max-h-[37.5rem] rounded-lg bg-blue bg-cover bg-center overflow-hidden">
              {/* Image */}
              <PrismicNextImage
                field={slice.primary.image1}
                className="h-[inherit] w-full object-cover rounded-lg"
                placeholder="blur"
                blurDataURL={getBlurSvg}
              />
              <div className="container">
                <div className="absolute left-4 top-4">
                  <div className="flex items-center space-x-2 py-1 px-3 backdrop-blur-md text-white bg-black/30 rounded-full">
                    <div className="relative bg-green-500 size-4 rounded-full">
                      <div className="bg-green-500 absolute inset-0 rounded-full animate-ping"></div>
                    </div>
                    <span>04:59</span>
                  </div>
                </div>

                {/* Expand icon */}
                <div className="absolute top-4 right-4">
                  <div className="size-10 rounded-full backdrop-blur-md bg-black/30 px-2 flex items-center justify-center">
                    <Expand className="text-white" />
                  </div>
                </div>

                <div className="absolute left-4 bottom-4 w-full">
                  <div className="w-[90%] md:w-[95%] h-24 md:backdrop-blur-md bg-black/30 rounded-lg">
                    <div className="flex flex-col gap-y-2 p-2">
                      <span className="text-white pb-1 px-3 bg-black w-[fit-content] rounded-full">
                        Attendees: 12
                      </span>
                      {/* Images */}
                      <div className="flex -space-x-3 md:space-x-4 lg:-space-x-1 xl:space-x-2 2xl:space-x-4">
                        {slice.primary.items.map((item, index) => (
                          <PrismicNextImage
                            key={index}
                            className="inline-block object-cover object-top h-10 w-10 rounded-full ring-2 ring-white bg-[#FFC7D6]"
                            field={item.image}
                            width={item.image.dimensions?.width}
                            height={item.image.dimensions?.height}
                            placeholder="blur"
                            blurDataURL={getBlurSvg}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
