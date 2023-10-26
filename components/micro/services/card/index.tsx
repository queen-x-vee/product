import { CardProps } from "@/models/declaration";
import Image from "next/image";

const Card = ({
  text,
  title,
  src
  
}: CardProps) => {
  return (
    <div className="pt-2 flex items-start gap-3">
       <Image src={src} alt="Careers" />
      <div className="flex-col items-start space-y-4 font-medium text-text">
      <p className="text-base md:text-xl text-justify leading-6 md:leading-[28px] font-semibold">{title}</p>
      <p className="text-base font-normal md:text-base leading-7">{text}</p>
      </div>
    </div>
  );
};

export default Card;
