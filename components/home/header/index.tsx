import { MdGroups } from "react-icons/md";
import Button from "@/components/micro/button";

const Header = () => {
  return (
    <header className="lg:pt-10 pt-0">
      <div className="space-y-5">
        <h1 className="xl:text-6xl lg:text-5xl md:text-4xl text-3xl font-semibold max-w-md sm:max-w-[480px] lg:max-w-3xl xl:max-w-4xl text-text">
          Get qualified tech talents & event support
        </h1>
        <p className="lg:text-lg text-base sm:max-w-xl text-texts">
          We provide qualified tech talents to hiring organizations, organize
          tech events and curate branded merchandise.
        </p>
        <div className="flex sm:flex-row flex-col gap-x-3 space-y-4 md:space-y-0 pt-3 sm:max-w-md items-center justify-center sm:justify-between">
          <Button className="w-full sm:w-fit bg-text text-black">
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
