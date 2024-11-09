import mongoose from "mongoose";

let isConnected = false;

export const mongoDBConnect = async () => {
  if (isConnected) return;

  const uri = process.env.mongourl;
  if (!uri) throw new Error("MongoDB connection URI is not defined.");

  try {
    await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 30000, // Adjust as needed
      socketTimeoutMS: 45000, // Adjust as needed
    });
    isConnected = true;
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
};
