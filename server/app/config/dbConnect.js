const mongoose = require('mongoose');

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("Database connected");
    } catch (error) {
        console.log('Error connecting to database', error);
        process.exit(1);
    }
};

module.exports = connectDb;
