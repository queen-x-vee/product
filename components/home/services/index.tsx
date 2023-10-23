import Link from "next/link";
import React from "react";
import { MdGroups, MdOutlinePersonPin } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi";
import { TbUserSearch } from "react-icons/tb";
import { BsFillGiftFill } from "react-icons/bs";
import { FaPeopleCarry } from "react-icons/fa";
import Button from "@/components/micro/button";
import ServiceCard from "@/components/micro/services/card";
import Paired from "@/components/micro/services/card";

const Services = () => {
  return (
    <section className="pt-14 lg:pt-20">
      <div className="flex flex-col lg:justify-between lg:items-end lg:flex-row">
        <div className="space-y-5">
          <p className="text-section font-medium">Services</p>
          <h2 className="font-medium lg:text-5xl text-3xl text-text">
            Our Services
          </h2>
          <p className="lg:text-lg text-base max-w-lg text-[#A3A3A3]">
            Innovotio provides more than just the plumbing for your revenue. As
            a merchant of record, we do it for you.
          </p>
        </div>
        <div className="pt-5">
          <Link href="/business" legacyBehavior>
            <a target="_blank">
              <Button className="">Explore Our Services</Button>
            </a>
          </Link>
        </div>
      </div>
      <div className="pt-10 grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2">
          <Paired
            title="Merchandising"
            className="w-80 h-72"
            icon={<BsFillGiftFill />}
            illustration="../../.././assets/services/one.svg"
            illustration2="../../.././assets/services/two.svg"
            text="Collaborate with our team to design and produce merchandise tailored to your tech events and branding needs. Whether you're hosting conferences, workshops, or promotional campaigns, we can help you create your identity."
          />
        </div>
        <div className="col-span-1">
          <Paired
            title="Recruitment"
            className="w-72 h-72"
            icon={<MdOutlinePersonPin />}
            illustration="../../.././assets/services/recruit.svg"
            text="Cease your recruitment process with our human resource team designed to vet and provide the best fit from our tech talents."
          />
        </div>
      </div>
      <div className="pt-5 grid grid-cols-1 lg:grid-cols-2 gap-5">
        <ServiceCard
          title="Tech Event Management"
          className="w-[564px] h-72"
          text="Collaborate with our team to design and produce merchandise tailored to your tech events and branding needs. Whether you're hosting conferences, workshops, or promotional campaigns, we can help you create your identity."
          icon={<HiUserGroup />}
          illustration="../../.././assets/services/event3.svg"
        />
        <ServiceCard
          title="Consultancy"
          className="w-72 h-72"
          icon={<FaPeopleCarry />}
          illustration="../../.././assets/services/event.svg"
          text="Cease your recruitment process with our human resource team designed to vet and provide the best fit from our tech talents."
        />
      </div>
      <div className="pt-5 grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2">
          <ServiceCard
            title="Tech Talent Management"
            className="w-80 h-72"
            icon={<TbUserSearch />}
            illustration="../../.././assets/services/event.svg"
            illustration2="../../.././assets/services/event2.svg"
            text="Collaborate with our team to design and produce merchandise tailored to your tech events and branding needs. Whether you're hosting conferences, workshops, or promotional campaigns, we can help you create your identity."
          />
        </div>
        <div className="col-span-1">
          <ServiceCard
            title="Community"
            className="w-72 h-72"
            icon={<MdGroups />}
            illustration="../../.././assets/services/community.svg"
            text="Cease your recruitment process with our human resource team designed to vet and provide the best fit from our tech talents."
          />
        </div>
      </div>
      <hr className="lg:mt-20 mt-14 opacity-10" />
    </section>
  );
};

export default Services;
