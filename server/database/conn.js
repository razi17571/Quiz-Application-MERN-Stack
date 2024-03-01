import mongoose from "mongoose";

export default async function connect(){
    try {
        await mongoose.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASS}@quiz.tfajnzy.mongodb.net/`);
        console.log("Database Connected");
    } catch (error) {
        console.log("Invalid Database Connection");
    }
}
