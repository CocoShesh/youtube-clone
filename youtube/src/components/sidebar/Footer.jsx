import React from "react";
import { footerlist, about } from "./data";
const Footer = () => {
  return (
    <>
      <div className="w-full bg-[#e5e5e5] mt-3 h-[2px] mb-5"> </div>
      <section className="flex flex-wrap pr-12 pl-5 mb-5">
        {footerlist.map((item, index) => {
          return (
            <span className="pl-2 text-xs font-bold text-[#606060]" key={index}>
              {item}
            </span>
          );
        })}
      </section>

      <section className="flex flex-wrap pr-5 pl-5  w-full mb-5">
        {about.map((item, index) => {
          return (
            <span
              className=" pl-2 text-xs font-bold text-[#606060]"
              key={index}
            >
              {item}
            </span>
          );
        })}
      </section>

      <span className="pl-7 text-[#939393]  text-xs">
        &copy; 2024 Google LLC
      </span>
    </>
  );
};

export default Footer;
