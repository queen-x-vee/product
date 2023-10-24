import { aboutCardProps } from "@/models/declaration";
import Image from "next/image";

const Values = ({
  text,
  title,
  icon,
  
}: aboutCardProps) => {
  return (
    <div className="space-y-3 p-5 lg:h-[240px] rounded-[20px] bg-hover ">

      <div className="flex-col items-start space-y-5 font-medium text-text">
        <Image src={icon} alt="Careers"  />
        <h3 className="xl:text-2xl text-xl">{title}</h3>
      </div>
      <p className="text-base xl:text-lg text-justify leading-6 text-[#D9D9D9E5]">{text}</p>
    </div>
  );
};

export default Values;
