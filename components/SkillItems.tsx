import { Simplify } from "@/prismicio-types";
import { Content, GroupField } from "@prismicio/client";
import clsx from "clsx";
import { Fragment } from "react";

type ISkillItems = {
  data: GroupField<
    Simplify<Content.FounderSectionSliceDefaultPrimarySkillsItem>
  >;
  className?: string;
  itemsWrapperClassName?: string;
};

export const SkillItems = ({ data, className, itemsWrapperClassName }: ISkillItems) => {
  return (
    <div
      className={clsx(
        "flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className
      )}
    >
      <div
        className={clsx(
          "flex flex-none py-0.5 gap-4 pr-6",
          itemsWrapperClassName
        )}
      >
        {[...new Array(2)].fill(0).map((_, index) => (
          <Fragment key={index}>
            {data.map((item, index) => (
              <div
                className="inline-flex items-center gap-4 py-2 px-3 outline-2 outline-blue rounded-lg bg-white"
                key={index}
              >
                {/* <span className="text-blue">&bull;</span> */}
                <span className="text-lg xl:text-2xl font-semibold">
                  {item.text}
                </span>
              </div>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
};
