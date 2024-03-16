import mongoose from "mongoose";

let connected = false;

const connectDB = async () => {
  const mongodb = process.env.MONGODB_URI;
  mongoose.set("strictQuery", true);

  //` If the database is already connected, don't connect again
  if (connected) {
    console.log("MongoDB is already connected...");
    return;
  }

  //` Connect to MongoDB
  try {
    if (!mongodb) {
      throw new Error("No MONGO DB URI provided");
    }
    await mongoose.connect(mongodb);

    connected = true;

    console.log("MongoDB connected...");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
