import React from "react";
import Image from "next/image";
import microphone from "../../../public/assets/program/microphone.svg";
import buzz from "../../../public/assets/program/buzz.svg";
import light from "../../../public/assets/program/light.svg";
import star from "../../../public/assets/program/star.svg";
import Vision from "../vision";

const Header = () => {
  return (
    <header className="lg:pt-5 text-white font-medium">
      <div className="flex justify-between items-center">
        <div>
          <Image
            src={star}
            alt=""
            width={34}
            height={56}
            className="relative top-5 right-4"
          />
          <p className="text-section lg:text-base text-sm font-medium">
            Programs Training
          </p>

          <h1 className="lg:text-4xl xl:text-6xl leading-8 text-3xl max-w-xs sm:max-w-4xl">
            Skill up with our talent building and management.
          </h1>
          <p className="py-3 leading-7 lg:text-base text-sm text-dark max-w-xl">
            We offer tech courses to prospective talents, by our own highly
            skilled tech professionals and fast track landing you a new job
          </p>
        </div>
        <div className="relative top-6 pl-5 justify-between w-full max-w-xs hidden lg:flex">
          <Image src={microphone} alt="microphone" width={25} height={45} />
          <Image
            src={buzz}
            alt="buzz"
            width={25}
            height={45}
            className="relative top-12"
          />
          <Image
            src={light}
            alt="light"
            width={50}
            height={41}
            className="relative bottom-8"
          />
        </div>
      </div>
      <Vision />
      <hr className="lg:mt-20 mt-14 opacity-10" />
    </header>
  );
};

export default Header;