import React, { useState } from "react";
import { listButton } from "./data";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import VideoCard from "./VideoCard";
import ShortVideo from "./ShortVideo";
import { useSidebarContext } from "../../contexts/SidebarContext";
const Home = () => {
  const { closeSideBar } = useSidebarContext();
  // const [startIndex, setStartIndex] = useState(0);
  // const itemsPerPage = 10;

  // const handleArrowClick = () => {
  //   if (startIndex + 1 < listButton.length) {
  //     setStartIndex(prevIndex => prevIndex + 1);
  //   }
  // };

  // const handleArrowLeft = () => {
  //   if (startIndex - itemsPerPage >= 0) {
  //     setStartIndex(prevIndex => prevIndex - itemsPerPage);
  //   }
  // };

  // const visibleList = listButton.slice(startIndex, startIndex + itemsPerPage);
  // const sliceList = listButton.slice(0, 9);
  return (
    <>
      <section
        className={`w-screen mt-0 px-10  ml-56 max-lg:ml-24   ${
          closeSideBar ? "" : "px-2  xl:ml-24  md:ml-24 xs:ml-0"
        }`}
      >
        <section className="flex justify-between  gap-3 text-[#0f0f2c] font-[600] text-sm">
          {/* {startIndex > 0 && (
            <MdKeyboardArrowLeft
              className="text-3xl"
              onClick={handleArrowLeft}
            />
          )} */}
          {/* <ButtonGroup
            variant="contained"
            aria-label="Basic button group"
            className="mt-10"
          >
            {sliceList.map((item, index) => (
              <Button key={index}>{item}</Button>
            ))}
          </ButtonGroup> */}
          {/* {startIndex + 1 < listButton.length ? (
            <MdKeyboardArrowRight
              className="text-3xl"
              onClick={handleArrowClick}
            />
          ) : (
            <MdKeyboardArrowRight className="text-3xl text-red-500" />
          )} */}
        </section>
        <VideoCard />
        <ShortVideo />
      </section>
    </>
  );
};

export default Home;
