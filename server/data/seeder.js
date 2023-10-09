const mongoose = require("mongoose");
const { dummyDoctors, dummyUsers } = require("./data");
const Doctor = require("../model/doctor.model");
const dotenv = require("dotenv")
const User = require("../model/user.model.js"); // Fix the typo in "require"
dotenv.config()

const connect = async () => {
  await mongoose.connect(process.env.MONGO_URI);
};

connect()
  .then(() => {
    return Doctor.insertMany(dummyDoctors);
  })
  .then(() => {
    return User.insertMany(dummyUsers);
  })
  .then(() => {
    console.log("Data seeding completed.");
    mongoose.connection.close();
  })
  .catch((error) => {
    console.error("Data seeding error:", error);
  });
