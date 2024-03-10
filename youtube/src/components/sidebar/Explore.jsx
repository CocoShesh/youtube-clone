import React from "react";
import { exp, more, list5 } from "./data";
import Footer from "./Footer";
const Explore = () => {
  return (
    <>
      <div className="w-full bg-[#e5e5e5] mt-3 h-[1px]"> </div>
      <span className="flex items-center text-lg px-6 py-3 ">Explore</span>
      {exp.map(item => {
        return (
          <section key={item.id} className="flex px-7 gap-5 pb-4">
            <img src={item.icon} alt="" />
            <span className="pl-1"> {item.name}</span>
          </section>
        );
      })}
      <div className="w-full bg-[#e5e5e5] mt-3 h-[1px]"> </div>
      <span className="flex items-center text-lg px-5 py-3 ">
        More from YouTube
      </span>
      {more.map(item => {
        return (
          <section key={item.id} className="flex px-7 gap-5 pb-4">
            <img src={item.icon} alt="" className="w-7" />
            <span className="pl-1"> {item.name}</span>
          </section>
        );
      })}
      <div className="w-full bg-[#e5e5e5] mt-3 h-[1px] mb-5"> </div>
      {list5.map(item => {
        return (
          <section key={item.id} className="flex px-7 gap-3 pb-4">
            <img src={item.icon} alt="" />
            <span className="pl-3"> {item.name}</span>
          </section>
        );
      })}
      <Footer />
    </>
  );
};

export default Explore;
