import React, { ComponentProps } from "react";

type ButtonProps = {
  children: React.ReactNode;
};

function CustomButton({ children }: ButtonProps) {
  return (
    <button className="flex bg-primary-color font-semibold text-white rounded-md px-4 py-2 hover:bg-primray-hover">
      {children}
    </button>
  );
}

export default CustomButton;
