import Link from "next/link";
import Image from "next/image";
import Button from "@/components/micro/button";

const Talent = () => {
  return (
    <section className="lg:pt-12 pt-6 text-white">
      <div
        className="flex lg:flex-row flex-col-reverse lg:space-x-5 justify-evenly lg:items-center"
        id="event"
      >
        <div>
          <Image
            src="../../../../assets/services/talent2.svg"
            alt="community"
            width={590}
            height={400}
          />
        </div>
        <div className="">
          <h4 className="text-section font-medium text-lg">
            Tech Talent Management
          </h4>
          <h1 className="pt-1 font-medium xl:text-4xl md:text-3xl text-2xl md:max-w-md">
            Management support for all tech talents
          </h1>
          <p className="pt-5 text-base text-justify text-texts lg:max-w-sm xl:max-w-lg">
            We train, assess and maintain the quality of our talent pool
            regularly to ensure satisfaction both for businesses and talents.
          </p>
          <Link href="/business" target="_blank">
            <Button className="my-5">Get In Touch</Button>
          </Link>
        </div>
      </div>
      <hr className="lg:mt-20 mt-14 opacity-10" />
    </section>
  );
};

export default Talent;
