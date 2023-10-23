import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/micro/button";
import  Career from '../../../public/assets/about/image 16.png'

const Careers = () => {
  return (
    <div className="pt-14 lg:pt-32 ">
     

        <div className="flex flex-col lg:justify-between lg:items-end lg:flex-row mb-12 lg:mb-14">
        <div className="space-y-5 max-w-[752px]">
          <p className="text-section font-medium text-base">Careers</p>
          <h2 className="md:text-5xl text-3xl font-semibold text-white mb-7">
            This is the ideal moment to join us in shaping Innovotio.
            </h2>
          
        </div>
        <div className="pt-5">
          <Link href="/business" legacyBehavior>
            <a target="_blank">
              <Button className=""> Explore Our Services</Button>
            </a>
          </Link>
        </div>
      </div>
       
        <div className="lg:col-span-2">
        <Image src={Career} alt="Careers" layout="responsive" width={1000} height={600} />
        </div>
        <hr className="lg:mt-20 mt-14 opacity-10" />
    </div>
  );
};

export default Careers;
