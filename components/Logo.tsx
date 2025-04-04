import clsx from "clsx";
import { HTMLAttributes } from "react";
import logoImage from "../public/assets/funnerd-logo.png";
import Image from "next/image";

type LogoProps = {
  className: string;
  style?: HTMLAttributes<HTMLDivElement>;
};

export const Logo = ({ className, style }: LogoProps) => {
  return (
    <div className={clsx("relative size-10", className)} style={style}>
      <Image
        src={logoImage}
        alt="funnerd-logo"
        // style={{
        //   maskImage: `url(${logoImage.src})`,
        //   WebkitMaskImage: `url(${logoImage.src})`,
        // }}
      />
    </div>
  );
};
