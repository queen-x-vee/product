import { serviceCardProps } from "@/models/declaration";
import Image from "next/image";

const ServiceCard = ({
  text,
  title,
  icon,
  className,
  illustration,
  illustration2,
}: serviceCardProps) => {
  return (
    <div className="space-y-5 p-5 rounded-2xl bg-[#182222] ">
      <div className="flex flex-col lg:flex-row items-center justify-center space-x-5">
        <img className={`${className}`} src={illustration} alt="merchandise"></img>
        {illustration2 && <img className={`${className}`} src={illustration2} alt="merchandise"></img>}
      </div>
      <div className="flex items-center space-x-2 text-lg font-medium text-text">
        <div className="text-section">{icon}</div>
        <h3>{title}</h3>
      </div>
      <p className="text-sm lg:text-base text-justify leading-8 text-[#D9D9D9E5]">{text}</p>
    </div>
  );
};

export default ServiceCard;
