import Link from "next/link";
import React from "react";

const Tal = () => {
  return (
    <nav className="absolute top-28 max-w-5xl 2xl:mx-auto 2xl:container 2xl:left-96 right-20 2xl:max-w-5xl cursor-pointer rounded-xl flex justify-between border border-[#F2F4FC24] border-opacity-10 text-text bg-[#0E1416]">
      <Link
        href="/programstraining"
        className="w-3/6 hover:bg-hover overflow-hidden px-10 max-h-full"
      >
        <div className="py-10">
          <h3 className="text-xl mb-2">Programs Training</h3>
          <p className="text-sm lg:text-xs xl:text-sm w-11/12 text-headerGrey">
            Get started into tech with our training program. Learn the all the
            basics to land your first job.
          </p>
        </div>
      </Link>

      <Link
        href="/aboutus/#community"
        className="w-3/6 hover:bg-hover overflow-hidden px-10 max-h-full"
      >
        <div className="py-10">
          <h3 className="text-xl mb-2">Community</h3>
          <p className="text-sm lg:text-xs xl:text-sm w-11/12 text-headerGrey">
            Innovotio has an active community to provide support for recuiters,
            organizations and for tech talents.
          </p>
        </div>
      </Link>

      <a
        target="_blank"
        href="/jobapplication"
        className="w-3/6 hover:bg-hover overflow-hidden px-10 max-h-full"
      >
        <div className="py-10">
          <h3 className="text-xl mb-2">Join Innovotio</h3>
          <p className="text-sm lg:text-xs xl:text-sm w-11/12 text-headerGrey">
            We work as an extension of your in-house team and assemble the right
            team members for every task and project.
          </p>
        </div>
      </a>
    </nav>
  );
};

export default Tal;
