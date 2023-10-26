import "swiper/css";
import Image from "next/image";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Pagination, Navigation } from "swiper/modules";
import Quotation from "../../../public/assets/testimonial/Quote.svg";

const Testimonial = () => {
  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 6500,
    infinite: true,
    pauseOnHover: true,
    arrows: false,
  };
  const data = [
    {
      name: "Destiny Usiomoifo",
      company: "CEO/Founder of Vinc & Eliz",
      image: "../../../assets/testimonial/destiny.svg",
      testimonial: `Working with Innovotio was a seamless one and I love how they
      hold your hand all through the process. The service was top notch
      and even after the end of our contract, they were still
      supportive.`,
    },
    {
      name: "Cynthia Udoh",
      company: " Content Creator at PennyTree",
      image: "../../../assets/testimonial/2.svg",
      testimonial: `I currently intern as a content creator at PennyTree via
      Innovotio. As a content writer at PennyTree, the experience has
      been valuable in honing my skills and gaining practical
      knowledge in content creation.`,
    },
    {
      name: "Precious Ogiemwonyi",
      company: "Graphic Designer at Ivendigital",
      image: "../../../assets/testimonial/3.svg",
      testimonial: `Innovotio matched me with Startup Launchcode. I am already
      enjoying my role here as one of the graphic designers. The tasks
      keep pushing me to think outside the box and deep down, I know
      have been perfectly matched thanks to Innovotio.`,
    },
    {
      name: "Cynthia Udoh",
      company: " Content Creator at PennyTree",
      image: "../../../assets/testimonial/destiny.svg",
      testimonial: `I currently intern as a content creator at PennyTree via
      Innovotio. As a content writer at PennyTree, the experience has
      been valuable in honing my skills and gaining practical
      knowledge in content creation.`,
    },
  ];
  return (
    <section className="pt-14 lg:pt-20">
      <div className="flex flex-col">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          freeMode={true}
          autoplay={{
            delay: 8000,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[FreeMode, Autoplay, Navigation]}
          className="max-w-[100%] lg:max-w-[100%]"
        >
          {data.map((client) => (
            <SwiperSlide key={client.name}>
              <div className="md:mx-20 mx-14 xl:text-start text-center">
                <div className="pb-8 flex justify-center xl:justify-normal">
                  <Image alt="quotation mark" src={Quotation} width={60} />
                </div>
                <div className="text-text flex justify-between items-center">
                  <div>
                    <p className="xl:text-2xl text-sm font-space xl:text-justify xl:max-w-xl font-light leading-8">
                      {client.testimonial}
                    </p>
                    <div className="pt-8 flex flex-col max-w-full xl:justify-normal justify-center xl:text-start text-center">
                      <p className="text-sm">{client.name}</p>
                      <div className="text-sm  text-texts font-light py-2">
                        <p>{client.company}</p>
                      </div>
                    </div>
                  </div>
                  <img
                    src={client.image}
                    className="rounded-full w-72 h-72 xl:block hidden"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <hr className="lg:mt-20 mt-14 opacity-10" />
    </section>
  );
};

export default Testimonial;
