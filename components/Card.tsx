import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";

export const Card = ({
  className,
  children,
  ...otherProps
}: ComponentPropsWithoutRef<"div">) => {
  return (
    <div
      className={clsx(
        "bg-accent rounded-lg relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:-outline-offset-2 after:rounded-lg after:outline-black/80 after:pointer-events-none",
        className
      )}
      {...otherProps}
    >
      {children}
    </div>
  );
};
