import { aboutCardProps } from "@/models/declaration";
import Image from "next/image";

const Values = ({
  text,
  title,
  icon,
  
}: aboutCardProps) => {
  return (
    <div className="space-y-5 p-5 lg:h-[215px] rounded-[20px] bg-hover ">

      <div className="flex-col items-start space-y-5 font-medium text-text">
        <Image src={icon} alt="Careers"  />
      </div>
      <p className="text-base xl:text-lg text-justify leading-6 text-texts">{text}</p>
    </div>
  );
};

export default Values;
