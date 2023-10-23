import Link from "next/link";
import React from "react";
import Button from "../micro/button";

const About = () => {
  return (
    <nav className="absolute top-28 max-w-5xl 2xl:mx-auto 2xl:container 2xl:left-96 right-20 2xl:max-w-5xl cursor-pointer rounded-xl flex justify-between border border-[#F2F4FC24] border-opacity-10 text-text bg-[#0E1416]">
      <Link
        href="/aboutus"
        className="w-3/6 max-h-full hover:bg-hover overflow-hidden px-10"
      >
        <div className="py-10">
          <h3 className="text-xl mb-2">Who We Are</h3>
          <p className="text-sm lg:text-xs xl:text-sm w-11/12 text-headerGrey">
            We go beyond connecting tech talents, we offer
            additional services for businesses and our talent pool.
          </p>
        </div>
      </Link>
      <div className="w-3/6 hover:bg-hover overflow-hidden px-10 h-full">
        <div className="py-10">
          <h3 className="text-xl mb-2">Careers</h3>
          <p className="text-sm lg:text-xs xl:text-sm w-11/12 text-headerGrey">
            Put your best foot forward and fast track landing a new tech job
            with innovotio
          </p>
          <Button className="bg-btnDefaultBlack text-white mt-3 text-sm rounded-full">
            Coming soon
          </Button>
        </div>
      </div>
      <div className="w-3/6 hover:bg-hover overflow-hidden px-10 h-full">
      <div className="py-10">
          <h3 className="text-xl mb-2">Blogs</h3>
          <p className="text-sm lg:text-xs xl:text-sm w-11/12 text-headerGrey">
            Read articles on community building, talents testimonials and get
            business tips too on our blog.
          </p>
          <Button className="bg-btnDefaultBlack text-white mt-3 text-sm rounded-full">
            Coming soon
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default About;
