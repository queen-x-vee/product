import React from "react";
import Link from "next/link";
import Button from "@/components/micro/button";
import Image from "next/image";

const Consultancy = () => {
  return (
    <section className="pt-14 lg:pt-20">
      <div
        className="flex lg:flex-row flex-col justify-between lg:items-center text-white"
        id="consultancy"
      >
        <div className="">
          <h4 className="text-section font-medium">Consultancy</h4>
          <h1 className="pt-1 font-medium xl:text-4xl md:text-3xl text-2xl md:max-w-md">
            Give your business that extra push
          </h1>
          <p className="pt-5 text-base text-justify text-texts lg:max-w-sm xl:max-w-lg">
            We offer business consultation sessions to aid project launch,
            business launch and staffing requirements for SMEs, startups and
            corporations.
          </p>
          <Link href="/business" target="_blank">
            <Button className="my-6">Book A Session </Button>
          </Link>
        </div>
        <div>
          <Image
            src="../../../../assets/services/consultancy.svg"
            alt="community"
            width={590}
            height={400}
          />
        </div>
      </div>
      <hr className="lg:mt-20 mt-14 opacity-10" />
    </section>
  );
};

export default Consultancy;
