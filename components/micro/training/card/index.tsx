import Image from "next/image";
import { trainingProps } from "@/models/declaration";

const TrainingCard = ({timeFrame, image, quater}: trainingProps) => {
  return (
    <section className="text-white pt-14 flex lg:flex-row flex-col-reverse justify-between lg:items-center">
    <div className="">
      <Image src={image} alt="coding" width={450} height={450} />
    </div>
    <div>
      <div className="lg:pl-6 pl-0 xl:pl-0">
        <h1 className="lg:text-3xl text-xl font-medium">
          {timeFrame}-{quater} introductory training program
        </h1>
        <p className="max-w-xl lg:max-w-xl md:max-w-full font-light lg:text-lg text-texts py-5">
          Get started with a tech skill using our introductory
          training program. Get introduced to all the basics necessary to
          start a career in tech
        </p>
      </div>
    </div>
  </section>   )
}

export default TrainingCard