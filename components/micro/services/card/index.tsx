import { CardProps } from "@/models/declaration";
import Image from "next/image";

const Card = ({
  text,
  title,
  src
  
}: CardProps) => {
  return (
    <div className="mt-6 flex justify-between items-start gap-4">

      
       <Image src={src} alt="Careers" />
      
      <div className="flex-col items-start space-y-4 font-medium text-text">
      <p className="text-[19px] md:text-[24px] text-justify leading-6 md:leading-[28px] font-semibold">{title}</p>
      <p className="text-base font-normal md:text-xl md:leading-[30px]">{text}</p>
      </div>
    </div>
  );
};

export default Card;
