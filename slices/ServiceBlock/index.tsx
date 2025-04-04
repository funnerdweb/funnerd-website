import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { staticBlurDataUrl } from "@/lib/staticBlurUrl";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import { FC } from "react";

/**
 * Props for `ServiceBlock`.
 */
export type ServiceBlockProps = SliceComponentProps<Content.ServiceBlockSlice>;

/**
 * Component for "ServiceBlock" Slices.
 */
const ServiceBlock: FC<ServiceBlockProps> = ({ slice }) => {
  const getBlurSvg = staticBlurDataUrl();

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-16"
    >
      <div className="container lg:max-w-5xl">
        <div className="text-center">
          <h2 className="text-4xl lg:text-[5rem] font-black">
            {slice.primary.title}
          </h2>
        </div>

        {/* services */}
        <div className="flex flex-col gap-16 mt-8">
          {slice.primary.services.map((item, index) => (
            <Card
              key={index}
              className="px-4 pt-8 pb-0 md:px-8 md:pt-12 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(96px + ${index * 0}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <h3 className="text-3xl font-extrabold bg-gradient-to-r from-blue to-black text-transparent bg-clip-text mt-4">
                    {item.title}
                  </h3>
                  <p className="text-lg md:text-xl font-medium -tracking-[0.2px] mt-4">
                    {item.description}
                  </p>

                  <div className="w-full mt-4">
                    <Button variant="primary" link={item.button_link}>{item.button_text}</Button>
                  </div>
                </div>
                <div className="relative">
                  <PrismicNextImage
                    field={item.image}
                    className="mt-8 -mb-4 md:mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                    width={item.image.dimensions?.width}
                    height={item.image.dimensions?.height}
                    placeholder="blur"
                    blurDataURL={getBlurSvg}
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceBlock;
