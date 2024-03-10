const Video = require("../model/VideoModel");
const cloudinary = require("../routes/Cloudinary");
const addVideos = async (req, res) => {
  try {
    const { title, name, thumbnail, category, views, profile, duration } =
      req.body;

    const results = await cloudinary.uploader.upload(thumbnail, {
      folder: "thumbnails",
    });

    const duplicate = await Video.findOne({ title });
    if (duplicate) {
      return res.status(400).json({ error: "Video already exists" });
    }

    const addedVideo = await Video.create({
      title,
      thumbnail: results.secure_url,
      category,
      views,
      profile,
      name,
      duration,
    });

    addedVideo.thumbnail.public_id = results.public_id;

    res
      .status(201)
      .json({ message: "Video added successfully", data: addedVideo });
  } catch (error) {
    console.log("Error adding video:", error);
    res
      .status(500)
      .json({ error: "Internal Server Error", details: error.message });
  }
};

const getVideos = async (req, res) => {
  try {
    const videos = await Video.find();

    res.json({ messgae: "List of videos", videos });
  } catch (error) {
    console.log("Error getting videos:", error);
    res
      .status(500)
      .json({ error: "Internal Server Error", details: error.message });
  }
};

const deleteVideos = async (req, res) => {
  try {
    const { _id } = req.params;

    const deletingVideos = await Video.findByIdAndDelete(_id);
    if (!deletingVideos) {
      return res.status(404).json({ error: "Video not found" });
    }

    const thumbnailsId = deletingVideos.thumbnail?.public_id;
    if (thumbnailsId) {
      try {
        await cloudinary.uploader.destroy(thumbnailsId);
      } catch (cloudinaryError) {
        console.error(
          "Error deleting video thumbnail from Cloudinary:",
          cloudinaryError
        );
      }
    }

    res.json({ message: "Video deleted successfully" });
  } catch (error) {
    console.error("Error deleting video:", error);
    res.status(500).json({ error: "Internal Server Error", details: error });
  }
};

const updateVideo = async (req, res) => {
  try {
    const { _id } = req.params;
    const { title, name, thumbnail, category, views, profile, duration } =
      req.body;

    // Check if the video with the given ID exists
    const existingVideo = await Video.findById(_id);
    if (!existingVideo) {
      return res.status(404).json({ error: "Video not found" });
    }

    // Update the video fields with the new data
    existingVideo.title = title;
    existingVideo.name = name;
    existingVideo.category = category;
    existingVideo.views = views;
    existingVideo.profile = profile;
    existingVideo.duration = duration;

    // If the thumbnail is updated, upload the new thumbnail to Cloudinary
    if (thumbnail !== existingVideo.thumbnail) {
      const results = await cloudinary.uploader.upload(thumbnail, {
        folder: "thumbnails",
      });
      existingVideo.thumbnail = results.secure_url;
      existingVideo.thumbnail.public_id = results.public_id;

      // Destroy the old thumbnail on Cloudinary
      if (existingVideo.thumbnail.public_id) {
        await cloudinary.uploader.destroy(existingVideo.thumbnail.public_id);
      }
    }

    // Save the updated video
    const updatedVideo = await existingVideo.save();

    res.json({ message: "Video updated successfully", data: updatedVideo });
  } catch (error) {
    console.error("Error updating video:", error);
    res.status(500).json({ error: "Internal Server Error", details: error });
  }
};
module.exports = { addVideos, getVideos, deleteVideos, updateVideo };
