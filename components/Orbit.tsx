import clsx from "clsx";
import React from "react";

export function Orbit({ className }: { className: string }) {
  return (
    <div className={clsx("border border-black rounded-full", className)}></div>
  );
}
