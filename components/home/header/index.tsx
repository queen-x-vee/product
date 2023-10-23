import { MdGroups } from "react-icons/md";
import Button from "@/components/micro/button";

const Header = () => {
  return (
    <header className="lg:pt-12 pt-6">
      <div className="space-y-5">
        <h1 className="lg:text-6xl text-4xl font-semibold max-w-md sm:max-w-[480px] lg:max-w-4xl text-text">
          Get qualified tech talents & event support
        </h1>
        <p className="lg:text-lg text-base sm:max-w-3xl text-[#D9D9D9E5]">
          We provide qualified tech talents to hiring organizations, organize
          tech events and curate branded merchandise.
        </p>
        <div className="flex sm:flex-row flex-col gap-x-3 gap-y-6 md:gap-y-0 pt-3 sm:max-w-md items-center justify-center sm:justify-between">
          <Button className="w-full sm:w-fit bg-white text-black">
            Hire Tech Talent
          </Button>
          <Button className="w-full sm:w-fit"> Order a Merch</Button>
          <p className="text-[#FCFCFC] flex items-center">
            <span className="pr-2">
              <MdGroups className="text-2xl"/>
            </span>
            Join Innovotio
          </p>
        </div>
      </div>
      <div className="lg:pt-20 pt-14 flex justify-center items-center">
        <img
          src="../../../clients.svg"
          alt="brands"
          className="w-full h-10 sm:block hidden"
        />
        <img
          src="../../../clients-mobile.svg"
          alt="brands"
          className="w-96 h-36 sm:hidden block"
        />
      </div>
      <hr className="lg:mt-20 mt-14 opacity-10" />
    </header>
  );
};

export default Header;