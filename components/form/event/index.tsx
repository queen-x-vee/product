import React from "react";
import Link from "next/link";
import Image from "next/image";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import Logo from "../../../public/assets/footer/Logo.svg";
import formImage from "../../../public/assets/form/Account.svg";
import { HiOutlineArrowLeft } from "react-icons/hi";
import Copyright from "@/components/footer/copyright";
import Supabase from "@/components/database/supabase";

const Event = () => {
  const router = useRouter();
  const [loading, setLoading] = React.useState<boolean>(false);
  const [isEmailValid, setIsEmailValid] = React.useState<boolean>(true);
  const [form, setForm] = React.useState({
    company_name: "",
    country: "",
    first_name: "",
    last_name: "",
    work_email: "",
    phone_number: "",
    event_name: "",
    scheduled_date: "",
    type_of_event: "",
    location: "",
    attendees_range: "",
    budget: "",
    feedback: "",
  });
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.work_email);
  const handleSubmit = async (e: any) => {
    setIsEmailValid(isValidEmail);
    e.preventDefault();
    if (isValidEmail == true) {
      setLoading(true);
      const { data, error } = await Supabase.from("event")
        .insert([form])
        .select();
      if (error) {
        console.log("An error occurred, please try again later");
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
              Give your guests a quality time
            </h1>

            <form className="bg-form" onSubmit={handleSubmit}>
              <div className="grid xl:grid-cols-2 gap-x-5 ">
                <input
                  type="text"
                  placeholder="Company Name"
                  value={form.company_name}
                  onChange={(e) =>
                    setForm({ ...form, company_name: e.target.value })
                  }
                  required
                  className="rounded-md mb-8 px-2 py-2 h-12 lg:h-12"
                />
                <input
                  type="text"
                  placeholder="Country"
                  value={form.country}
                  onChange={(e) =>
                    setForm({ ...form, country: e.target.value })
                  }
                  required
                  className="rounded-md mb-8 px-2 py-2 h-12 lg:h-12"
                />
                <input
                  type="text"
                  placeholder="First Name"
                  value={form.first_name}
                  onChange={(e) =>
                    setForm({ ...form, first_name: e.target.value })
                  }
                  required
                  className="rounded-md mb-8 px-2 py-2 h-12 lg:h-12"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={form.last_name}
                  onChange={(e) =>
                    setForm({ ...form, last_name: e.target.value })
                  }
                  required
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
                    placeholder="Work Email"
                    className="rounded-md px-2 py-2 mb-2 w-full h-12 lg:h-12"
                  />
                  {!isEmailValid && (
                    <p className="text-red-500">Invalid email address</p>
                  )}
                </div>

                <input
                  type="number"
                  placeholder="Phone Number"
                  value={form.phone_number}
                  onChange={(e) =>
                    setForm({ ...form, phone_number: e.target.value })
                  }
                  required
                  className="rounded-md mb-8 px-2 py-2 h-12 lg:h-12"
                />

                <input
                  type="text"
                  placeholder="Event Name"
                  value={form.event_name}
                  onChange={(e) =>
                    setForm({ ...form, event_name: e.target.value })
                  }
                  required
                  className=" rounded-md mb-8 px-2 py-2 h-12 lg:h-12"
                />
                <input
                  type="text"
                  placeholder="Scheduled Date"
                  value={form.scheduled_date}
                  onChange={(e) =>
                    setForm({ ...form, scheduled_date: e.target.value })
                  }
                  required
                  className="rounded-md mb-8 px-2 py-2 h-12 lg:h-12"
                />
                <input
                  type="text"
                  placeholder="Type of Event"
                  value={form.type_of_event}
                  onChange={(e) =>
                    setForm({ ...form, type_of_event: e.target.value })
                  }
                  required
                  className="w-full h-14 rounded-md  mb-8 px-2 py-2 lg:h-12"
                />
                <input
                  type="text"
                  placeholder="Location"
                  value={form.location}
                  onChange={(e) =>
                    setForm({ ...form, location: e.target.value })
                  }
                  required
                  className="rounded-md mb-8 px-2 py-2 h-12 lg:h-12"
                />
                <input
                  type="text"
                  placeholder="Attendee's Range"
                  value={form.attendees_range}
                  onChange={(e) =>
                    setForm({ ...form, attendees_range: e.target.value })
                  }
                  required
                  className="rounded-md mb-8 px-2 py-2 h-12 lg:h-12"
                />

                <input
                  type="text"
                  placeholder="Budget"
                  value={form.budget}
                  onChange={(e) => setForm({ ...form, budget: e.target.value })}
                  required
                  className="rounded-md mb-8 px-2 py-2 h-12 lg:h-12"
                />
              </div>

              <textarea
                value={form.feedback}
                onChange={(e) => setForm({ ...form, feedback: e.target.value })}
                placeholder="Anyhing else you would like to discuss?"
                className="rounded-md mb-8 px-2 py-2 h-28 lg:h-40 w-full"
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

export default Event;
