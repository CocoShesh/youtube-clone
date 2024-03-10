const mongoose = require("mongoose");

const VideoSchema = mongoose.Schema(
  {
    title: {
      type: String,
      // required: true,
    },
    thumbnail: {
      type: String,
      // required: true,
    },
    category: {
      type: String,
      // required: true,
    },
    views: {
      type: String,
      // required: true,
    },
    profile: {
      type: String,
      // required: true,
    },
    name: {
      type: String,
      // required: true,
    },
    duration: {
      type: String,
      // required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Video", VideoSchema);
