import Image from "next/image";
import React from "react";
import Link from "next/link";
import Logo from "../../public/assets/footer/Logo.svg";
import mobileLogo from "../../public//assets/navbar/logo.svg";
import cancel from "../../public/assets/navbar/cancel.svg";
import arrow from "../../public/assets/navbar/arrow.svg";
import menu from "../../public/assets/navbar/menu.svg";
import About from "./about";
import Talent from "./Talent";
import Business from "./business";

function Navbar() {
  const [nav, setNav] = React.useState(false);
  const [navigation, setNavigation] = React.useState({
    business: false,
    talent: false,
    about: false,
  });

  const handleTalentClick = () => {
    setNavigation({
      business: false,
      talent: !navigation.talent,
      about: false,
    });
  };

  const handleAboutClick = () => {
    setNavigation({
      business: false,
      talent: false,
      about: !navigation.about,
    });
  };

  const handleBusinessClick = () => {
    setNavigation({
      business: !navigation.business,
      talent: false,
      about: false,
    });
  };

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="m-5 md:p-5 p-4 w-[95%] mx-auto container bg-[#0E1416] border border-[#F2F4FC24] border-opacity-15 rounded-full">
      <section className="navbar flex z-50 text-white justify-between w-full items-center">
        <Link href="/" className="cursor-pointer" onClick={handleNav}>
          <figure className="">
            <Image
              src={Logo}
              alt="innovotio's logo"
              width={120}
              height={1}
              className="-mt-3 hidden lg:block"
            />
            <Image
              src={mobileLogo}
              alt="innovotio's logo"
              width={24}
              height={24}
              className="block lg:hidden"
            />
          </figure>
        </Link>

        <ul className="navbar space-x-10 text-base lg:flex hidden">
          <li
            className={`flex items-center cursor-pointer ${
              navigation.business ? "text-section" : "text-white"
            }`}
            onClick={handleBusinessClick}
          >
            For Business
            <span className="ml-1">
              <Image src={arrow} width={16} height={16} alt="arrow" />
            </span>
            {navigation.business && <Business />}
          </li>
          <li
            onClick={handleTalentClick}
            className={`flex items-center cursor-pointer ${
              navigation.talent ? "text-section" : "text-white"
            }`}
          >
            For Talents
            <span className="ml-1">
              <Image src={arrow} width={16} height={16} alt="arrow" />
            </span>
            {navigation.talent && <Talent />}
          </li>
          <li
            className={`flex items-center cursor-pointer ${
              navigation.about ? "text-section" : "text-white"
            }`}
            onClick={handleAboutClick}
          >
            About Us
            <span className="ml-1">
              <Image src={arrow} width={16} height={16} alt="arrow" />
            </span>
            {navigation.about && <About />}
          </li>
        </ul>

        {/* mobile screen */}
        <div
          className={` ${
            nav ? "block" : "hidden"
          } justify-between text-base lg:hidden absolute top-28 bg-[#0E1416] left-0 pl-5 lg:pl-10 min-w-full z-50 cursor-pointer `}
        >
          <div className="md:px-5 text-text">
            <div className="my-5">
              <p className="text-sm text-[#AAAAAA] mb-5">FOR BUSINESS</p>
              <ul className="text-lg space-y-7" onClick={handleNav}>
                <li>
                  <Link href="/business">Merchandising</Link>
                </li>
                <li>
                  <Link href="/services#recuitment">Recruitment</Link>
                </li>
                <li>
                  <Link href="/business">Tech Event Organization</Link>
                </li>
                <li>
                  <Link href="/business">Consultancy</Link>
                </li>
              </ul>
            </div>
            <hr className="mt-10 opacity-10" />

            <div className="my-5">
              <p className="text-sm text-[#AAAAAA] mb-5">FOR TALENTS</p>
              <ul className="text-lg space-y-7" onClick={handleNav}>
                <li>
                  <Link href="/programstraining">Programs Training</Link>
                </li>
                <li>
                  <Link href="/jobapplication">Join Innovotio</Link>
                </li>
                <li>
                  <Link href="/aboutus/#community" legacyBehavior>
                    <a>Community</a>
                  </Link>
                </li>
              </ul>
            </div>
            <hr className="mt-10 opacity-10" />

            <div className="my-5 mb-20">
              <p className="text-sm text-[#AAAAAA] mb-5">ABOUT US</p>
              <ul className="text-lg space-y-7" onClick={handleNav}>
                <li>
                  <Link href="/aboutus">Who We Are</Link>
                </li>
                <li>Careers</li>
                <li>Blog</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="lg:hidden block cursor-pointer" onClick={handleNav}>
          {nav ? (
            <Image
              src={cancel}
              alt="innovotio's menu"
              width={36}
              height={36}
              className="block lg:hidden"
            />
          ) : (
            <Image
              src={menu}
              alt="innovotio's menu"
              width={36}
              height={36}
              className="block lg:hidden"
            />
          )}
        </div>
      </section>
    </nav>
  );
}

export default Navbar;
