import mongoose from "mongoose";

const connectDB = (handler) => async (req, res) => {
  if (mongoose.connections[0].readyState) {
    return handler(req, res);
  }

  await mongoose.connect(
    "mongodb+srv://MariiaMERCIER:OH1VDRS84wrBKigy@cluster0.skkxw59.mongodb.net/toDOlist"
  );
  mongoose.set("strictQuery", false);

  return handler(req, res);
};
export default connectDB;
