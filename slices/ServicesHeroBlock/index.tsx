import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ServicesHeroBlock`.
 */
export type ServicesHeroBlockProps =
  SliceComponentProps<Content.ServicesHeroBlockSlice>;

/**
 * Component for "ServicesHeroBlock" Slices.
 */
const ServicesHeroBlock: FC<ServicesHeroBlockProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for services_hero_block (variation:{" "}
      {slice.variation}) Slices
    </section>
  );
};

export default ServicesHeroBlock;
