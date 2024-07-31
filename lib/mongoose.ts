import mongoose from "mongoose";

let isConnected = false;

export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGO_URL) {
    return console.log("MONGO_URL is not defined");
  }

  if (isConnected) {
    return console.log("Database is already connected");
  }

  try {
    await mongoose.connect(process.env.MONGO_URL);
    isConnected = true;
    console.log("Database connected");
  } catch (error) {
    console.log(error);
  }
};
