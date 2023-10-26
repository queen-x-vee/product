import React from "react";
import Link from "next/link";
import Image from "next/image";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { HiOutlineArrowLeft } from "react-icons/hi";
import Copyright from "@/components/footer/copyright";
import Supabase from "@/components/database/supabase";
import Logo from "../../../public/assets/footer/Logo.svg";
import formImage from "../../../public/assets/form/Account.svg";

const Talent = () => {
  const router = useRouter();
  const [loading, setLoading] = React.useState<boolean>(false);
  const [isEmailValid, setIsEmailValid] = React.useState<boolean>(true);
  const [form, setForm] = React.useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    state: "",
    role: "",
    company: "",
    years_of_experience: "",
    resume: "",
    portfolio: "",
    question: "",
  });

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsEmailValid(isValidEmail);
    if (isValidEmail == true) {
      setLoading(true);
      const { data, error } = await Supabase.from("talent")
        .insert([form])
        .select();
      if (error) {
        toast.error("An error occurred, please try again later");
      } else {
        toast.success("Your request has been successfully submitted. Thank you!");
        setTimeout(() => {
          router.push("/");
        }, 1500);
      }
      setLoading(false);
    }
  };

  return (
    <>
      <section className="flex min-h-screen w-12/12 2xl:mx-auto 2xl:container">
        <section className="w-3/12 hidden bg-primary md:pt-10 px-10 md:px-4 md:flex flex-col justify-between">
          <div className="">
            <Link href="/">
              <Image
                src={Logo}
                alt="Logo"
                width={140}
                height={120}
                className=""
              />
            </Link>

            <figcaption>
              <p className="pt-5 leading-8 text-text text-lg font-medium italic">
                Your super-stop for tech recruitment, tech event management &
                merchandise.
              </p>
            </figcaption>
          </div>
          <figure>
            <Link href="/">
              <Image
                src={formImage}
                alt="chart"
                width={500}
                height={500}
                className=""
              />
            </Link>
          </figure>
        </section>
        <section className="md:w-9/12 w-full overflow-x-hidden bg-form">
          <nav className="md:hidden bg-[#182222] h-20 flex items-center px-4 ">
            <Link href="/">
              <Image
                src={Logo}
                alt="Logo"
                width={140}
                height={120}
                className=""
              />
            </Link>
          </nav>
          <div className=" lg:px-10 px-4 md:px-4">
            <Link href="/">
              <div className="flex items-center pt-5 md:pt-12">
                <div onClick={() => router.back()}>
                  <HiOutlineArrowLeft />
                </div>
                <p className="ml-4 cursor-pointer text-lg">Go back</p>
              </div>
            </Link>
            <h1 className="text-lg lg:text-2xl pb-8 pt-5 lg:w-full md:w-96 w-full ">
              Become the next Innovative talent
            </h1>

            <form className="bg-form" onSubmit={handleSubmit}>
              <div className="grid xl:grid-cols-2 gap-x-5 ">
                <input
                  type="text"
                  value={form.first_name}
                  onChange={(e) =>
                    setForm({ ...form, first_name: e.target.value })
                  }
                  placeholder="First Name"
                  required
                  className="rounded-md mb-8 px-2 py-2 h-12 lg:h-12"
                />
                <input
                  type="text"
                  value={form.last_name}
                  onChange={(e) =>
                    setForm({ ...form, last_name: e.target.value })
                  }
                  placeholder="Last Name"
                  required
                  className="rounded-md mb-8 px-2 py-2 h-12 lg:h-12 "
                />
                <div className="mb-6">
                  <input
                    type="email"
                    value={form.email}
                    onBlur={() => setIsEmailValid(isValidEmail)}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    placeholder="Work Email"
                    className="rounded-md px-2 py-2 mb-2 w-full h-12 lg:h-12"
                  />
                  {!isEmailValid && (
                    <p className="text-red-500">Invalid email address</p>
                  )}
                </div>
                <input
                  type="text"
                  value={form.phone_number}
                  onChange={(e) =>
                    setForm({ ...form, phone_number: e.target.value })
                  }
                  placeholder="Phone Number"
                  required
                  className="rounded-md mb-8 px-2 py-2 h-12 lg:h-12"
                />
                <input
                  type="text"
                  value={form.state}
                  onChange={(e) => setForm({ ...form, state: e.target.value })}
                  placeholder="State/Country"
                  required
                  className="rounded-md mb-8 px-2 py-2 h-12 lg:h-12"
                />
                <input
                  type="text"
                  value={form.role}
                  onChange={(e) => setForm({ ...form, role: e.target.value })}
                  placeholder="Current Role"
                  required
                  className="rounded-md mb-8 px-2 py-2 h-12 lg:h-12 "
                />
                <input
                  type="text"
                  value={form.company}
                  onChange={(e) =>
                    setForm({ ...form, company: e.target.value })
                  }
                  placeholder="Current Company "
                  required
                  className="rounded-md mb-8 px-2 py-2 h-12 lg:h-12 "
                />
                <input
                  type="text"
                  value={form.years_of_experience}
                  onChange={(e) =>
                    setForm({ ...form, years_of_experience: e.target.value })
                  }
                  placeholder="Years of experience"
                  required
                  className="rounded-md mb-8 px-2 py-2 h-12 lg:h-12"
                />

                <input
                  type="text"
                  value={form.resume}
                  onChange={(e) => setForm({ ...form, resume: e.target.value })}
                  placeholder="resume link"
                  required
                  className="rounded-md mb-8 px-2 py-2 h-12 lg:h-12"
                />
                <input
                  type="text"
                  value={form.portfolio}
                  onChange={(e) =>
                    setForm({ ...form, portfolio: e.target.value })
                  }
                  placeholder="Portfolio link"
                  required
                  className=" rounded-md mb-8 px-2 py-2 h-12 lg:h-12"
                />
              </div>

              <textarea
                value={form.question}
                onChange={(e) => setForm({ ...form, question: e.target.value })}
                placeholder="What makes you a good fit for this role?"
                required
                className="rounded-md mb-8 px-2 py-2 h-28 w-full lg:h-40"
              />
              <div className="w-full mb-5  bg-[#DDDDDD] h-12 rounded-md flex justify-center">
                <button disabled={loading == true}>Submit</button>
              </div>
            </form>
          </div>
        </section>
      </section>
      <div className="pb-1 px-5">
        <Copyright />
      </div>
    </>
  );
};

export default Talent;
