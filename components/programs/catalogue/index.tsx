import React from "react";
import { FaLaptopCode, FaProductHunt } from "react-icons/fa";
import { GiCyberEye } from "react-icons/gi";
import { RiCustomerService2Fill } from "react-icons/ri";
import { SiVitest } from "react-icons/si";
import {
  MdOutlineProductionQuantityLimits,
  MdDesignServices,
  MdBusiness,
  MdOutlineDataThresholding,
} from "react-icons/md";
import CatalogueCard from "@/components/micro/catalogue/card";
import { backendWebDevelopment, brandStorytelling, businessAnalysis, communityManagement, customerService, cyberSecurity, dataAnalytics, digitalMarketing, frontend, fullstack, noCode, productDesign, productManagement, productMarketing, qualityAssurance } from "@/components/database/courses";

const Catalogue = () => {

  return (
    <section className="text-text pt-14 lg:pt-20">
      <div className="text-center flex flex-col">
        <h1 className=" lg:text-4xl md:text-3xl text-2xl xl:text-5xl font-medium">
          Explore Our Course Catalogue
        </h1>
        <p className="text-base text-texts py-4">
          Discover talent training programs to help grow your career.
        </p>

        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 py-10">
          <CatalogueCard
            icon={<FaLaptopCode />}
            heading="Full-Stack Web Development"
            service="Ease your recruitment process with our human resource team designed to vet and provide the best fit from our tech talents."
            data={fullstack}
            name="Full-Stack Web Development"
          />
          <CatalogueCard
            icon={<FaLaptopCode />}
            heading="Frontend Web Development"
            service="Ease your recruitment process with our human resource team designed to vet and provide the best fit from our tech talents."
            data={frontend}
            name="Frontend Web Development"
          />

          <CatalogueCard
            icon={<FaLaptopCode />}
            heading="Backend Web Development"
            service="Ease your recruitment process with our human resource team designed to vet and provide the best fit from our tech talents."
            data={backendWebDevelopment}
            name="Backend Web Development"
          />
          <CatalogueCard
            icon={<MdDesignServices />}
            heading="Product Design"
            service="Ease your recruitment process with our human resource team designed to vet and provide the best fit from our tech talents."
            data={productDesign}
            name="Product Design "
          />
          <CatalogueCard
            icon={<MdOutlineProductionQuantityLimits />}
            heading="Product Marketing"
            service="Ease your recruitment process with our human resource team designed to vet and provide the best fit from our tech talents."
            data={productMarketing}
            name="Product Marketing"
          />
          <CatalogueCard
            icon={<FaProductHunt />}
            heading="Product Management"
            service="Ease your recruitment process with our human resource team designed to vet and provide the best fit from our tech talents."
            data={productManagement}
            name="Product Management"
          />
          <CatalogueCard
            icon={<RiCustomerService2Fill />}
            heading="Community Management "
            service="Ease your recruitment process with our human resource team designed to vet and provide the best fit from our tech talents."
            data={communityManagement}
            name="Community Management "
          />

          <CatalogueCard
            icon={<MdDesignServices />}
            heading="Brand Storytelling"
            service="Ease your recruitment process with our human resource team designed to vet and provide the best fit from our tech talents."
            data={brandStorytelling}
            name="Brand Storytelling and Content Writing "
          />
          <CatalogueCard
            icon={<MdBusiness />}
            heading="Digital Marketing"
            service="Ease your recruitment process with our human resource team designed to vet and provide the best fit from our tech talents."
            data={digitalMarketing}
            name="Digital Marketing"
          />
          <CatalogueCard
            icon={<MdOutlineDataThresholding />}
            heading="Data Analytics"
            service="Ease your recruitment process with our human resource team designed to vet and provide the best fit from our tech talents."
            data={dataAnalytics}
            name="Data Analytics"
          />
          <CatalogueCard
            icon={<MdBusiness />}
            heading="Business Analysis"
            service="Ease your recruitment process with our human resource team designed to vet and provide the best fit from our tech talents."
            data={businessAnalysis}
            name="Business Analysis"
          />
          <CatalogueCard
            icon={<RiCustomerService2Fill />}
            heading="Customer Success "
            service="Ease your recruitment process with our human resource team designed to vet and provide the best fit from our tech talents."
            data={customerService}
            name="Customer Success"
          />
          <CatalogueCard
            icon={<GiCyberEye />}
            heading="Cyber Security"
            service="Ease your recruitment process with our human resource team designed to vet and provide the best fit from our tech talents."
            data={cyberSecurity}
            name="Cyber Security"
          />

          <CatalogueCard
            icon={<FaLaptopCode />}
            heading="No-code development"
            service="Ease your recruitment process with our human resource team designed to vet and provide the best fit from our tech talents."
            data={noCode}
            name="No-code development"
          />
          <CatalogueCard
            icon={<SiVitest />}
            heading="Quality Assurance"
            service="Ease your recruitment process with our human resource team designed to vet and provide the best fit from our tech talents."
            data={qualityAssurance}
            name="Quality Assurance"
          />
        </div>
      </div>
      <hr className="lg:mt-20 mt-14 opacity-10" />
    </section>
  );
};

export default Catalogue;
