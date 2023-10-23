import Image from "next/image";
import Quotation from "../../../public/assets/testimonial/Quote.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

  return (
    <section className="pt-14 lg:pt-20">
      <div className="flex flex-col justify-center text-center items-center">
        <div className="lg:flex pb-8">
          <Image alt="quotation mark" src={Quotation} width={60} />
        </div>
        <Slider
          {...settings}
          className="text-white font-light md:text-xl md:max-w-2xl max-w-[300px] sm:max-w-[355px] text-base"
        >
          <div>
          <p className="lg:text-2xl leading-9">
              Working with Innovotio was a seamless one and I love how they hold
              your hand all through the process. The service was topnotch and
              even after the end of our contract, they were still supportive.
            </p>
            <div className="py-4 flex flex-col max-w-full justify-center items-center">
              <p className="text-sm">Destiny Usiomoifo</p>
              <div className="text-sm flex justify-between text-text py-2">
                <p>CEO/Founder of Vinc & Eliz</p>
              </div>
            </div>
          </div>
          <div>
          <p className="lg:text-2xl leading-9">
              I currently intern as a content creator at PennyTree via
              Innovotio. As a content writer at PennyTree, the experience has
              been valuable in honing my skills and gaining practical knowledge
              in content creation.
            </p>

            <div className="py-4 flex flex-col max-w-full justify-center items-center">
              <p className="text-sm">Cynthia Udoh</p>
              <div className="text-sm flex justify-between text-text py-2">
                <p> Content Creator at PennyTree</p>
              </div>
            </div>
          </div>
          <div>
            <p className="lg:text-2xl leading-9">
              Innovotio matched me with Startup Launchcode. I am already
              enjoying my role here as one of the graphic designers. The tasks
              keep pushing me to think outside the box and deep down, I know
              have been perfectly matched thanks to Innovotio.
            </p>

            <div className="py-4 flex flex-col max-w-full justify-center items-center">
              <p className="text-sm">Precious Ogiemwonyi</p>
              <div className="text-sm flex justify-between text-text py-2">
                <p> Graphic Designer at Ivendigital</p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      <hr className="lg:mt-20 mt-14 opacity-10" />
    </section>
  );
};

export default Testimonial;
