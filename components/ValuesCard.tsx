"use client";
import { Simplify, ValuesBlockSliceDefaultPrimaryValuesItem } from "@/prismicio-types";
import clsx from "clsx";
import { Award } from "lucide-react";
import { motion } from "motion/react";
import { Fragment } from "react";

type ValuesCardProps = {
  data: Simplify<ValuesBlockSliceDefaultPrimaryValuesItem>[];
  className?: string;
  reverse?: boolean;
};

export function ValuesCard({ data, className, reverse }: ValuesCardProps) {
  const iconsArray = new Map([
    [0, Award],
    [1, Award],
    [2, Award],
    [3, Award],
    [4, Award],
    [5, Award],
  ]);

  return (
    <motion.div
    initial={{
        y: reverse ? "-50%" : 0
    }}
      animate={{
        y: reverse ? 0 : "-50%",
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        ease: "linear",
      }}
      className={clsx("flex flex-col gap-4 mb-4", className)}
    >
      {Array.from({ length: 2 }).map((_, i) => (
        <Fragment key={i}>
          {data.map((item, index) => {
            const IconComponent = iconsArray.get(index);
            return (
              IconComponent && (
                <div
                  key={index}
                  className="border-2 rounded-lg mb-4 px-4 py-8 flex flex-col justify-between items-start gap-y-4"
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue text-white border border-black shrink-0">
                    <IconComponent className="w-6 h-6 min-w-min min-h-min" />
                  </div>
                  <h3 className="text-2xl font-black gradient">{item.title}</h3>
                  <p className="text-xl -tracking-[0.2px]">{item.content}</p>
                </div>
              )
            );
          })}
        </Fragment>
      ))}
    </motion.div>
  );
}
