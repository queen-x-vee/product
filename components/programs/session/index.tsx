import Image from "next/image";
import program from "../../../public/assets/program/dev.svg";
import peer from "../../../public/assets/program/peer.svg";
import privateI from "../../../public/assets/program/private.svg";

const Session = () => {
  return (
    <section className="pt-14 lg:pt-20 ">
      <div className="text-text flex lg:flex-row lg:items-center flex-col justify-between">
        <div>
          <h1 className="lg:text-4xl text-2xl md:text-3xl font-medium leading-10 max-w-md md:max-w-lg">
            We also offer a variety of training styles for student
          </h1>
          <div>
            <div className="py-9">
              <div className="flex">
                <Image src={privateI} alt="coding" width={30} height={31} />
                <h4 className="pl-3 sm:text-2xl  font-medium">
                  Private training sessions
                </h4>
              </div>
              <p className=" py-2 text-base font-light max-w-lg lg:max-w-md text-justify text-dark leading-7">
                If you learn better alone, you can opt for a private training
                session to have a private tutor to work one on one with you to
                brush up your tech skills.
              </p>
            </div>
            <div>
              <div className="flex">
                <Image src={peer} alt="coding" width={30} height={31} />
                <h4 className="sm:text-2xl ml-3 font-medium">
                  Peer training sessions
                </h4>
              </div>

              <p className="py-2 text-base font-light max-w-lg lg:max-w-md text-justify text-dark leading-7">
                If you learn better in a group, you can opt for our group
                training sessions to learn with a community of people with
                similar interest
              </p>
            </div>
          </div>
        </div>
        <div>
          <Image src={program} alt="coding" width={475} height={416} />
        </div>
      </div>

      <hr className="lg:mt-20 mt-10 opacity-10" />
    </section>
  );
};

export default Session;
