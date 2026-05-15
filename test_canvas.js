const connectDB = require("./backend/config/mongo");
const mongoose = require("mongoose");
const User = require("./backend/models/userModel");
const Section = require("./backend/models/sectionModel");
const Canvas = require("./backend/models/canvasModel");
const { v4: uuid } = require("uuid");
require("dotenv").config({ path: "./backend/.env" });

async function test() {
  await connectDB();
  const user = await User.findOne({ email: "ramavathshiva6300@gmail.com" });
  if (!user) {
    console.log("User not found");
    process.exit(1);
  }

  const sectionId = uuid();
  const section = await Section.create({
    _id: sectionId,
    title: "Test Section",
    user: user._id
  });
  console.log("Created Section:", section._id);

  const canvasId = uuid();
  const canvas = await Canvas.create({
    _id: canvasId,
    title: "Test Canvas",
    user: user._id,
    section: section._id
  });
  console.log("Created Canvas:", canvas._id);

  const fetched = await Canvas.findById(canvasId);
  console.log("Fetched Canvas:", fetched ? fetched._id : "NOT FOUND");

  process.exit(0);
}

test();
