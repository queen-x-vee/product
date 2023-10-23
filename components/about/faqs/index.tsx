
import FaqDropdown from "@/components/micro/aboutFaq";
import React from "react";
const faqData = [
    {
      question: "What is Innovotio about?",
      answer: "React is a JavaScript library for building user interfaces.",
    },
    {
      question: "What is Innovotio about?",
      answer: "You can install React using Create React App or by adding it to an existing project.",
    },
    {
      question:"What is Innovotio about?",
      answer: "Tailwind CSS is a utility-first CSS framework for building responsive web designs.",
    },
  ];


const Faqs = () => {
  return (
    <div className="pt-14 lg:pt-32 ">
      <div className="pt-14 grid grid-cols-1 lg:grid-cols-3 gap-6 ">
        <div className="lg:col-span-1">
          <div>
            <p className="text-section font-medium text-base">FAQs</p>
            <h1 className="md:text-5xl text-3xl font-semibold text-white mb-7">
            We may have answered one of your many questions.
            </h1>
          </div>
        </div>
       
        <div className="lg:col-span-2">
          <div className="space-y-16">
          {faqData.map((faq, index) => (
        <FaqDropdown key={index} question={faq.question} answer={faq.answer} />
      ))}
          </div>
        </div>
      </div>
      <hr className="lg:mt-20 mt-14 opacity-10" />
    </div>
  );
};

export default Faqs;
