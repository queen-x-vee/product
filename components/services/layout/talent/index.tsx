import Link from "next/link";
import Image from "next/image";
import Button from "@/components/micro/button";
import Card from "@/components/micro/services/card";
import IndustryExpertise from "../../../../public/assets/services/industryExpertise.svg";
import Talents from "../../../../public/assets/services/techTalent.svg";
import Feedback from "../../../../public/assets/services/feedback.svg";
import SkillDevelopment from "../../../../public/assets/services/skillDevelopment.svg";
import DiverseOpportunities from "../../../../public/assets/services/diverseOpportunities.svg";
import JobMarketInsights from "../../../../public/assets/services/jobMarketInsights.svg";

const Talent = () => {
  return (
    <section className="lg:pt-12 pt-6 text-text">
      <div
        className="flex lg:flex-row flex-col-reverse lg:space-x-5 justify-between lg:items-center"
        id="talent"
      >
        <div>
          <Image
            src="../../../../assets/services/talent2.svg"
            alt="community"
            width={590}
            height={400}
          />
        </div>
        <div>
          <h4 className="text-section font-medium">Tech Talent Management</h4>
          <h1 className="pt-1 font-medium xl:text-4xl md:text-3xl text-2xl md:max-w-md">
            Management support for all tech talents
          </h1>
          <p className="pt-5 text-base text-justify text-texts lg:max-w-sm xl:max-w-lg">
            We train, assess and maintain the quality of our talent pool
            regularly to ensure satisfaction both for businesses and talents.
          </p>
          <Link href="/services/talent" target="_blank">
            <Button className="my-5">Get In Touch</Button>
          </Link>
        </div>
      </div>
      <div>
        <div className="lg:pt-10 pt-5 grid grid-cols-1 lg:grid-cols-3 gap-y-10 gap-x-5">
          <div>
            <Card
              src={SkillDevelopment}
              text="Ongoing training and upskilling opportunities to keep tech talent updated."
              title="Skill Development"
            />
          </div>
          <div>
            <Card
              src={DiverseOpportunities}
              text="Access to a wide range of job opportunities and projects in the tech industry."
              title="Diverse Opportunities"
            />
          </div>
          <div>
            <Card
              src={JobMarketInsights}
              text="Access to information on job market trends and demand for specific tech skills."
              title="Job Market Insights"
            />
          </div>

          <div>
            <Card
              src={Talents}
              text="Incentives for referring other tech professionals to join the talent pool."
              title="Referral Programs"
            />
          </div>
          <div>
            <Card
              src={Feedback}
              text="Opportunities to engage with a supportive tech community and collaborate on projects."
              title="Community Engagement"
            />
          </div>
          <div>
            <Card
              src={IndustryExpertise}
              text=" Access to certification programs and industry-recognized credentials."
              title="Certification Opportunities"
            />
          </div>
        </div>
      </div>
      <hr className="lg:mt-20 mt-14 opacity-10" />
    </section>
  );
};

export default Talent;
