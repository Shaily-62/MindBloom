const mongoose = require("mongoose");

const connectDB = async () => {
    const mono = 'mongodb://localhost:27017/mindbloom'
    try {
        const conn = await mongoose.connect(mono);

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error("MongoDB connection failed:", error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
