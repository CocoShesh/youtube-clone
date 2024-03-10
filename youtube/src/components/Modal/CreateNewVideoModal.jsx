import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSidebarContext } from "../../contexts/SidebarContext";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { addVideos } from "../../Api/VideoApi";
import toast, { Toaster } from "react-hot-toast";
const CreateNewVideoModal = ({ fetchVideosAndUpdateState, selectedVideo }) => {
  const { AddVideoModal, handleModal } = useSidebarContext();
  // const [isVideos, setVideo] = useState([]);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  // const onSubmit = async data => {
  //   try {
  //     const thumbnailFile = data.thumbnail[0];

  //     // Convert the file to a base64-encoded string
  //     const reader = new FileReader();
  //     reader.onloadend = async () => {
  //       const base64Thumbnail = reader.result;

  //       // Send the file as a base64-encoded string in the request
  //       let response;

  //       if (selectedVideo) {
  //         // Updating existing video
  //         response = await updateVideo(selectedVideo._id, {
  //           ...data,
  //           thumbnail: base64Thumbnail,
  //         });
  //       } else {
  //         // Adding a new video
  //         response = await addVideos({
  //           ...data,
  //           thumbnail: base64Thumbnail,
  //         });
  //       }

  //       if (response) {
  //         // Assuming response is the updated video data
  //         setVideo(response);
  //         fetchVideosAndUpdateState();
  //         reset();
  //         // handleModal();
  //         AddVideoModal(false); // Reset the form only if the update is successful
  //       } else {
  //         console.error("Failed to update video");
  //       }
  //     };

  //     reader.readAsDataURL(thumbnailFile);
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   reset();
  //   handleModal();
  // };

  // useEffect(() => {
  //   if (selectedVideo) {
  //     // Check if selectedVideo has the expected properties
  //     if (
  //       selectedVideo.title &&
  //       selectedVideo.name &&
  //       selectedVideo.thumbnail &&
  //       selectedVideo.category &&
  //       selectedVideo.views &&
  //       selectedVideo.duration
  //     ) {
  //       // Set input values based on the selected video data for updating
  //       setValue("title", selectedVideo.title);
  //       setValue("name", selectedVideo.name);
  //       setValue("thumbnail", selectedVideo.thumbnail);
  //       setValue("category", selectedVideo.category);
  //       setValue("views", selectedVideo.views);
  //       setValue("duration", selectedVideo.duration);
  //     }
  //   }
  // }, [selectedVideo, setValue]);

  const onSubmit = async data => {
    try {
      const thumbnailFile = data.thumbnail[0];
      const reader = new FileReader(); // Move this line up
      reader.onloadend = async () => {
        const base64Thumbnail = reader.result; // Now reader is defined
        await addVideos({
          ...data,
          thumbnail: base64Thumbnail,
        });
        reset();
        handleModal(false);
        fetchVideosAndUpdateState();
        toast.success("Video added successfully", {
          icon: "👏",
        });
      };
      reader.readAsDataURL(thumbnailFile);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {AddVideoModal && (
        <section className="fixed top-0 z-50 left-0 w-full h-full flex justify-center items-center bg-[#0000005d]">
          <section className="w-[60rem]  h-[35rem] border bg-white rounded-lg overflow-y-scroll ">
            <section className="px-10 py-4 flex justify-between ">
              <h1 className="font-semibold"> Create New Video</h1>
              <AiOutlineCloseCircle
                className="text-2xl hover:text-orange-500 cursor-pointer"
                onClick={handleModal}
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
                accept="*/*"
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
    </>
  );
};

export default CreateNewVideoModal;
