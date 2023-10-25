import Image from "next/image";
import Link from "next/link";
import Button from "@/components/micro/button";

const Community = () => {
  return (
    <section className="pt-14 lg:pt-20">
      <div
        className="flex lg:flex-row flex-col justify-between lg:items-center text-text"
        id="community"
      >
        <div>
          <h4 className="text-section font-medium">Community</h4>
          <h1 className="pt-1 font-medium xl:text-4xl md:text-3xl text-2xl max-w-lg">
            Foster collaboration, share knowledge, & innovation
          </h1>
          <p className="py-5 text-base text-justify text-texts lg:max-w-sm xl:max-w-lg">
            We provide a platform for individuals with shared interests in
            technology to come together, collaborate, and learn from one another
            in a supportive environment.
          </p>

          <p className="text-base text-justify text-texts lg:max-w-sm xl:max-w-lg">
            By fostering collaboration and knowledge sharing, we empower
            individuals to tackle challenges collectively, push boundaries, and
            drive positive change within the tech industry.
          </p>
          <Link href="http://bit.ly/Innovotio" target="_blank">
            <Button className="my-6">Join Innovotio</Button>
          </Link>
        </div>
        <div>
          <Image
            src="../../../../assets/services/com.svg"
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

export default Community;
