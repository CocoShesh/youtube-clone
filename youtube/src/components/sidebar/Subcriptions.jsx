import React from "react";
import { subs } from "./data";
const Subcriptions = () => {
  return (
    <>
      <div className="w-full bg-[#e5e5e5] mt-3 h-[1px]"> </div>
      <span className="flex items-center text-lg px-6 py-3 ">
        Subscriptions
      </span>
      {subs.map(item => {
        return (
          <section
            key={item.id}
            className="flex pl-7 text-ellipsis overflow-hidden gap-5 pb-4"
          >
            <img
              src={item.icon}
              alt={item.name}
              className="w-7 h-7 rounded-full"
            />
            <span className="pl-1"> {item.name}</span>
          </section>
        );
      })}
    </>
  );
};

export default Subcriptions;
