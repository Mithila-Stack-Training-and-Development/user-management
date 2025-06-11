import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      dbName: "user-management",
    });
    console.log(`MongoDB Connected`);
  } catch (error) {
    console.log(`Error in MongoDB ${error.message}`);
  }
};

export default dbConnect;
