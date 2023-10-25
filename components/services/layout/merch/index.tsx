import Link from "next/link";
import Image from "next/image";
import Button from "@/components/micro/button";

const Merch = () => {
  return (
    <section className="lg:pt-20 pt-14 text-text">
      <div
        className="flex lg:flex-row flex-col lg:space-x-5 justify-evenly lg:items-center"
        id="merch"
      >
        <div className=" flex flex-col">
          <h4 className="text-section font-medium">Merchandising</h4>
          <h1 className="pt-1 font-medium xl:text-4xl md:text-3xl text-2xl lg:max-w-lg">
            Seamless promotional merchandise for brands
          </h1>
          <p className="pt-5 text-base text-justify text-texts lg:max-w-sm xl:max-w-lg">
            We specialize in creating and providing branded merchandise and
            promotional products for technology companies and their communities.
            Our primary focus is to design and produce merchandise that reflects
            tech companies' brand identity, values, and culture.
          </p>

          <Link href="/services/merchandise" target="_blank">
            <Button className="my-5">Order Merchandise</Button>
          </Link>
        </div>
        <div className="pt-12 hidden sm:block">
          <Image
            src="../../../../assets/services/Community2.svg"
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

export default Merch;
