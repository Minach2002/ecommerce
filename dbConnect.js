const mongoose = require("mongoose");

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL); // No need for deprecated options
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Database connection error:", error.message);
    }
};

module.exports = dbConnect;

