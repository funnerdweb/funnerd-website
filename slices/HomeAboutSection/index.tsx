"use client";
import { Logo } from "@/components/Logo";
import { Orbit } from "@/components/Orbit";
import { staticBlurDataUrl } from "@/lib/staticBlurUrl";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import { CircleCheck } from "lucide-react";
import { motion } from "motion/react";
import { FC } from "react";

/**
 * Props for `HomeAboutSection`.
 */
export type HomeAboutSectionProps =
  SliceComponentProps<Content.HomeAboutSectionSlice>;

/**
 * Component for "HomeAboutSection" Slices.
 */
const HomeAboutSection: FC<HomeAboutSectionProps> = ({ slice }) => {
  const getBlurSvg = staticBlurDataUrl();

  const rotateArray = new Map([
    [0, 0],
    [1, 60],
    [2, 120],
    [3, 180],
    [4, 240],
    [5, 300],
    [6, 360],
  ]);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-16 "
    >
      <div className="container overflow-hidden">
        <div className="max-w-[40rem]">
          <h2 className="text-4xl lg:text-[5rem] font-black">
            {slice.primary.title}
          </h2>
        </div>
        {/* text block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <ul className="mt-12 flex flex-col gap-8">
              {slice.primary.features.map((item, index) => (
                <li key={index} className="flex items-center gap-4">
                  <CircleCheck className="size-6 bg-blue text-white rounded-full" />
                  <span className="text-[1.125rem] md:text-lg lg:text-2xl -tracking-[0.2px]">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-16">
              {/* <Button link={""}>Try it now</Button> */}
            </div>
          </div>

          {/* Wheel of logos */}
          <div className="flex justify-center flex-shrink-0">
            <div className="size-[270px] md:size-[450px] relative flex flex-shrink-0 z-[2]">
              <div className="absolute inset-0">
                <Orbit className="size-full border-[3px] border-black" />
              </div>
              <div className="absolute-center">
                <Orbit className="size-[180px] md:size-[300px]" />
              </div>
              <div className="absolute-center">
                <Logo className="size-24" />
              </div>
              {slice.primary.logos.map((item, index) => {
                const rotate = rotateArray.get(index) ?? 0;
                return (
                  <motion.div
                    key={index}
                    className=" absolute inset-0"
                    initial={{
                      rotate: rotate,
                    }}
                    animate={{
                      rotate: [
                        rotate,
                        rotate + 60,
                        rotate + 60,
                        rotate + 120,
                        rotate + 120,
                        rotate + 180,
                        rotate + 180,
                        rotate + 240,
                        rotate + 240,
                        rotate + 360,
                        rotate + 360,
                      ],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 10,
                    }}
                  >
                    <motion.div
                      className="inline-flex size-10 md:size-12 items-center border border-black bg-black rounded-full justify-center absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-0"
                      initial={{
                        translate: "-50%, -50%",
                        rotate: -rotate,
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 10,
                      }}
                      animate={{
                        rotate: [
                          -rotate,
                          -rotate - 60,
                          -rotate - 60,
                          -rotate - 120,
                          -rotate - 120,
                          -rotate - 180,
                          -rotate - 180,
                          -rotate - 240,
                          -rotate - 240,
                          -rotate - 360,
                          -rotate - 360,
                        ],
                      }}
                    >
                      <PrismicNextImage
                        field={item.logo}
                        className="size-8 md:size-10 rounded-full"
                        placeholder="blur"
                        blurDataURL={getBlurSvg}
                      />
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAboutSection;
