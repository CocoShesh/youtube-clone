import React from "react";

export const Home = () => {
  return (
    <>
      <section className="flex  items-center justify-center">
        <section className="flex flex-col items-center pl-44 gap-3 h-screen mx-auto mt-20">
          <img src="/channel/icon.svg" alt="" className="h-[150px]" />
          <h1 className="font-bold text-[#12120f]">
            {" "}
            Create content on any device
          </h1>
          <section className="w-[300px] text-sm text-center">
            <p>
              Upload and record at home or on the go. Everything you make public
              will appear here.
            </p>
          </section>
          <button className="w-auto px-3 rounded-2xl h-10 bg-black hover:bg-[#272727] text-white">
            {" "}
            Create{" "}
          </button>
        </section>
      </section>
    </>
  );
};
