import React from "react";
import Innovation from '../../../public/assets/about/innovation.svg'
import Collaboration from '../../../public/assets/about/collaboration.svg'
import Education from '../../../public/assets/about/education.svg'
import CustomerCentric from '../../../public/assets/about/customer-centric.svg'
import Quality from '../../../public/assets/about/quality.svg'
import Integrity from '../../../public/assets/about/integrity.svg'
import Values from "@/components/micro/about";

const CoreValues = () => {
  return (
    <div className="pt-14 lg:pt-20 ">
      <div>
        <p className="text-section font-medium text-sm lg:text-base">Beliefs</p>
        <h1 className="lg:text-4xl md:text-3xl text-2xl xl:text-5xl font-medium text-text">
          Our Core Values
        </h1>
        <div className="text-texts lg:text-lg text-base text-justify md:max-w-xl font-light pt-3">
          <p>
            Our core values serve as a foundation for Innovotio&apos;s culture
            and guides our actions and decisions as we connect tech talent with
            organizations and offers valuable services.
          </p>
        </div>
      </div>
      <div className="lg:pt-10 pt-5 grid grid-cols-1 lg:grid-cols-5 gap-4">
        <div className="lg:col-span-2">
          <Values title="Innovation" text="At Innovotio, we encourage and foster a culture of innovation to stay at the forefront of technology and provide cutting-edge solutions." icon={Innovation} />
        </div>
        <div className="lg:col-span-3">
          <Values title="Collaboration" text="Emphasizing the importance of working together, both internally and with external partners, to connect tech talent effectively and help organizations achieve their goals." icon={Collaboration} />
        </div>
      </div>
      <div className="pt-4 grid grid-cols-1 lg:grid-cols-2 gap-3">
        <div>
          <Values title="Education" text="Non-stop prioritizing continuous learning and development by offering training programs, which highlights a commitment to knowledge sharing and skill enhancement." icon={Education} />
        </div>
        <div>
          <Values title="Customer-Centric" text="We place the needs and goals of clients and tech talent at the center of all services, ensuring they receive value and support tailored to their unique requirements." icon={CustomerCentric} />
        </div>
      </div>
      <div className="pt-4 grid grid-cols-1 lg:grid-cols-5 gap-3">
        <div className="lg:col-span-3">
          <Values title="Quality" text="Striving for excellence in all services, whether it's training programs, consultancy, event management, or merchandise, to consistently deliver high-quality solutions and experiences." icon={Quality} />
        </div>
        <div className="lg:col-span-2">
          <Values title="Integrity" text="Conducting business with honesty, transparency, and ethical standards, building trust with clients, partners, and the tech community." icon={Integrity} />
        </div>
      </div>
      <hr className="lg:mt-20 mt-14 opacity-10" />
    </div>
  );
};

export default CoreValues;
