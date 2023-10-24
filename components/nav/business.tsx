import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { HiUserGroup } from "react-icons/hi";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { MdOutlinePersonPin } from "react-icons/md";

const Business = () => {
  return (
    <nav className="absolute top-24 lg:max-w-4xl xl:max-w-6xl 2xl:max-w-6xl 2xl:mx-auto 2xl:container 2xl:left-96 right-14  cursor-pointer rounded-xl flex justify-between border border-[#F2F4FC24] border-opacity-10 text-text bg-[#0E1416]">
      <div className="hover:bg-[#182222] overflow-hidden justify-center flex flex-col max-h-full w-full px-5">
        <div className="py-8">
          <h3 className="text-xl mb-2 flex items-center">
            <span className="pr-2">
              {<BsFillBoxSeamFill className="text-sm text-section" />}
            </span>
            Merchandising
          </h3>
          <p className="text-sm max-w-sm text-dark">
            As tech event organizers, we also create branded merchandise for
            tech organizations and communities for events and merch stores.
          </p>
          <div className="mt-5">
            <Link href="/services/#merch" className="underline-hover">
              <p className="flex items-center underline-hover">
                Place an order
                <span className="ml-1 text-lg">{<FiArrowUpRight />}</span>
              </p>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-11/12 hover:bg-hover justify-center flex flex-col max-h-full px-5">
        <div className="py-8">
          <h3 className="text-xl mb-2 flex items-center">
            <span className="pr-2">
              {<MdOutlinePersonPin className="text-base text-section" />}
            </span>{" "}
            Recruitment
          </h3>
          <p className="text-sm max-w-sm text-dark">
            Ease your recruitment process with our human resource team designed
            to vet and provide the best fit from our tech talents.
          </p>
          <div className="mt-5">
            <Link href="/services/#recruitment" className="underline-hover">
              <p className="flex items-center underline-hover">
                Recruit a team
                <span className="ml-1 text-lg">{<FiArrowUpRight />}</span>
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="hover:bg-hover max-h-full justify-center flex flex-col w-full px-5">
        <div className="py-8">
          <h3 className="text-xl mb-2 flex items-center">
            <span className="pr-2">
              {<HiUserGroup className="text-sm text-section" />}
            </span>{" "}
            Tech Event Organization
          </h3>
          <p className="text-sm max-w-sm text-dark">
            We train, assess and maintain the quality of our talent pool
            regularly to ensure satisfaction both for busniesses and talents.
          </p>
          <div className="mt-5">
            <Link href="/services/#event">
              <p className="flex items-center underline-hover" >
                Get event support{" "}
                <span className="ml-1 text-lg">{<FiArrowUpRight />}</span>
              </p>
            </Link>
          </div>
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

export default Business;
