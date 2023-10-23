import React from "react";

const AboutStats = () => {
  return (
    <div className="pt-14 grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-4">
        <div>
          <p className="text-section font-medium text-base">Stats</p>
          <h1 className="md:text-5xl text-3xl font-semibold text-white mb-7">
            We ensure that all our services offer value.
          </h1>
        </div>
      </div>
      <div className="lg:col-span-4">
        <div className="space-y-16">
            <div>
                <h2 className="text-4xl font-normal text-text">2,500+</h2>
                <p className="text-xl font-normal text-white/90">all individual merchandise successfully delivered</p>
            </div>
            <div>
                <h2 className="text-4xl font-normal text-text">2,500+</h2>
                <p className="text-xl font-normal text-white/90">all individual merchandise successfully delivered</p>
            </div>
            <div>
                <h2 className="text-4xl font-normal text-text">2,500+</h2>
                <p className="text-xl font-normal text-white/90">all individual merchandise successfully delivered</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AboutStats;
