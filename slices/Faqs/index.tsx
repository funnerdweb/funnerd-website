"use client";
import { FC, useCallback, useState } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { AnimatePresence, motion } from "motion/react";
import clsx from "clsx";
import { Plus } from "lucide-react";

/**
 * Props for `Faqs`.
 */
export type FaqsProps = SliceComponentProps<Content.FaqsSlice>;

/**
 * Component for "Faqs" Slices.
 */
const Faqs: FC<FaqsProps> = ({ slice }) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleClick = useCallback(
    (index: number) => {
      setSelectedIndex(selectedIndex === index ? -1 : index);
    },
    [selectedIndex]
  );

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-16"
    >
      <div className="container">
        <div className="max-w-[40rem] mx-auto text-center mb-4 md:mb-8">
          <h2 className="text-4xl lg:text-[5rem] font-black">
            {slice.primary.title}
          </h2>
        </div>

        <div className="flex flex-col  gap-x-8 gap-y-4">
          {/* text */}
          <div className="w-full text-center">
            <div className="max-w-xl mx-auto py-8">
              <h3 className="text-xl">
                {slice.primary.description}
              </h3>
            </div>
          </div>

          <div className="w-full">
            <div className="flex flex-col gap-6 max-w-3xl mx-auto py-8 px-4 md:px-8 border bg-accent rounded-lg">
              {slice.primary.faqs.map((item, index) => (
                <div
                  key={index}
                  className="border-b border-b-blue pt-4 pb-8"
                >
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => handleClick(index)}
                  >
                    <h3 className="text-[1.25rem] md:text-lg lg:text-2xl -leading-[0.2px] font-medium">
                      {item.title}
                    </h3>
                    <Plus
                      className={clsx(
                        "bg-blue text-white border border-black p-1 rounded-full text-green flex-shrink-0 transition duration-300",
                        selectedIndex === index && "rotate-45"
                      )}
                    />
                  </div>
                  <AnimatePresence>
                    {selectedIndex === index && (
                      <motion.div
                        className={clsx("overflow-hidden")}
                        initial={{ height: 0, marginTop: 0 }}
                        animate={{ height: "auto", marginTop: 24 }}
                        exit={{ opacity: 0, marginTop: 0 }}
                      >
                        <p className="text-xl -tracking-[0.2px] text-black">
                          {item.content}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
