import mongoose from "mongoose";
export const connectingBD = (url) =>mongoose.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})