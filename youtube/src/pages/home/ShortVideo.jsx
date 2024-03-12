import React, { useState } from "react";
import { shortVideo } from "./data";
import { TfiClose } from "react-icons/tfi";
const ShortVideo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [closeVideo, setCloseVideo] = useState(false);
  const sliceShortVideo = shortVideo.slice(0, 5);
  const sliceSecondVideo = shortVideo.slice(5, 10);
  return (
    <>
      <section className="mt-10 h-screen">
        {closeVideo ? (
          <section>
            <span className="text-[#8c6063] text-sm ">
              {" "}
              Shelf will be hidden for 30 days{" "}
            </span>{" "}
            <button
              className="w-16 h-10 text-[#1e61d4] font-bold text-sm ml-3 hover:bg-[#e5e5e5] rounded-full"
              onClick={() => setCloseVideo(!closeVideo)}
            >
              Undo
            </button>
          </section>
        ) : (
          <>
            {" "}
            <section className="w-full flex items-center justify-between pr-3  ">
              <section className="flex items-center gap-3 font-bold text-xl  2xl:mx-5">
                <img src="/shortVideo.svg" alt="" />
                <h1>Shorts</h1>
              </section>
              <button
                className="h-10 w-10 flex items-center justify-center rounded-full 2xl:mr-10 hover:bg-[#e5e5e5]"
                onClick={() => setCloseVideo(true)}
              >
                <TfiClose />
              </button>
            </section>
            <section className="grid xl:grid-cols-5  lg:grid-cols-5 gap-5 mt-8 mb-20  md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 2xl:mx-5 ">
              {sliceShortVideo.map((item, index) => {
                return (
                  <section key={index} className="w-full ">
                    <img
                      src={item}
                      alt=""
                      className=" h-[300px] 2xl:h-[400px]  w-full rounded-2xl  object-fill  "
                    />
                  </section>
                );
              })}
            </section>
            {/* <section className={`relative ${isOpen ? "hidden" : "block"}`}>
              <hr />

              <section className="flex items-center absolute  font-[700] left-1/3  tr -top-5 bg-white justify-center gap-2 w-[350px] h-10 border rounded-full hover:bg-[#e5e5e5]">
                <button className="font-medium" onClick={() => setIsOpen(true)}>
                  Show more
                </button>
                <img src="/arrow-down.svg" className="h-6" alt="" />
              </section>
            </section>
            {isOpen && (
              <>
                <section className="grid grid-cols-5 gap-5 mt-8 mb-20">
                  {sliceSecondVideo.map((item, index) => {
                    return (
                      <section key={index} className="">
                        <img
                          src={item}
                          alt=""
                          className=" rounded-2xl object-cover    "
                        />
                      </section>
                    );
                  })}
                </section>

                <section className="relative">
                  <hr />
                  <section className="flex items-center absolute  font-[700] left-1/3  tr -top-5 bg-white justify-center gap-2 w-[350px] h-10 border rounded-full hover:bg-[#e5e5e5]">
                    <button
                      className="font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      Show less
                    </button>
                    <img src="/arrow-down.svg" className="h-6" alt="" />
                  </section>
                </section>
              </>
            )}{" "} */}
          </>
        )}
      </section>
    </>
  );
};

export default ShortVideo;
