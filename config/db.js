import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(proccess.env.DB_URI);
    console.log("Database is connected...");
  } catch (error) {
    console.log("Error: ${error.message}");
    process.exit(1);
  }
};

export default connectDB;
