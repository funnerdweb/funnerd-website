import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `FeaturesBlock`.
 */
export type FeaturesBlockProps =
  SliceComponentProps<Content.FeaturesBlockSlice>;

/**
 * Component for "FeaturesBlock" Slices.
 */
const FeaturesBlock: FC<FeaturesBlockProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-16 md:py-32"
    >
      <div className="container">
        <div className="text-center">
          <h2 className="text-4xl lg:text-[5rem] font-black">
            {slice.primary.title}
          </h2>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-x-4 gap-y-24 mt-24 place-content-center place-items-center">
          {slice.primary.features.map((item, index) => (
            <div className="relative z-0 p-8 max-w-xs group" key={index}>
              <div className="absolute size-16 rounded-xl bg-blue top-1.5 right-1.5 -z-10 blur-lg opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="absolute size-16 rounded-xl bg-blue group-hover:bg-blue/80 top-1.5 right-1.5 -z-10"></div>
              <div className="absolute inset-0 bg-accent border border-black  -z-10 rounded-2xl [mask-image:linear-gradient(225deg,transparent,transparent_40px,black_40px)]"></div>
              <div className="flex justify-center -mt-28">
                <div className="inline-flex relative">
                  <div className="absolute h-4 w-full top-[calc(100%+16px)] bg-zinc-950/70 group-hover:bg-zinc-950/30 transition duration-300 rounded-[100%] [mask-image:radial-gradient(closest-side,black,transparent)]"></div>
                  <PrismicNextImage
                    field={item.image}
                    className="object-cover cursor-pointer size-40 group-hover:-translate-y-6 transition duration-300"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-black gradient mt-12">
                {item.title}
              </h3>
              <p className="text-xl -tracking-[0.2px] mt-2">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesBlock;
