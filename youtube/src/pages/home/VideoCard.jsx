import React, { useEffect, useState } from "react";
import { videoTemplate } from "./data";
import { formatDistanceToNow } from "date-fns";
import { getVideos, deleteVideos } from "../../Api/VideoApi";
import profile from "../../../public/ShortPage/short-profile-4.jpg";
import CreateNewVideoModal from "../../components/Modal/CreateNewVideoModal";
import { useSidebarContext } from "../../contexts/SidebarContext";
import ContextMenu from "./ContextMenu/ContextMenu";
import UpdateVideo from "../../components/Modal/UpdateVideo";
const VideoCard = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [videos, setVideos] = useState([]);
  const [openContextMenu, setOpenContextMenu] = useState({});
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [updateVideo, setUpdateVideo] = useState([]);
  const { updateModal } = useSidebarContext();
  const [loading, setLoading] = useState(true);
  const fetchAndSetVideos = async () => {
    try {
      const response = await getVideos();
      const videosArray = response?.videos || [];
      setVideos(videosArray);
      setLoading(false); //
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAndSetVideos();
  }, []);

  const fetchVideosAndUpdateState = async () => {
    setLoading(true);
    await fetchAndSetVideos();
  };

  const openContextMenuHandler = id => {
    setOpenContextMenu(prevState => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };
  const handleDeleteVideos = async item => {
    try {
      console.log("Deleting video with id:", item._id);
      await deleteVideos(item._id);

      setVideos(prevVideos =>
        prevVideos.filter(video => video._id !== item._id)
      );
    } catch (error) {
      console.log("Error deleting video:", error);
    }
  };

  return (
    <>
      {loading ? (
        <div className="text-center mt-5">Loading...</div>
      ) : (
        <section className="grid lg:grid-cols-3 gap-5 mt-20 md:grid-cols-2 sm:grid-cols-2 2xl:grid-cols-4 xs:grid-cols-1  2xl:align-middle 2xl:mx-5  ">
          {videos?.map(item => {
            return (
              <section
                key={item?._id}
                className="overflow-ellipsis text-wrap"
                onMouseEnter={() => {
                  setIsHovered(item._id);
                }}
                onMouseLeave={() => {
                  setIsHovered(null);
                }}
              >
                <section className="relative">
                  <img
                    src={item?.thumbnail}
                    alt=""
                    className="rounded-xl  2xl:w-full w-full h-[200px]  "
                  />

                  <span className="absolute right-1  font-bold text-sm bottom-1   rounded-sm text-white w-auto px-1 h-5 bg-[#000000a9]">
                    {item.duration}
                  </span>
                </section>
                <section className="flex gap-3 mt-3 relative">
                  <img
                    src={item?.profile || profile}
                    alt=""
                    className="rounded-full h-8 w-9"
                  />
                  <section className="w-full mb-5">
                    <section className="flex justify-between items-center  ">
                      <h1 className="  text-sm font-bold overflow-hidden text-ellipsis   ">
                        {" "}
                        {item.title}
                      </h1>

                      {isHovered === item?._id && (
                        <div className="absolute top-0 right-0 p-2 cursor-pointer ">
                          <img
                            src="/settingUp.svg"
                            alt=""
                            onClick={() => {
                              openContextMenuHandler(item?._id);
                              setSelectedVideo(item);
                            }}
                          />
                          {openContextMenu[item?._id] && (
                            <section className="absolute right-0 z-10">
                              <ContextMenu
                                openContextMenu={openContextMenu[item?._id]}
                                handleDeleteVideos={() =>
                                  handleDeleteVideos(item)
                                }
                                updateModal={updateModal}
                                itemId={item._id}
                              />
                            </section>
                          )}
                        </div>
                      )}
                    </section>

                    <span className="text-sm flex items-center  gap-2 mt-1 text-[#606060] font-semibold">
                      {item.name}{" "}
                      <img src="/verify.svg" className="h-4" alt="" />
                    </span>
                    <span className="text-sm text-[#606060] flex gap-2 font-semibold">
                      <span> {item.views} &#x2022;</span>
                      {formatDistanceToNow(new Date(item.createdAt), {
                        addSuffix: true,
                      })}
                    </span>
                  </section>
                </section>
              </section>
            );
          })}
        </section>
      )}
      <CreateNewVideoModal
        fetchVideosAndUpdateState={fetchVideosAndUpdateState}
      />
      <UpdateVideo
        fetchVideosAndUpdateState={fetchVideosAndUpdateState}
        selectedVideo={selectedVideo}
      />
    </>
  );
};

export default VideoCard;
