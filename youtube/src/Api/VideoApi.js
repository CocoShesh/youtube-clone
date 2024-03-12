import axios from "axios";

const api = axios.create({
  baseURL: "https://youtube-clone-uyoh.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getVideos = async () => {
  try {
    const res = await api.get("getVideos");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export const addVideos = async data => {
  try {
    const res = await api.post("addVideos", data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteVideos = async id => {
  try {
    const res = await api.delete(`deleteVideos/${id}`);
    return res.data;
  } catch (error) {
    console.error("Error deleting video:", error);
    throw error;
  }
};

export const updatedVideo = async (id, data) => {
  try {
    const res = await api.put(`updateVideo/${id}`, data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
