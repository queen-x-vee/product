import Link from "next/link";
import Image from "next/image";
import Button from "@/components/micro/button";
import Card from "@/components/micro/services/card";
import IndustryExpertise from "../../../../public/assets/services/industryExpertise.svg"
import Talent from "../../../../public/assets/services/techTalent.svg"
import Feedback from "../../../../public/assets/services/feedback.svg"
import StreamlinedProcess from '../../../../public/assets/services/streamlinedProcess.svg'
import ContinousFeedback from '../../../../public/assets/services/continousFeedback.svg'
import FlexibleHiringModels from '../../../../public/assets/services/flexibleHiringModels.svg'


const Event = () => {
  return (
    <section className="lg:pt-20 pt-14 text-white">
      <div
        className="flex lg:flex-row flex-col-reverse lg:space-x-5 justify-evenly lg:items-center"
        id="event"
      >
        <div>
          <Image
            src="../../../../assets/services/Community2.svg"
            alt="community"
            width={590}
            height={400}
          />
        </div>
        <div className="">
          <h4 className="text-section font-medium text-lg">
            Tech Event Management
          </h4>
          <h1 className="pt-1 font-medium xl:text-4xl md:text-3xl text-2xl md:max-w-lg">
            Let us handle all the details for a memorable experience
          </h1>
          <p className="pt-5 text-base text-justify text-texts lg:max-w-sm xl:max-w-lg">
            We endure your tech event goes off without a hitch and give your
            guests a quality time by organizing your tech event.
          </p>
          <Link href="/business" target="_blank">
            <Button className="my-5">Get Event Support</Button>
          </Link>
        </div>
      </div>
      <div>
      <div className="lg:pt-10 pt-5 grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div className="lg:col-span-4">
          <Card src={Talent} text="Tailored event planning to match the unique goals and theme of the tech event." title="Contrived Planning" />
        </div>
        <div className="lg:col-span-4">
          <Card src={IndustryExpertise} text="Coordination of vendors, speakers, and logistics for a seamless & awesome event." title="Vendor Management" />
        </div>
        <div className="lg:col-span-4">
          <Card src={Feedback} text="Access to experienced event managers with deep understanding of tech industries." title="Industry Expertise" />
        </div>
      </div>
      <div className="lg:pt-10 pt-5 grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div className="lg:col-span-4">
          <Card src={FlexibleHiringModels} text=" Facilitation of meaningful connections and networking sessions for attendees." title="Networking Opportunities" />
        </div>
        <div className="lg:col-span-4">
          <Card src={ContinousFeedback} text="Strategies for cost-effective event management without compromising quality." title="Budget Optimization" />
        </div>
        <div className="lg:col-span-4">
          <Card src={StreamlinedProcess} text="Evaluation and feedback sessions for continuous improvement and future event planning." title="Post-Event Analysis" />
        </div>
      </div>
      </div>
      <hr className="lg:mt-20 mt-14 opacity-10" />
    </section>
  );
};

export default Event;
