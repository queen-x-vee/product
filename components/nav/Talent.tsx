import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { TbUserSearch } from "react-icons/tb";
import { FaPeopleCarry } from "react-icons/fa";
import {IoIosSchool} from "react-icons/io"

const Talent = () => {
  return (
    <nav className="absolute top-24 lg:max-w-4xl xl:max-w-6xl  2xl:max-w-6xl 2xl:mx-auto 2xl:container 2xl:left-96 right-14 cursor-pointer rounded-xl flex justify-between border border-[#F2F4FC24] border-opacity-10 text-text bg-[#0E1416]">
      <div className="w-3/6 hover:bg-hover overflow-hidden px-8 max-h-full">
        <div className="py-8">
        <h3 className="text-xl mb-2 flex items-center">
            <span className="pr-2">
              {<IoIosSchool className="text-base text-section" />}
            </span>{" "}
            Programs Training
          </h3>
          <p className="text-sm lg:text-xs xl:text-sm text-dark">
            Get started into tech with our training program. Learn the all you need
             to land your first industry job.
          </p>
          <Link
            href="/programstraining"
          >
            <p className="flex items-center mt-5 underline-hover">
              Browse our courses
              <span className="ml-1 text-lg">{<FiArrowUpRight />}</span>
            </p>
          </Link>
        </div>
      </div>

      <div className="w-3/6 hover:bg-hover overflow-hidden px-8 max-h-full">
        <div className="py-8">
        <h3 className="text-xl mb-2 flex items-center">
            <span className="pr-2">
              {<FaPeopleCarry className="text-base text-section" />}
            </span>{" "}
            Community
          </h3>
          <p className="text-sm lg:text-xs xl:text-sm text-dark">
            Innovotio has an active community to provide support for recuiters,
            organizations and for tech talents.
          </p>
          <Link href="/services/#community">
            <p className="flex items-center mt-5 underline-hover">
              Join us
              <span className="ml-1 text-lg">{<FiArrowUpRight />}</span>
            </p>
          </Link>
        </div>
      </div>
      <div className="w-3/6 hover:bg-hover overflow-hidden px-10 max-h-full">
        <div className="py-8">
        <h3 className="text-xl mb-2 flex items-center">
            <span className="pr-2">
              {<TbUserSearch className="text-base text-section" />}
            </span>{" "}
            Join Innovotio          </h3>
          <p className="text-sm lg:text-xs xl:text-sm text-dark ">
            We work as an extension of your team by assembling the right
            team members for every project.
          </p>
          <Link target="_blank" href="/services/#talent">
            <p className="flex items-center mt-5 underline-hover">
              Learn more
              <span className="ml-1 text-lg">{<FiArrowUpRight />}</span>
            </p>
          </Link>
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

export default Talent;
