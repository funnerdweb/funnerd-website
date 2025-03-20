import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `HomeAboutSection`.
 */
export type HomeAboutSectionProps =
  SliceComponentProps<Content.HomeAboutSectionSlice>;

/**
 * Component for "HomeAboutSection" Slices.
 */
const HomeAboutSection: FC<HomeAboutSectionProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for home_about_section (variation: {slice.variation}
      ) Slices
    </section>
  );
};

export default HomeAboutSection;
