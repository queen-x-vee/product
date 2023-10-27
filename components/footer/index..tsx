import Link from "next/link";
import Image from "next/image";
import Copyright from "./copyright";
import Button from "../micro/button";

function Footer() {
  return (
    <footer className="mx-auto container md:p-10 p-5 text-text cursor-pointer">
      <h1
        data-aos="fade-up"
        className="lg:max-w-2xl max-w-lg lg:text-4xl xl:text-5xl text-3xl tracking-wide font-medium"
      >
        Your one stop for <span className="text-section">talent,</span> event{" "}
        <span className="text-section">and </span> merchandise
      </h1>
      <section className="w-12/12 flex lg:flex-row flex-col-reverse pt-14 lg:pt-20">
        <div className="lg:w-5/12 lg:mt-0 mt-10 w-12/12 flex flex-col">
          <figure>
            <Image
              src="../.././assets/footer/Logo.svg"
              alt="Logo"
              width={140}
              height={140}
            />
          </figure>
          <div className="">
              <a target="_blank" href="mailto:talents@innovotio.com">
                <Button className="my-5 bg-text text-black">
                  Get In Touch
                </Button>
              </a>
          </div>

          <figure className="flex justify-between items-center w-52 md:w-64 mt-10">
            <Link
              href="https://web.facebook.com/people/Innovotio/100087403136156/?mibextid=ZbWKwL"
              legacyBehavior
            >
              <a target="_blank">
                <Image
                  src="../.././assets/footer/Facebook.svg"
                  alt="Logo"
                  width={30}
                  height={30}
                />
              </a>
            </Link>

            <Link href="https://www.instagram.com/innovotio/" legacyBehavior>
              <a target="_blank">
                <Image
                  src="../.././assets/footer/Instagram.svg"
                  alt="Logo"
                  width={40}
                  height={40}
                />
              </a>
            </Link>

            <Link
              href="https://www.linkedin.com/company/innovotio-limited/"
              legacyBehavior
            >
              <a target="_blank">
                <Image
                  src="../.././assets/footer/LinkedIn.svg"
                  alt="Logo"
                  width={40}
                  height={40}
                />
              </a>
            </Link>
            <Link href="https://twitter.com/Innovotio" legacyBehavior>
              <a target="_blank">
                <Image
                  src="../.././assets/footer/Twitter.svg"
                  alt="Logo"
                  width={40}
                  height={40}
                />
              </a>
            </Link>
          </figure>
        </div>
        <div className="grid md:grid-cols-2 grid-col-1 gap-16 text-lg lg:gap-0 lg:grid-cols-3 lg:w-7/12 w-11/12">
          <ul className="w-12/12 space-y-5">
            <li className=" text-[#A3A3A3]">Services</li>
            <li>
              <Link href="/services/#recriutment">Recruitment</Link>
            </li>

            <li>
              <Link href="/services/#event">Events</Link>
            </li>
            <li>
              <Link href="/services/#consultancy">Consultancy</Link>
            </li>
            <li>
              <Link href="/services/#consultancy">Merchandising</Link>
            </li>
            <li>
              <Link href="/services/#community">Community</Link>
            </li>
          </ul>
          <ul className="space-y-5">
            <li className=" text-[#A3A3A3]">Company</li>
            <li>
              <Link href="/aboutus">Who we are</Link>
            </li>
            <li>Careers</li>
            <li>Blogs</li>
          </ul>
          <ul className="space-y-5 w-96">
            <li className="text-[#A3A3A3]">Contact Us</li>
            <li>
              <a href="mailto:talents@innovotio.com">talents@innovotio.com</a>
            </li>
            <li>+234 901 32456</li>
          </ul>
        </div>
      </section>
      <hr className="lg:mt-20 mt-14 opacity-10" />
      <Copyright />
    </footer>
  );
}

export default Footer;
