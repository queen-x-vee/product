import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Logo from "../../../public/assets/footer/Logo.svg";
import formImage from "../../../public/assets/form/Account.svg";
import { HiOutlineArrowLeft } from "react-icons/hi";
import Copyright from "@/components/footer/copyright";

const Recruit = () => {
  const router = useRouter();
  return (
    <>
      <section className="flex min-h-screen w-12/12 2xl:mx-auto 2xl:container">
        <section className="w-3/12 hidden bg-primary md:pt-10 px-10 md:px-4 md:flex flex-col justify-between">
          <div className="">
            <Link href="/">
              <Image
                src={Logo}
                alt="Logo"
                width={140}
                height={120}
                className=""
              />
            </Link>

            <figcaption>
              <p className="pt-5 leading-8 text-text text-lg font-medium italic">
                Your super-stop for tech recruitment, tech event management &
                merch.
              </p>
            </figcaption>
          </div>
          <figure>
            <Link href="/">
              <Image
                src={formImage}
                alt="chart"
                width={500}
                height={500}
                className=""
              />
            </Link>
          </figure>
        </section>
        <section className="md:w-9/12 w-full overflow-x-hidden bg-form">
          <nav className="md:hidden bg-[#182222] h-20 flex items-center px-4 ">
            <Link href="/">
              <Image
                src={Logo}
                alt="Logo"
                width={140}
                height={120}
                className=""
              />
            </Link>
          </nav>
          <div className=" lg:px-10 px-4 md:px-4">
            <Link href="/">
              <div className="flex items-center pt-5 md:pt-12">
                <div onClick={() => router.back()}>
                  <HiOutlineArrowLeft />
                </div>
                <p className="ml-4 cursor-pointer text-lg">Go back</p>
              </div>
            </Link>
            <h1 className="text-lg lg:text-2xl pb-8 pt-5 lg:w-full md:w-96 w-full ">
              Hire proactively, hire best.
            </h1>

            <form className="bg-form">
              <div className="grid xl:grid-cols-2 gap-x-5 ">
                <input
                  type="text"
                  placeholder="Company Name *"
                  required
                  className="rounded-md mb-8 px-2 py-2 h-12 lg:h-12"
                />
                <input
                  type="text"
                  placeholder="Country *"
                  required
                  className="rounded-md mb-8 px-2 py-2 h-12 lg:h-12"
                />
                <input
                  type="text"
                  placeholder="First Name *"
                  required
                  className="rounded-md mb-8 px-2 py-2 h-12 lg:h-12"
                />
                <input
                  type="text"
                  placeholder="Last Name *"
                  required
                  className="rounded-md mb-8 px-2 py-2 h-12 lg:h-12 "
                />
                <input
                  type="text"
                  placeholder="Work Email *"
                  required
                  className="rounded-md mb-8 px-2 py-2 h-12 lg:h-12"
                />
                <input
                  type="text"
                  placeholder="Company Website *"
                  required
                  className="rounded-md mb-8 px-2 py-2 h-12 lg:h-12 "
                />
                <input
                  type="number"
                  placeholder="Phone Number *"
                  required
                  className="rounded-md mb-8 px-2 py-2 h-12 lg:h-12"
                />

                <input
                  type="text"
                  placeholder="Employee Range *"
                  required
                  className="rounded-md mb-8 px-2 py-2 h-12 lg:h-12"
                />

                <input
                  type="text"
                  placeholder="Current Role *"
                  required
                  className="rounded-md mb-8 px-2 py-2 h-12 lg:h-12"
                />
                <input
                  type="text"
                  placeholder="Mode of work *"
                  required
                  className=" rounded-md mb-8 px-2 py-2 h-12 lg:h-12"
                />
                <input
                  type="text"
                  placeholder="Employment Type *"
                  required
                  className="rounded-md mb-8 px-2 py-2 h-12 lg:h-12"
                />

                <input
                  type="text"
                  placeholder="Commencement Date *"
                  required
                  className="rounded-md mb-8 px-2 py-2 h-12 lg:h-12"
                />
              </div>
              <input
                type="text"
                placeholder="Roles hiring for *"
                required
                className="w-full h-14 text-slate-400 rounded-md  mb-8 px-2 py-2 lg:h-12"
              />
              <select
                required
                className="w-full h-14 text-slate-400 rounded-md  mb-8 px-2 py-2 lg:h-12"
              >
                <option>Skills Requirement</option>
                <option>Front-End Developer</option>
                <option>Digital Marketer</option>
                <option>Product Manager</option>
                <option>Community Manager</option>
                <option>Back-End Developer</option>
                <option>UX Researcher</option>
                <option>Content Creator</option>
                <option>Grpahics Designer</option>
                <option>Operations Manager</option>
                <option>Blockchain Developer</option>
                <option>Quality Assurance Tester</option>
                <option>Others</option>
              </select>

              <div className="flex flex-col"></div>

              <div className="w-full mb-5  bg-[#DDDDDD] h-12 rounded-md flex justify-center">
                <button>Submit</button>
              </div>
            </form>
          </div>
        </section>
      </section>
      <div className="pb-1 px-5">
        <Copyright />
      </div>
    </>
  );
};

export default Recruit;
