import React from "react";
import { buttonProps} from "@/models/declaration";

const Button = ({ className, children, onClick, disabled }: buttonProps) => {
  return (
    <button className={`rounded-lg p-3 text-[#FCFCFC] bg-[#F2F4FC24] font-medium  ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
