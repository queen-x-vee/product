import AboutCard from "@/components/micro/aboutCard";
import React from "react";

const CoreValues = () => {
  return (
    <div className="pt-14 lg:pt-32 ">
      <div>
        <p className="text-section font-medium text-base">Beliefs</p>
        <h1 className="md:text-5xl text-4xl font-semibold text-white mb-7">
          Our Core Values
        </h1>
        <div className="text-dark lg:text-xl text-base text-justify  max-w-xl md:max-w-3xl font-light">
          <p>
            Our core values serve as a foundation for Innovotio&apos;s culture
            and guides our actions and decisions as we connect tech talent with
            organizations and offers valuable services.
          </p>
        </div>
      </div>
      <div className="pt-14 grid grid-cols-1 lg:grid-cols-12 gap-5">
        <div className="lg:col-span-5">
          <AboutCard title="Innovation" text="At Innovotio, we encourage and foster a culture of innovation to stay at the forefront of technology and provide cutting-edge solutions." icon="hi" />
        </div>
        <div className="lg:col-span-7">
          <AboutCard title="Collaboration" text="Emphasizing the importance of working together, both internally and with external partners, to connect tech talent effectively and help organizations achieve their goals." icon="hi" />
        </div>
      </div>
      <div className="pt-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-2">
          <AboutCard title="Education" text="Non-stop prioritizing continuous learning and development by offering training programs, which highlights a commitment to knowledge sharing and skill enhancement." icon="hi" />
        </div>
        <div className="lg:col-span-2">
          <AboutCard title="Customer-Centric" text="We place the needs and goals of clients and tech talent at the center of all services, ensuring they receive value and support tailored to their unique requirements." icon="hi" />
        </div>
      </div>
      <div className="pt-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-7">
          <AboutCard title="Quality" text="Striving for excellence in all services, whether it's training programs, consultancy, event management, or merchandise, to consistently deliver high-quality solutions and experiences." icon="hi" />
        </div>
        <div className="lg:col-span-5">
          <AboutCard title="Integrity" text="Conducting business with honesty, transparency, and ethical standards, building trust with clients, partners, and the tech community." icon="hi" />
        </div>
      </div>
      <hr className="lg:mt-20 mt-14 opacity-10" />
    </div>
  );
};

export default CoreValues;
