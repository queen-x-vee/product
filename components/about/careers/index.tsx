import Image from "next/image";
import Button from "@/components/micro/button";
import Career from "../../../public/assets/about/man.png";
import { GiPadlock } from "react-icons/gi";

const Careers = () => {
  return (
    <div className="pt-14 lg:pt-20">
      <div className="flex flex-col lg:justify-between lg:items-end lg:flex-row">
        <div className="space-y-3 max-w-[752px]">
          <div>
            <p className="text-section font-medium text-sm lg:text-base">
              Careers
            </p>
            <h2 className=" lg:text-4xl md:text-3xl text-2xl xl:text-5xl font-medium max-w-2xl text-white">
              This is the ideal moment to join us in shaping Innovotio
            </h2>
          </div>
        </div>
        <div className="lg:pt-0 pt-5">
          <Button className="flex items-center  underline-hover">
            Coming Soon
            <span className="ml-2 text-lg">{<GiPadlock />}</span>
          </Button>
        </div>
      </div>
      <div className="pt-10">
        <Image
          src={Career}
          alt="Careers"
          layout="responsive"
          width={1000}
          height={600}
        />
      </div>
      <hr className="lg:mt-20 mt-14 opacity-10" />
    </div>
  );
};

export default Careers;
