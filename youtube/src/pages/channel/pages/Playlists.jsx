import React from "react";
import { playlist } from "./data";
const Playlists = () => {
  return (
    <>
      <section className="pl-[17.5rem] pt-5">
        <section className="flex justify-between ">
          <h1 className="text-lg"> Created Playlists</h1>

          <section className="flex w-36 gap-3 pr-10">
            <img src="/channel/sort.svg" alt="" /> <span>Sort by</span>{" "}
          </section>
        </section>
        <section className="flex gap-5 ">
          {playlist.map(item => {
            return (
              <section className="flex flex-col mt-3" key={item.index}>
                <img src={item.scr} alt="" className="h-[120px] rounded-lg" />
                <h1> {item.name}</h1>
                <section className="flex  items-center gap-1 w-fit px-1 rounded-lg mt-3 bg-[#f2f2f2]">
                  <img src={item.icon} alt="" className="h-4 " />{" "}
                  <span className="text-xs">{item.status}</span>
                </section>
                <span className="text-xs text-[#606060] font-semibold mt-2">
                  {" "}
                  {item.text}{" "}
                </span>
              </section>
            );
          })}
        </section>
      </section>
    </>
  );
};

export default Playlists;
