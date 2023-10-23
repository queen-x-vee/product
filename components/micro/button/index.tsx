import React from "react";
import { button} from "@/models/declaration";

const Button = ({ className, children, disabled }: button) => {
  return (
    <button className={`rounded-lg p-3 text-[#FCFCFC] bg-[#F2F4FC24] font-medium ${className}`}>
      {children}
    </button>
  );
};

export default Button;
