import FaqDropdown from "@/components/micro/about/faq";
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
            <h1 className=" lg:text-4xl md:text-3xl text-2xl xl:text-5xl max-w-md font-medium text-text">
              Frequently Asked Questions
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
