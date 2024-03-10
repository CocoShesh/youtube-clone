import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { updatedVideo } from "../../Api/VideoApi";
import { useSidebarContext } from "../../contexts/SidebarContext";
import toast, { Toaster } from "react-hot-toast";
const UpdateVideo = ({ selectedVideo, fetchVideosAndUpdateState }) => {
  const { updateModal, updateVideo } = useSidebarContext();
  const [isVideos, setVideo] = useState([]);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = async data => {
    try {
      const thumbnailFile = data.thumbnail[0];
      const reader = new FileReader();

      reader.onloadend = async () => {
        const base64Thumbnail = reader.result;

        try {
          const response = await updatedVideo(selectedVideo._id, {
            ...data,
            thumbnail: base64Thumbnail,
          });

          setVideo(response);
          fetchVideosAndUpdateState();
          reset();
          updateModal(false);
          toast.success("Video updated successfully");
        } catch (error) {
          console.error("Error updating video:", error);
        }
      };

      reader.readAsDataURL(thumbnailFile);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (selectedVideo) {
      // Check if selectedVideo has the expected properties
      if (
        selectedVideo.title &&
        selectedVideo.name &&
        selectedVideo.thumbnail &&
        selectedVideo.category &&
        selectedVideo.views &&
        selectedVideo.duration
      ) {
        // Set input values based on the selected video data for updating
        setValue("title", selectedVideo.title);
        setValue("name", selectedVideo.name);
        setValue("thumbnail", selectedVideo.thumbnail);
        setValue("category", selectedVideo.category);
        setValue("views", selectedVideo.views);
        setValue("duration", selectedVideo.duration);
      }
    }
  }, [selectedVideo, setValue]);
  return (
    <>
      {updateVideo && (
        <section className="fixed top-0 z-50 left-0 w-full h-full flex justify-center items-center bg-[#0000005d]">
          <section className="w-[60rem]  h-[35rem] border bg-white rounded-lg overflow-y-scroll ">
            <section className="px-10 py-4 flex justify-between ">
              <h1 className="font-semibold"> Create New Video</h1>
              <AiOutlineCloseCircle
                className="text-2xl hover:text-orange-500 cursor-pointer"
                onClick={updateModal}
              />
            </section>
            <hr />
            <form
              className="px-10 pt-5  mb-5 font-serif "
              onSubmit={handleSubmit(onSubmit)}
            >
              <label htmlFor="title"> Title</label> <br />
              <input
                type="text"
                placeholder="Ex. Love of my life"
                className=" w-full h-10 border-2 border-[#eaecee] rounded-md pl-5 my-2"
                {...register("title", {
                  required: "Please input this field",
                })}
              />{" "}
              {errors.title && (
                <span className="text-red-500 text-sm pl-5">
                  {errors?.title?.message}
                </span>
              )}
              <br />
              <label htmlFor="name"> Name</label> <br />
              <input
                type="text"
                placeholder="Ex. John Doe"
                className=" w-full h-10 border-2 border-[#eaecee] rounded-md pl-5 my-2"
                {...register("name", {
                  required: "Please input this field",
                })}
              />
              {errors.name && (
                <span className="text-red-500 text-sm pl-5">
                  {errors?.name?.message}
                </span>
              )}
              <br />
              <label htmlFor="Thumbnail"> Thumbnail</label> <br />
              <input
                type="file"
                className=" w-full h-10 border-2 border-[#eaecee] rounded-md pl-1 pt-1 my-2"
                accept="/*"
                {...register("thumbnail", {
                  required: "Please input this field",
                })}
              />
              {errors.thumbnail && (
                <span className="text-red-500 text-sm pl-5">
                  {errors?.thumbnail?.message}
                </span>
              )}
              <br />
              <label htmlFor="Category"> Category</label> <br />
              <input
                type="text"
                placeholder="Ex. Music"
                className=" w-full h-10 border-2 border-[#eaecee] rounded-md pl-5 my-2"
                {...register("category", {
                  required: "Please input this field",
                })}
              />
              {errors.category && (
                <span className="text-red-500 text-sm pl-5">
                  {errors?.category?.message}
                </span>
              )}
              <br />
              <section className="flex items-center gap-5 my-2">
                <div className="w-full">
                  <label htmlFor="views"> Views</label>
                  <input
                    type="text"
                    placeholder="Ex. 187k"
                    className=" w-full h-10 border-2 border-[#eaecee] rounded-md pl-5 my-2"
                    {...register("views", {
                      required: "Please input this field",
                    })}
                  />
                  {errors.views && (
                    <span className="text-red-500 text-sm pl-5">
                      {errors?.views?.message}
                    </span>
                  )}
                </div>
                <div className="w-full">
                  <label htmlFor="Duration"> Duration</label>
                  <input
                    type="text"
                    placeholder="Ex. 10:18"
                    className=" w-full h-10 border-2 border-[#eaecee] rounded-md pl-5 my-2"
                    {...register("duration", {
                      required: "Please input this field",
                    })}
                  />
                  {errors.duration && (
                    <span className="text-red-500 text-sm pl-5">
                      {errors?.duration?.message}
                    </span>
                  )}
                </div>
              </section>
              <div className="flex">
                <button
                  type="submit"
                  className="ml-auto h-10 w-20 bg-orange-500 text-white rounded-md"
                >
                  Submit
                </button>
              </div>
            </form>
          </section>
        </section>
      )}
      <Toaster position="top-center" />
    </>
  );
};

export default UpdateVideo;
