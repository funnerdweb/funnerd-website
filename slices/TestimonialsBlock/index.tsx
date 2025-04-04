import { FC, Fragment } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Card } from "@/components/Card";

/**
 * Props for `TestimonialsBlock`.
 */
export type TestimonialsBlockProps =
  SliceComponentProps<Content.TestimonialsBlockSlice>;

/**
 * Component for "TestimonialsBlock" Slices.
 */
const TestimonialsBlock: FC<TestimonialsBlockProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-16"
    >
      <div className="container">
        <div className="max-w-[40rem]">
          <h2 className="text-4xl lg:text-[5rem] font-black">
            {slice.primary.title}
          </h2>
        </div>

        <div className="mt-8 flex overflow-x-clip py-4 -my-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-8 flex-none animate-move-left [animation-duration:30s]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {slice.primary.testimonials.map((item, index) => (
                  <Card
                    key={index}
                    className="cursor-pointer max-w-md lg:max-w-2xl px-8 pt-8 pb-8 md:pt-12 md:px-10 lg:pt-16
                hover:rotate-3 transition duration-300"
                  >
                    <p className="text-[1.125rem] md:text-lg xl:text-2xl">
                      {item.content}
                    </p>
                    <div className="mt-4">
                      <h3 className="text-3xl font-black gradient">
                        {item.name}
                      </h3>
                      <p className="text-xl -tracking-[0.2px] font-medium text-black/50">
                        {item.location}
                      </p>
                    </div>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsBlock;
