import { KeyTextField } from "@prismicio/client";

interface ButtonProps {
  children: KeyTextField;
}

export const Button = ({ children }: ButtonProps) => {
  return (
    <button
      type="button"
      className="group px-4 py-2 cursor-pointer bg-black font-medium hover:bg-blue hover:border bover:border-black transition-colors duration-500 delay-[0.1s] ease-[cubic-bezier(0.19,1,0.22,1)]"
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
  );
};
