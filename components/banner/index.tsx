import Link from "next/link";
import Button from "../micro/button";

const Banner = () => {
  return (
    <section className="pt-14 lg:pt-20">
      <div className="flex-col lg:flex-row lg:items-center lg:justify-around text-white flex">
        <div className="space-y-5">
          <h1 className=" text-3xl font-medium max-w-md lg:max-w-xl lg:text-5xl tracking-wide">
            Get top quality services at Innovotio
          </h1>
          <p className="text-base text-[#A3A3A3] max-w-md md:max-w-xl lg:max-w-md w-full">
            Our team of professionals will manage your events and provide you
            with top-quality merch and event support.
          </p>
        </div>
        <div className="flex flex-row space-x-10 lg:pt-0 pt-6">
          <Link href="/business" legacyBehavior>
            <a target="_blank">
              <Button>Order Merch</Button>
            </a>
          </Link>
          <Link href="/business" legacyBehavior>
            <a target="_blank">
              <Button className="bg-white text-black">Get Event Support</Button>
            </a>
          </Link>
        </div>
      </div>
      <hr className="lg:mt-20 mt-14 opacity-10" />
    </section>
  );
};

export default Banner;
