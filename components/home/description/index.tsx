import React from "react";
import Link from "next/link";
import {
  BsClipboardData,
  BsBookmarkCheck,
  BsPersonWorkspace,
  BsPeople,
} from "react-icons/bs";
import { IoIosContacts } from "react-icons/io";
import { AiOutlineGift } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import Button from "@/components/micro/button";
import Index from "@/components/micro/description";

const Description = () => {
  return (
    <section className="pt-14 lg:pt-20">
      <div className="flex flex-col lg:flex-row">
        <div className="space-y-5 md:w-full xl:w-5/12 lg:w-5/12">
          <div>
            <p className="text-section font-medium">Our Framework</p>
            <h2 className="pt-1 font-medium xl:text-4xl md:text-3xl text-2xl max-w-sm text-text">
              Why Choose Innovotio?
            </h2>
          </div>
          <p className="xl:text-lg text-base max-w-sm text-texts">
            Innovotio goes beyond connecting qualified tech talents and
            organizations.
          </p>
          <div>
            <Link href="/business" legacyBehavior>
              <a target="_blank">
                <Button className="hover:bg-primaryYellow flex items-center justify-center">
                  Experience Us <BsArrowRight className="ml-2 text-lg" />
                </Button>
              </a>
            </Link>
          </div>
        </div>
        <div className="xl:w-7/12 lg:pl-5 lg:pt-0 pt-10">
          <div className="lg:font-normal grid md:grid-cols-2 gap-10 grid-col-1 lg:text-base lg:text-white lg:text-left ">
            <Index
              icon={<BsClipboardData className="w-5 h-6" />}
              text="Extensive & Fast Hiring of tech talents within 72 hours"
            />
            <Index
              icon={<BsPeople className="w-5 h-6" />}
              text="We find, manage & keep training only the best talents"
            />
            <Index
              icon={<AiOutlineGift className="w-5 h-6" />}
              text="Get your branded merchandise at an affordable rate"
            />
            <Index
              icon={<BsPersonWorkspace className="w-5 h-6" />}
              text="Organize tech events for companies and communities"
            />
            <Index
              icon={<IoIosContacts className="w-6 h-7" />}
              text="Get 24/7 community support"
            />
            <Index
              icon={<BsBookmarkCheck className="w-5 h-6" />}
              text="Get affordable business registration and consultation"
            />
          </div>
        </div>
      </div>
      <hr className="lg:mt-20 mt-14 opacity-10" />
    </section>
  );
};

export default Description;
