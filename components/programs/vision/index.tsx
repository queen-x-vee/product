import { FaPeopleArrows } from "react-icons/fa";
import { BsPeople, BsPersonWorkspace } from "react-icons/bs";

const Vision = () => {
  return (
    <section className="pt-8 lg:pt-16 text-text flex lg:flex-row flex-col lg:items-center justify-between">
      <div className="lg:w-4/12 w-9/12 md:w-full">
        <h1 className="xl:text-4xl lg:mb-0 pb-5 text-2xl font-medium xl:max-w-xs max-w-[200px]">
          Our Future Training Vision
        </h1>
      </div>
      <div className="text-dark font-light grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        <div>
          <BsPeople className="h-7 w-7 lg:text-text text-yellow" />
          <p className="max-w-[300px] py-2">
            Vast & Diverse range of world-class experienced recruiters
          </p>
        </div>
        <div>
          <FaPeopleArrows className="h-7 w-7 lg:text-white text-yellow" />
          <p className="max-w-[300px] py-2">
            A wide pool of highly skilled talents from around the world.
          </p>
        </div>
        <div>
          <BsPersonWorkspace className="h-7 w-7 lg:text-white text-yellow" />
          <p className="max-w-[300px] py-2">
            An extensive and diverse team of exceptional professionals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Vision;