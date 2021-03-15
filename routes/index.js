const express = require("express");
const router = express.Router();
const sampleModel = require("../models/sampleModel");

router.get("/", async (req, res) => {
  try {
    const data = await sampleModel.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(404).send("Not Found");
  }
  res.send({
    msg: "Hello!",
  });
});

router.post("/", async (req, res) => {
  const sampleData = new sampleModel({
    name: req.body.name,
    msg: req.body.msg,
  });

  try {
    const saveResponse = await sampleData.save();
    res.json(saveResponse);
  } catch (err) {
    res.send("Some error occured" + err);
  }
});

module.exports = router;
