const mongoose = require('mongoose');
const connectToMongo = async () => {
    // console.log("Connecting to MongoDB");
    try {
        mongoose.connect("mongodb+srv://uddeshya1035:20je1035@cluster0.bpriutx.mongodb.net/e-commerce");
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log(error.message);
    }
}
module.exports = connectToMongo;

