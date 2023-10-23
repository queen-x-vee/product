import { icon } from "@/models/declaration";

const Index = ({ icon, text }:icon) => {
  return (
    <div className=" text-text lg:mb-7 max-w-sm  mb-5 lg:flex flex flex-row lg:flex-row">
      <div className="text-white">{icon}</div>
      <p className="flex items-start justify-start text-start max-w-xs md:text-lg text-base font-light pl-3">
        {text}
      </p>
    </div>
  );
};

export default Index;