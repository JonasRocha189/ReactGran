const mongoose = require("mongoose");
const { Schema } = mongoose;

const photoShema = new Schema(
  {
    image: String,
    title: String,
    likes: Array,
    comments: Array,
    userId: mongoose.isObjectIdOrHexString,
    userName: String,
  },
  {
    timestamps: true,
  }
);

const Photo = mongoose.model("Photo", photoShema);

module.exports = Photo;
