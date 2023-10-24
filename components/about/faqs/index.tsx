import FaqDropdown from "@/components/micro/about/faq";
import React from "react";
const Data = [
  {
    question: "What is Innovotio about?",
    answer: "nil",
  },
  {
    question: "What is Innovotio about?",
    answer: "nil",
  },
  {
    question: "What is Innovotio about?",
    answer: "nil",
  },
  {
    question: "What is Innovotio about?",
    answer: "nil",
  },
  {
    question: "What is Innovotio about?",
    answer: "nil",
  },
];

const Faqs = () => {
  return (
    <div className="pt-14 lg:pt-20 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 ">
        <div className="lg:col-span-1">
          <div>
            <p className="text-section font-medium text-sm lg:text-base">
              FAQs
            </p>
            <h1 className="xl:text-4xl md:text-3xl text-2xl max-w-md font-medium text-white">
              We may have answered one of your many questions.
            </h1>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="space-y-5 pt-6">
            {Data.map((faq, index) => (
              <FaqDropdown
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </div>
      <hr className="lg:mt-20 mt-14 opacity-10" />
    </div>
  );
};

export default Faqs;
