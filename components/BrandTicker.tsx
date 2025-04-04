"use client";

import React, { Fragment } from "react";
import { motion } from "motion/react";
import { Content, GroupField, KeyTextField } from "@prismicio/client";
import { Simplify } from "@/prismicio-types";

type IBrandTickerProps = {
  text: KeyTextField;
  data: GroupField<Simplify<Content.HeroSectionSliceDefaultPrimaryExamsItem>>;
};

export function BrandTicker({ text, data }: IBrandTickerProps) {
  return (
    <div className="overflow-x-clip pt-16">
      <h3 className="text-xl font-medium font-humanist text-center text-black/50">{text}</h3>

      <div className="flex overflow-hidden mt-8 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <motion.div
          animate={{
            x: "-50%",
          }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex flex-none gap-24 pr-24"
        >
          {Array.from({ length: 2 }).map((_, index) => (
            <Fragment key={index}>
              {data.map((item, index) => (
                <h3 key={index} className="text-2xl font-black">{item.name}</h3>
              ))}
            </Fragment>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
