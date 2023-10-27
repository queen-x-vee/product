import FaqDropdown from "@/components/micro/about/faq";
const Data = [
  {
    question: "What's the exciting world of Innovotio all about?",
    answer: `Innovotio is a tech organization that specializes in connecting tech talent across all levels of experience to organizations of all sizes to achieve their business goals. We offer up-to-date training programs for tech beginners or young tech talents looking to upskill and provide additional services to organizations in forms of business consultancy, tech events management & branded merchandise.`,
  },
  {
    question: "Tell me about the courses offered at Innovotio?",
    answer:
      "At Innovotio, we offer a diverse range of training programs. You can explore courses in Development, Design, Product, Marketing, Management, Analysis, Security, and Testing. Our team of professionals is committed to equipping you with the skills needed to land your first job in the tech industry.",
  },
  {
    question: "Can I create eye-catching branded merchandise with Innovotio?",
    answer:
      "Absolutely! Innovotio's team is here to assist you in designing and producing merchandise tailored to your tech events and branding requirements. Whether you're hosting conferences, workshops, or promotional campaigns, we can help you establish a unique identity..",
  },
  {
    question: "Can Innovotio work its magic in managing my event?",
    answer:
      "You bet! At Innovotio, we ensure your event goes off without a hitch giving your guests an unforgettable experience.",
  },
  {
    question: "Do you offer top-notch recruitment services?",
    answer:
      "Yes! Innovotio's dedicated human resource team is ready to take the hassle out of your recruitment process. We'll meticulously vet and provide the best-fit tech talents for your organization.",
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
