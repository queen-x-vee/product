import Link from "next/link";
import Image from "next/image";
import Button from "@/components/micro/button";

const Recruitment = () => {
  return (
    <section className="pt-14 lg:pt-20">
      <div
        className="flex lg:flex-row flex-col justify-between lg:items-center text-text"
        id="recruitment"
      >
        <div>
          <h4 className="text-section font-medium">
            Recruitment
          </h4>
          <h1 className="pt-1 font-medium xl:text-4xl md:text-3xl text-2xl md:max-w-lg">
            Never be bothered by external recruitments
          </h1>
          <p className="py-5 text-base text-justify lg:max-w-sm xl:max-w-lg text-texts">
            Ease your recruitment process with our human resource team designed
            to vet and provide the best fit from our tech talents. Say goodbye
            to recruitment hassle.
          </p>

          <Link href="/services/recruit" target="_blank">
            <Button className="my-5">Recruit A Team</Button>
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
      <hr className="lg:mt-20 mt-14 opacity-10" />
    </section>
  );
};

export default Recruitment;
