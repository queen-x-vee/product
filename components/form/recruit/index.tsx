import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { HiOutlineArrowLeft } from "react-icons/hi";
import Copyright from "@/components/footer/copyright";
import Supabase from "@/components/database/supabase";
import Logo from "../../../public/assets/footer/Logo.svg";
import formImage from "../../../public/assets/form/Account.svg";

const Recruit = () => {
  const router = useRouter();
  const [loading, setLoading] = React.useState<boolean>(false);
  const [isEmailValid, setIsEmailValid] = React.useState<boolean>(true);
  const [form, setForm] = React.useState({
    company_name: "",
    country: "",
    first_name: "",
    last_name: "",
    work_email: "",
    website: "",
    phone_number: "",
    employee_range: "",
    position: "",
    mode_of_work: "",
    employment_type: "",
    commencement_date: "",
    role: "",
    skills: "",
  });
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.work_email);
  const handleSubmit = async (e: any) => {
    setIsEmailValid(isValidEmail);
    e.preventDefault();
    if (isValidEmail == true) {
      setLoading(true);
      const { data, error } = await Supabase.from("recruit")
        .insert([form])
        .select();
      if (error) {
        console.log("An error occurred, please try again later");
      } else {
        toast.success("Your request has been successfully submitted!");
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
                merch.
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
              Hire proactively, hire best.
            </h1>

            <form className="bg-form" onSubmit={handleSubmit}>
              <div className="grid xl:grid-cols-2 gap-x-5 ">
                <input
                  type="text"
                  value={form.company_name}
                  onChange={(e) =>
                    setForm({ ...form, company_name: e.target.value })
                  }
                  required
                  placeholder="Company Name"
                  className="rounded-md mb-8 px-2 py-2 h-12 lg:h-12"
                />
                <input
                  type="text"
                  value={form.country}
                  onChange={(e) =>
                    setForm({ ...form, country: e.target.value })
                  }
                  required
                  placeholder="Country"
                  className="rounded-md mb-8 px-2 py-2 h-12 lg:h-12"
                />
                <input
                  type="text"
                  value={form.first_name}
                  onChange={(e) =>
                    setForm({ ...form, first_name: e.target.value })
                  }
                  required
                  placeholder="First Name"
                  className="rounded-md mb-8 px-2 py-2 h-12 lg:h-12"
                />
                <input
                  type="text"
                  value={form.last_name}
                  onChange={(e) =>
                    setForm({ ...form, last_name: e.target.value })
                  }
                  required
                  placeholder="Last Name"
                  className="rounded-md mb-8 px-2 py-2 h-12 lg:h-12 "
                />
                <div className="mb-6">
                  <input
                    type="email"
                    value={form.work_email}
                    onBlur={() => setIsEmailValid(isValidEmail)}
                    onChange={(e) =>
                      setForm({ ...form, work_email: e.target.value })
                    }
                    required
                    placeholder="Work Email"
                    className="rounded-md px-2 py-2 mb-2 w-full h-12 lg:h-12"
                  />
                  {!isEmailValid && (
                    <p className="text-red-500">Invalid email address</p>
                  )}
                </div>
                <input
                  type="text"
                  value={form.website}
                  onChange={(e) =>
                    setForm({ ...form, website: e.target.value })
                  }
                  required
                  placeholder="Company Website"
                  className="rounded-md mb-8 px-2 py-2 h-12 lg:h-12 "
                />
                <input
                  type="number"
                  value={form.phone_number}
                  onChange={(e) =>
                    setForm({ ...form, phone_number: e.target.value })
                  }
                  required
                  placeholder="Phone Number"
                  className="rounded-md mb-8 px-2 py-2 h-12 lg:h-12"
                />

                <input
                  type="text"
                  value={form.employee_range}
                  onChange={(e) =>
                    setForm({ ...form, employee_range: e.target.value })
                  }
                  required
                  placeholder="Employee Range"
                  className="rounded-md mb-8 px-2 py-2 h-12 lg:h-12"
                />

                <input
                  type="text"
                  value={form.position}
                  onChange={(e) =>
                    setForm({ ...form, position: e.target.value })
                  }
                  required
                  placeholder="Current Role"
                  className="rounded-md mb-8 px-2 py-2 h-12 lg:h-12"
                />
                <select
                  value={form.mode_of_work}
                  required
                  onChange={(e) => setForm({ ...form, mode_of_work: e.target.value })}
                  className="w-full h-14 text-slate-400 rounded-md  mb-8 px-2 py-2 lg:h-12"
                >
                  <option>Mode of work</option>
                  <option>Onsite</option>
                  <option>Hybrid</option>
                  <option>Remote</option>
                </select>
               
                <input
                  type="text"
                  value={form.employment_type}
                  onChange={(e) =>
                    setForm({ ...form, employment_type: e.target.value })
                  }
                  required
                  placeholder="Employment Type"
                  className="rounded-md mb-8 px-2 py-2 h-12 lg:h-12"
                />

                <input
                  type="text"
                  value={form.commencement_date}
                  onChange={(e) =>
                    setForm({ ...form, commencement_date: e.target.value })
                  }
                  required
                  placeholder="Commencement Date"
                  className="rounded-md mb-8 px-2 py-2 h-12 lg:h-12"
                />
              </div>
              <input
                type="text"
                value={form.skills}
                required
                onChange={(e) => setForm({ ...form, skills: e.target.value })}
                placeholder="Skill Requirements"
                className="w-full h-14 text-slate-400 rounded-md  mb-8 px-2 py-2 lg:h-12"
              />
              <select
                value={form.role}
                required
                onChange={(e) => setForm({ ...form, role: e.target.value })}
                className="w-full h-14 text-slate-400 rounded-md  mb-8 px-2 py-2 lg:h-12"
              >
                <option>Roles hiring for</option>
                <option>Front-End Developer</option>
                <option>Digital Marketer</option>
                <option>Product Manager</option>
                <option>Community Manager</option>
                <option>Back-End Developer</option>
                <option>UX Researcher</option>
                <option>Content Creator</option>
                <option>Grpahics Designer</option>
                <option>Operations Manager</option>
                <option>Blockchain Developer</option>
                <option>Quality Assurance Tester</option>
                <option>Others</option>
              </select>

              <div className="flex flex-col"></div>

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

export default Recruit;
