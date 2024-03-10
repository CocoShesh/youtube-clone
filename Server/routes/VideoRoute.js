const express = require("express");
const cors = require("cors");
const router = express.Router();

const {
  addVideos,
  getVideos,
  deleteVideos,
  updateVideo,
} = require("../controllers/VideoController");

router.use(
  cors({
    credentials: true,
  })
);

router.post("/addVideos", addVideos);
router.get("/getVideos", getVideos);
router.delete("/deleteVideos/:_id", deleteVideos);
router.put("/updateVideo/:_id", updateVideo);

module.exports = router;
