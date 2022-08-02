import mongoose from "mongoose";

export const connectDB = async () => {
    const mongoURI = process.env.MONGO_DB_URI ?? "";

    return mongoose
        .connect(mongoURI)
        .then(() => console.log("Connected to MongoDB"))
        .catch((e) => console.log(`MongoDB error: ${e}`));
};
