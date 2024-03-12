import React, { useRef, useState } from "react";
import { shortsData } from "./shortsData";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa6";
import { IoMdVolumeHigh } from "react-icons/io";
import { BiSolidVolumeMute } from "react-icons/bi";
const Shorts = () => {
  const [videoPlay, setVideoPlay] = useState(null);
  const [isScroll, setIsScroll] = useState(570);
  const [muted, setMuted] = useState(false);
  const handlePlayVideo = (videoRef, item) => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
      setVideoPlay(item.id);
    } else {
      video.pause();
      setVideoPlay(null);
    }
  };
  const handleMutedVideo = item => {
    setMuted(prevMuted => !prevMuted);
  };
  const handleDown = () => {
    const newScrollPosition = window.scrollY + 570;

    window.scrollTo({
      top: newScrollPosition,
      behavior: "smooth",
    });

    setIsScroll(newScrollPosition);
  };
  const handleScrollup = () => {
    const newScrolltTopPosition = window.scrollY - 600;

    window.scrollTo({
      top: newScrolltTopPosition,
      behavior: "smooth",
    });

    setIsScroll(newScrolltTopPosition);
  };

  return (
    <section className="w-screen relative mt-16  ml-48">
      {isScroll < 570 ? null : (
        <button
          onClick={handleScrollup}
          className="w-10 flex items-center justify-center h-10 rounded-full bg-[#f0f0f0] fixed right-10  top-20"
        >
          <img src="/ShortPage/arrowUp.svg" alt="" className="w-6 " />
        </button>
      )}
      <button
        onClick={handleDown}
        className="w-10 flex items-center justify-center h-10 rounded-full bg-[#f0f0f0] fixed right-10  bottom-5"
      >
        <img src="/ShortPage/arrowDown.svg" alt="" className="w-6 " />
      </button>
      {isScroll && (
        <div className="flex flex-col gap-1 justify-between  snap-mandatory  snap-center items-center">
          {shortsData?.map(item => {
            const videoRef = useRef(null);
            return (
              <section
                key={item.id}
                className="w-[340px]  relative  h-[570px]   flex"
              >
                {videoPlay === item.id ? (
                  <FaPause
                    className="absolute top-5 left-5 fill-white cursor-pointer"
                    onClick={() => handlePlayVideo(videoRef, item)}
                  />
                ) : (
                  <FaPlay
                    className="absolute top-5 left-5 fill-white cursor-pointer"
                    onClick={() => handlePlayVideo(videoRef, item)}
                  />
                )}
                {muted ? (
                  <BiSolidVolumeMute
                    className="absolute top-4 right-8 text-3xl fill-white cursor-pointer"
                    onClick={handleMutedVideo}
                  />
                ) : (
                  <IoMdVolumeHigh
                    className="absolute top-4 right-8 text-3xl fill-white cursor-pointer"
                    onClick={handleMutedVideo}
                  />
                )}
                <video
                  ref={videoRef}
                  className=" custom-video rounded-lg"
                  muted={muted && videoPlay === item.id}
                >
                  <source src={item.video} type="video/mp4" />
                </video>
                <section className="absolute w-full bottom-10 left-5  text-white  flex flex-col">
                  <section className="flex items-center gap-2">
                    <img
                      src={item.profile}
                      alt=""
                      className="rounded-full w-10 h-10"
                    />
                    <span className="text-sm font-bold">{item.name}</span>
                    <button className="w-24 rounded-full font-bold h-8 bg-white text-black text-xs">
                      Subscribe
                    </button>
                  </section>
                  <section className=" w-[300px]">
                    <span className="text-sm mt-3">{item.tag}</span>
                  </section>
                </section>
                <section className="flex flex-col items-center justify-center  w-full gap-2 mt-20 ml-5">
                  <button className="w-12 h-12 bg-[#f0f0f0] rounded-full flex items-center justify-center ">
                    <img src={item.likeIcon} alt="" className="h-6" />
                  </button>
                  <span>{item.like}</span>
                  <button className="w-12 h-12 bg-[#f0f0f0] rounded-full flex items-center justify-center ">
                    <img src={item.dislike} alt="" className="h-6" />
                  </button>
                  <span>Dislike</span>
                  <button className="w-12 h-12 bg-[#f0f0f0] rounded-full flex items-center justify-center ">
                    <img src={item.commentIcon} alt="" className="h-6" />
                  </button>
                  <span>{item.comment}</span>
                  <button className="w-12 h-12 bg-[#f0f0f0] rounded-full flex items-center justify-center ">
                    <img src={item.share} alt="" className="h-6" />
                  </button>
                  <span>Share</span>
                  <button className="w-12 h-12 bg-[#f0f0f0] rounded-full flex items-center justify-center ">
                    <img src={item.more} alt="" className="h-6" />
                  </button>
                  <img src={item.profile} alt="" className="rounded-md mt-2" />
                </section>
              </section>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default Shorts;
