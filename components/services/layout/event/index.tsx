import Link from "next/link";
import Image from "next/image";
import Button from "@/components/micro/button";

const Event = () => {
  return (
    <section className="lg:pt-20 pt-14 text-white">
      <div
        className="flex lg:flex-row flex-col-reverse lg:space-x-5 justify-evenly lg:items-center"
        id="event"
      >
        <div>
          <Image
            src="../../../../assets/services/Community2.svg"
            alt="community"
            width={590}
            height={400}
          />
        </div>
        <div className="">
          <h4 className="text-section font-medium text-lg">
            Tech Event Management
          </h4>
          <h1 className="pt-1 font-medium xl:text-4xl md:text-3xl text-2xl md:max-w-lg">
            Let us handle all the details for a memorable experience
          </h1>
          <p className="pt-5 text-base text-justify text-texts lg:max-w-sm xl:max-w-lg">
            We endure your tech event goes off without a hitch and give your
            guests a quality time by organizing your tech event.
          </p>
          <Link href="/business" target="_blank">
            <Button className="my-5">Get Event Support</Button>
          </Link>
        </div>
      </div>
      <hr className="lg:mt-20 mt-14 opacity-10" />
    </section>
  );
};

export default Event;
