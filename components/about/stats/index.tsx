
import React from "react";

const Stats = () => {
  return (
    <div className="pt-14 lg:pt-32 ">
      <div className="pt-14 grid grid-cols-1 lg:grid-cols-12 lg:gap-20 ">
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
              <p className="text-xl font-normal text-white/90">
                all individual merchandise successfully delivered
              </p>
            </div>
            <div>
              <h2 className="text-4xl font-normal text-text">6%</h2>
              <p className="text-xl font-normal text-white/90">
                average revenue growth within few months of operation
              </p>
            </div>
            <div>
              <h2 className="text-4xl font-normal text-text">4</h2>
              <p className="text-xl font-normal text-white/90">
                number companies registered through us
              </p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-4">
          <div className="space-y-16">
            <div>
              <h2 className="text-4xl font-normal text-text">234</h2>
              <p className="text-xl font-normal text-white/90">
              total number of soft skills trained  techies
              </p>
            </div>
            <div>
              <h2 className="text-4xl font-normal text-text">8</h2>
              <p className="text-xl font-normal text-white/90">
              tech events manage since we began
              </p>
            </div>
            <div>
              <h2 className="text-4xl font-normal text-text">12</h2>
              <p className="text-xl font-normal text-white/90">
              number of brands that have trusted us to deliver quality
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr className="lg:mt-20 mt-14 opacity-10" />
    </div>
  );
};

export default Stats;
