"use client";
import { Button } from "@/components/Button";
import { ValuesCard } from "@/components/ValuesCard";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { FC } from "react";

/**
 * Props for `ValuesBlock`.
 */
export type ValuesBlockProps = SliceComponentProps<Content.ValuesBlockSlice>;

/**
 * Component for "ValuesBlock" Slices.
 */
const ValuesBlock: FC<ValuesBlockProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-16 overflow-hidden"
    >
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-8 xl:gap-16">
          <div className="flex flex-col justify-center text-center md:text-left gap-y-8 mb-4">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black max-w-[45rem] mx-auto">
              {slice.primary.title}
            </h2>
            <Button link={slice.primary.btn_link}>
              {slice.primary.btn_text}
            </Button>
          </div>
          <div className="[mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
            <div className="h-[70dvh] lg:h-[800px] overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8 lg:gap-4 xl:gap-8">
                <ValuesCard data={slice.primary.values} />
                <ValuesCard
                  data={slice.primary.values.slice().reverse()}
                  reverse
                  className="hidden md:flex"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesBlock;
