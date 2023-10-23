import React, { useState } from "react";
import { aboutFaqProps } from "@/models/declaration";

const FaqDropdown = ({ question, answer }: aboutFaqProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-6">
      <button
        className="flex justify-between w-full p-6 rounded-2xl text-white/90 bg-hover hover:bg-gray-300"
        onClick={toggleDropdown}
      >
        <p>{question}</p>
        <span className={isOpen ? "transform rotate-180" : ""}>▼</span>
      </button>
      {isOpen && (
        <div className="p-3 bg-gray-100">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FaqDropdown;
