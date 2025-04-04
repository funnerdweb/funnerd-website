import { KeyTextField, LinkField } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { cva } from "class-variance-authority";

interface ButtonProps {
  children: KeyTextField;
  link: LinkField | null | undefined;
  variant?: "primary" | "secondary";
  className?: string;
}

const classes = cva(
  "group px-4 h-12 w-full md:w-auto cursor-pointer  font-medium  hover:border bover:border-black transition-colors duration-500 delay-[0.1s] ease-[cubic-bezier(0.19,1,0.22,1)]",
  {
    variants: {
      variant: {
        primary: "bg-blue hover:bg-black",
        secondary: "bg-black hover:bg-green-500",
      },
    },
  }
);

export const Button = ({ children, link, variant, className }: ButtonProps) => {
  return (
    <PrismicNextLink field={link}>
      <button
        type="button"
        // className="group px-4 h-12 w-full md:w-auto cursor-pointer bg-blue font-medium hover:bg-black hover:border bover:border-black transition-colors duration-500 delay-[0.1s] ease-[cubic-bezier(0.19,1,0.22,1)]"
        className={classes({ variant, className })}
      >
        <div className="overflow-hidden relative">
          <p className="!text-white text-[1.125rem] tracking-tight group-hover:translate-y-[-25px] duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
            {children}
          </p>
          <p
            aria-hidden
            className="absolute text-[1.125rem] tracking-tight left-0 top-5 text-white group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]"
          >
            {children}
          </p>
        </div>
      </button>
    </PrismicNextLink>
  );
};
