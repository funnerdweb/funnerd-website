import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `HomeFounderBlock`.
 */
export type HomeFounderBlockProps =
  SliceComponentProps<Content.HomeFounderBlockSlice>;

/**
 * Component for "HomeFounderBlock" Slices.
 */
const HomeFounderBlock: FC<HomeFounderBlockProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for home_founder_block (variation: {slice.variation}
      ) Slices
    </section>
  );
};

export default HomeFounderBlock;
