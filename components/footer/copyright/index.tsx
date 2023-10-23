import React from "react";

const Copyright = () => {
  return (
    <section className="pt-10 text-white font-light flex md:flex-row-reverse w-full flex-col md:items-start md:justify-between">
      <div className="flex md:text-base text-sm lg:mb-2">
        <p>Terms of Service</p>
        <p className="font-light text-Darkgray ml-5"> | </p>
        <p className="ml-5">Privacy Policy</p>
      </div>
      <p className="pb-6 md:pb-0 font-light text-sm t md:mt-0 mb-3 mt-4 md:text-base">
        ©Copyright 2023 Innovotio. All Rights Reserved.
      </p>
    </section>
  );
};

export default Copyright;