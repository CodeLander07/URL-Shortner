import mongoose from 'mongoose';

const connectDB = async () => {
    console.log('Connecting to MongoDB...');
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('MongoDB connected');
    } catch (error) {
        console.error(`error : ${error.message}`);
        process.exit(1);
    }
};

export default connectDB;
