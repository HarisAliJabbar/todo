import mongoose from "mongoose";

const connectMongoDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log("DataBase is Connected Successfully")

  } catch (error) {
    console.log(error)
  }
}
export default connectMongoDb