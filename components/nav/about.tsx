import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { RiArticleFill } from "react-icons/ri";
import { PiSuitcaseSimpleBold } from "react-icons/pi";
import {GiPadlock} from "react-icons/gi"

const About = () => {
  return (
    <nav className="absolute top-24 lg:max-w-4xl xl:max-w-5xl 2xl:mx-auto 2xl:container 2xl:left-96 right-14 2xl:max-w-5xl cursor-pointer rounded-xl flex justify-between border border-[#F2F4FC24] border-opacity-10 text-text bg-[#0E1416]">
      <div className="w-3/6 max-h-full hover:bg-hover overflow-hidden px-8">
        <div className="py-8">
          <h3 className="text-xl mb-3 flex items-center">
            <span className="pr-2">
              {<BsFillInfoSquareFill className="text-base text-section" />}
            </span>
            Who We Are
          </h3>
          <p className="text-sm lg:text-xs xl:text-sm text-dark">
            We go beyond connecting tech talents, by offering addittional
            services to businesses.
          </p>
          <Link href="/aboutus" className=" ">
            <p className="flex items-center mt-5 underline-hover">
              Learn More
              <span className="ml-1 text-lg">{<FiArrowUpRight />}</span>
            </p>
          </Link>
        </div>
      </div>
      <div className="w-3/6 hover:bg-hover overflow-hidden px-8 h-full">
        <div className="py-8">
          <h3 className="text-xl mb-4 flex items-center">
            <span className="pr-2">
              {<PiSuitcaseSimpleBold className="text-base text-section" />}
            </span>
            Careers
          </h3>
          <p className="text-sm lg:text-xs xl:text-sm text-dark">
            Put your best foot forward and fast track landing a new tech job in
            the industry with innovotio
          </p>
          <p className="flex items-center mt-5 underline-hover">
            Coming soon
            <span className="ml-1 text-lg">{<GiPadlock />}</span>
          </p>
        </div>
      </div>
      <div className="w-3/6 hover:bg-hover overflow-hidden px-8 h-full">
        <div className="py-8">
          <h3 className="text-xl mb-2 flex items-center">
            <span className="pr-2">
              {<RiArticleFill className="text-base text-section" />}
            </span>
            Blog
          </h3>
          <p className="text-sm lg:text-xs xl:text-sm text-dark">
            Read articles on community building, talents testimonials and get
            business tips too on our blog.
          </p>
          <p className="flex items-center mt-5 underline-hover">
            Coming soon
            <span className="ml-1 text-lg">{<GiPadlock />}</span>
          </p>
        </div>
      </div>
      <style jsx>{`
        .hover:text-black:hover p {
          color: black;
        }
        .underline-hover {
          position: relative;
        }

        .underline-hover:after {
          content: "";
          position: absolute;
          left: 0;
          width: 0;
          bottom: -2px;
          height: 2px;
          background-color: #ffcc00;
          transition: width 0.3s ease-in-out;
        }

        .underline-hover:hover:after {
          width: 30%;
        }
      `}</style>
    </nav>
  );
};

export default About;
