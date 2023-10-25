import Link from "next/link";
import Image from "next/image";
import Button from "@/components/micro/button";
import Card from "@/components/micro/services/card";
import {CgNotes} from 'react-icons/cg'
import IndustryExpertise from "../../../../public/assets/services/industryExpertise.svg"
import Talents from "../../../../public/assets/services/techTalent.svg"
import Feedback from "../../../../public/assets/services/feedback.svg"
import StreamlinedProcess from '../../../../public/assets/services/streamlinedProcess.svg'
import ContinousFeedback from '../../../../public/assets/services/continousFeedback.svg'
import FlexibleHiringModels from '../../../../public/assets/services/flexibleHiringModels.svg'

const Talent = () => {
  return (
    <section className="lg:pt-12 pt-6 text-white">
      <div
        className="flex lg:flex-row flex-col-reverse lg:space-x-5 justify-evenly lg:items-center"
        id="event"
      >
        <div>
          <Image
            src="../../../../assets/services/talent2.svg"
            alt="community"
            width={590}
            height={400}
          />
        </div>
        <div className="">
          <h4 className="text-section font-medium text-lg">
            Tech Talent Management
          </h4>
          <h1 className="pt-1 font-medium xl:text-4xl md:text-3xl text-2xl md:max-w-md">
            Management support for all tech talents
          </h1>
          <p className="pt-5 text-base text-justify text-texts lg:max-w-sm xl:max-w-lg">
            We train, assess and maintain the quality of our talent pool
            regularly to ensure satisfaction both for businesses and talents.
          </p>
          <Link href="/business" target="_blank">
            <Button className="my-5">Get In Touch</Button>
          </Link>
        </div>
      </div>
      <div>
      <div className="lg:pt-10 pt-5 grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div className="lg:col-span-4">
          <Card src={Talents} text="Ongoing training and upskilling opportunities to keep tech talent updated." title="Skill Development" />
        </div>
        <div className="lg:col-span-4">
          <Card src={IndustryExpertise} text="In-depth knowledge of the tech industry, enabling precise candidate matching." title="Industry Expertise" />
        </div>
        <div className="lg:col-span-4">
          <Card src={Feedback} text="Tailored recruitment solutions to match the specific needs and culture of tech organizations." title="Customized Hiring" />
        </div>
      </div>
      <div className="lg:pt-10 pt-5 grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div className="lg:col-span-4">
          <Card src={FlexibleHiringModels} text=" Options for full-time, part-time, contract, or remote hiring to meet various needs." title="Flexible Hiring Models" />
        </div>
        <div className="lg:col-span-4">
          <Card src={ContinousFeedback} text="A feedback loop for continuous improvement and candidate-client alignment." title="Continous Feedback" />
        </div>
        <div className="lg:col-span-4">
          <Card src={StreamlinedProcess} text="Efficient and time-saving recruitment processes to minimize hiring timelines." title="Streamlined Process" />
        </div>
      </div>
      </div>
      <hr className="lg:mt-20 mt-14 opacity-10" />
    </section>
  );
};

export default Talent;
