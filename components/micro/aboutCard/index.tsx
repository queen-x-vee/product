import { aboutCardProps } from "@/models/declaration";
import Image from "next/image";

const AboutCard = ({
  text,
  title,
  icon,
}: aboutCardProps) => {
  return (
    <div className="space-y-5 p-8 rounded-[20px] bg-[#182222] ">

      <div className="flex-col items-start space-y-2 text-lg font-medium text-text">
        <div className="text-section">{icon}</div>
        <h3>{title}</h3>
      </div>
      <p className="text-sm lg:text-[18px] text-justify leading-6 text-[#D9D9D9E5]">{text}</p>
    </div>
  );
};

export default AboutCard;
