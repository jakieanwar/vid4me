const mongoose = require("mongoose");

const sampleModel = new mongoose.model(
  "sampleModel",
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    msg: {
      type: String,
      required: true,
    },
  })
);

module.exports = sampleModel;
