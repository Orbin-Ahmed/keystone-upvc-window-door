import React from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
};

function CustomButton({ children, className }: ButtonProps) {
  return (
    <button
      className={twMerge(
        `flex bg-primary-color font-semibold text-white rounded-md px-4 py-2 hover:bg-primray-hover`,
        className
      )}
    >
      {children}
    </button>
  );
}

export default CustomButton;
