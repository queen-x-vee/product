import Link from "next/link";
import Image from "next/image";
import Button from "@/components/micro/button";
import Card from "@/components/micro/services/card";
import {CgNotes} from 'react-icons/cg'
import IndustryExpertise from "../../../../public/assets/services/industryExpertise.svg"
import Talent from "../../../../public/assets/services/techTalent.svg"
import Feedback from "../../../../public/assets/services/feedback.svg"
import StreamlinedProcess from '../../../../public/assets/services/streamlinedProcess.svg'
import ContinousFeedback from '../../../../public/assets/services/continousFeedback.svg'
import FlexibleHiringModels from '../../../../public/assets/services/flexibleHiringModels.svg'

const Recruitment = () => {
  return (
    <section className="pt-14 lg:pt-20">
      <div
        className="flex lg:flex-row flex-col justify-evenly lg:items-center text-white"
        id="recruitment"
      >
        <div className="">
          <h4 className="text-section font-medium">Recruitment</h4>
          <h1 className="pt-1 font-medium xl:text-4xl md:text-3xl text-2xl md:max-w-lg">
            Never be bothered by external recruitments
          </h1>
          <p className="py-5 text-base text-justify lg:max-w-sm xl:max-w-lg text-texts">
            Ease your recruitment process with our human resource team designed
            to vet and provide the best fit from our tech talents. Say goodbye
            to recruitment hassle.
          </p>

          <Link href="/business" target="_blank">
            <Button className="my-5">Recruitment</Button>
          </Link>
        </div>
        <div>
          <Image
            src="../../../../assets/services/recruitmentimg.svg"
            alt="community"
            width={590}
            height={400}
          />
        </div>
      </div>
      <div>
      <div className="lg:pt-10 pt-5 grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div className="lg:col-span-4">
          <Card src={Talent} text="Access to a vast and diverse network of tech professionals at all experience levels." title="Tech Talent" />
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

export default Recruitment;
