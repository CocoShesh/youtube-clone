import React, { useState } from "react";
import { subs } from "./data";
import ShortVideo from "../home/ShortVideo";
import { useSidebarContext } from "../../contexts/SidebarContext";
const Subscriptions = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { closeSideBar } = useSidebarContext();
  return (
    <>
      <section
        className={`w-screen mt-0 pt-24 px-10  ml-56 max-lg:ml-24   ${
          closeSideBar ? "" : "px-2  xl:ml-24  md:ml-24 xs:ml-0"
        }`}
      >
        <section className="flex justify-between">
          <h1 className="text-xl font-bold">Latest</h1>
          <section className="flex gap-5 items-center mr-3 ">
            <button className="w-auto px-3 rounded-full h-8 text-[#6a72d4] text-sm font-bold hover:bg-[#def1ff]">
              Manage
            </button>
            <img
              src="/grid.svg"
              alt=""
              className="h-6  object-cover w hover:bg-[#def1ff]"
            />
            <img
              src="/details.svg"
              alt=""
              className="h-7 hover:bg-[#def1ff] "
            />
          </section>
        </section>
        <section className="grid lg:grid-cols-3 gap-5 md:grid-cols-2 sm:grid-cols-2 2xl:grid-cols-4 xs:grid-cols-1 mt-5 ">
          {subs.map(item => {
            return (
              <section
                key={item.id}
                onMouseEnter={() => setIsHovered(item.id)}
                onMouseLeave={() => setIsHovered(null)}
              >
                <section className="relative">
                  <img
                    src={item.cover}
                    alt=""
                    className="rounded-xl   object-cover"
                  />

                  <span className="absolute right-1  font-bold text-sm bottom-1   rounded-sm text-white w-auto px-1 h-5 bg-[#000000a9]">
                    {item.duration}
                  </span>
                </section>
                <section className="flex gap-3 mt-3 relative">
                  <img src={item.profile} alt="" className="rounded-full h-9" />
                  <section className="w-full mb-5">
                    <section className="flex justify-between items-center ">
                      <h1 className="  text-sm font-bold w-[250px]">
                        {" "}
                        {item.title}
                      </h1>
                      {isHovered === item.id && (
                        <div className="absolute top-0 right-0 p-2 cursor-pointe">
                          <img src="/settingUp.svg" alt="" />
                        </div>
                      )}
                    </section>
                    <span className="text-sm flex items-center  gap-2 mt-1 text-[#606060] font-semibold">
                      {item.channel}{" "}
                      <img src="/verify.svg" className="h-4" alt="" />
                    </span>
                    <span className="text-sm text-[#606060] font-semibold">
                      {item.views} {item.timestamp}
                    </span>
                    <div className="flex items-center mt-2 gap-2 w-fit text-white px-1 bg-[#d11919] rounded-sm">
                      <img src={item.indicator} alt="" />
                      <span className="text-xs"> {item.status}</span>
                    </div>
                  </section>
                </section>
              </section>
            );
          })}
        </section>
        <ShortVideo />
      </section>
    </>
  );
};

export default Subscriptions;
