import React from "react";
import one from "../../../public/assets/program/1.svg";
import six from "../../../public/assets/program/6.svg";
import three from "../../../public/assets/program/3.svg";
import TrainingCard from "@/components/micro/training/card";
import creative from "../../../public/assets/program/creative.svg";
import Button from "@/components/micro/button";

const Training = () => {
  const [options, setOptions] = React.useState({
    month: 1,
  });
  const handleOptions = (value:number) => {
    setOptions({ ...options, month: value });
  };

  return (
    <section className="pt-14 lg:pt-20 text-white">
      <div>
        <div>
          <h1 className=" lg:text-4xl md:text-3xl text-2xl xl:text-5xl font-medium">Talent Building Programs</h1>
          <p className="text-base lg:text-lg max-w-3xl text-texts font-light py-5">
            Put your best foot forward and fast track landing a new tech job
            with innovotio.
          </p>
        </div>
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 max-w-sm md:max-w-full lg:max-w-4xl pt-6">
          <Button
            onClick={() => handleOptions(1)}
            className={
              options.month === 1
                ? "bg-section lg:w-44 w-28 h-14 lg:h-16 text-lg lg:text-2xl text-black !rounded-full"
                : "lg:w-44 w-28 h-14 lg:h-16 text-lg lg:text-2xl text-white !rounded-full"
            }
          >
            1 month
          </Button>
          <Button
            onClick={() => handleOptions(3)}
            className={
              options.month === 3
              ? "bg-section lg:w-44 w-28 h-14 lg:h-16 text-lg lg:text-2xl text-black !rounded-full"
              : "lg:w-44 w-28 h-14 lg:h-16 text-lg lg:text-2xl text-white !rounded-full"
            }
          >
            3 months
          </Button>
          <Button
            onClick={() => handleOptions(6)}
            className={
              options.month === 6
              ? "bg-section lg:w-44 w-28 h-14 lg:h-16 text-lg lg:text-2xl text-black !rounded-full"
              : "lg:w-44 w-28 h-14 lg:h-16 text-lg lg:text-2xl text-white !rounded-full"
            }
          >
            6 months
          </Button>
          <Button
            onClick={() => handleOptions(12)}
            className={
              options.month === 12
              ? "bg-section lg:w-44 w-28 h-14 lg:h-116 text-lg lg:text-2xl text-black !rounded-full"
              : "lg:w-44 w-28 h-14 lg:h-16 text-lg lg:text-2xl text-white !rounded-full"
            }
          >
            1 year
          </Button>
        </div>
      </div>

      <div className="pt-5">
        {options.month === 1 ? (
          <TrainingCard timeFrame={1} image={creative} quater="month" />
        ) : options.month === 3 ? (
          <TrainingCard timeFrame={3} image={three} quater="months" />
        ) : options.month === 6 ? (
          <TrainingCard timeFrame={6} image={six} quater="months" />
        ) : (
          <TrainingCard timeFrame={1} image={one} quater="year" />
        )}
      </div>
      <hr className="lg:mt-20 mt-14 opacity-10" />
    </section>
  );
};

export default Training;
