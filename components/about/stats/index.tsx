const Stats = () => {
  return (
    <div className="pt-14 lg:pt-20">
      <div className="flex xl:flex-row flex-col justify-between">
        <div className="xl:max-w-[40%]">
          <div>
            <p className="text-section font-medium text-sm lg:text-base">Stats</p>
            <h1 className=" lg:text-4xl md:text-3xl text-2xl xl:text-5xl xl:max-w-lg max-w-sm font-medium text-text mb-7">
              We ensure that all our services offer value.
            </h1>
          </div>
        </div>
        <div className="xl:max-w-[60%] pt-5 xl:pt-0 grid md:grid-cols-2 grid-cols-1 gap-y-16 md:gap-y-0 md:gap-x-10">
        <div className="space-y-16">
              <div className="space-y-3 max-w-xs">
                <h2 className="lg:text-4xl text-2xl text-text">50+</h2>
                <p className="text-lg text-texts">
                  All individual merchandise successfully delivered
                </p>
              </div>
              <div className="space-y-3 max-w-xs">
                <h2 className="lg:text-4xl text-2xl text-text">6%</h2>
                <p className="text-lg text-texts">
                  Average revenue growth within few months of operation
                </p>
              </div>
              <div className="space-y-3 max-w-xs">
                <h2 className="lg:text-4xl text-2xl text-text">10</h2>
                <p className="text-lg text-texts">
                  Number companies registered through us
                </p>
              </div>
            </div>
            <div className="space-y-16">
            <div className="space-y-3 max-w-[250px]">
                <h2 className="lg:text-4xl text-2xl text-text">100</h2>
                <p className="text-lg text-texts">
                  Total number of soft skills Alumnis
                </p>
              </div>
              <div className="space-y-3 max-w-xs">
                <h2 className="lg:text-4xl text-2xl font-normal text-text">8</h2>
                <p className="text-lg font-normal text-texts">
                  Tech events managed since we began
                </p>
              </div>
              <div className="space-y-3 max-w-xs">
                <h2 className="lg:text-4xl text-2xl  font-normal text-text">20+</h2>
                <p className="text-lg font-normal text-texts">
                  Number of brands that have trusted us to deliver quality
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
