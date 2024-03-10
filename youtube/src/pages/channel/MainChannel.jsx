import React, { useEffect } from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
export const MainChannel = () => {
  const [active, setActive] = React.useState("");
  const location = useLocation();
  useEffect(() => {
    const currentPath = location.pathname;

    if (currentPath === "/channel") {
      setActive("channel");
    } else if (currentPath === "/channel/playlists") {
      setActive("playlist");
    } else {
      setActive(""); // Set default state if the path doesn't match either
    }
  }, [location.pathname]); // Add location.pathname as a dependency

  return (
    <>
      <section className="w-[1200px]  mt-20 px-10  ml-56">
        <section className="flex gap-5 mt-10">
          <img
            src="/channel/profile-1.jpg"
            alt="profile-pic"
            className="rounded-full"
          />
          <section className="flex flex-col gap-3">
            <h1 className="text-4xl font-bold"> Coco</h1>
            <span className="text-[#606060] text-sm"> @Coco-sq1eg</span>

            <section className="flex items-center">
              <button className="text-[#606060] text-sm">
                More about this channel
              </button>
              <img src="/channel/arrow-right.svg" alt="" />
            </section>
            <section className="flex gap-5 w-full items-center">
              <button className="  w-48 text-sm font-bold rounded-full h-8 bg-[#f0f0f0]">
                Customize channel
              </button>
              <button className="w-36 rounded-full text-sm font-bold h-10 bg-[#f0f0f0]">
                Manage videos
              </button>
            </section>
          </section>
        </section>
        <section className="flex gap-5 mt-10 items-center  text-lg pl-4">
          <Link to="/channel">
            <section
              className={`h-10 ${
                active === "channel" ? "border-b-2 border-black" : ""
              }`}
            >
              <h1> Home</h1>{" "}
            </section>
          </Link>
          <Link to="/channel/playlists">
            <section
              className={`h-10 ${
                active === "playlist" ? "border-b-2 border-black" : ""
              }`}
            >
              <h1> Playlists</h1>
            </section>
          </Link>
          <img src="/channel/search.svg" alt="" className=" pb-3" />
        </section>
        <hr className="bg-[#e5e5e5]" />
      </section>
      <Outlet />
    </>
  );
};
