import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/PrepSales', {
      serverSelectionTimeoutMS: 5000 // Timeout after 5s instead of 30s
    });
    
    mongoose.connection.on('error', err => {
      console.error('MongoDB connection error:', err);
    });
    
    console.log('MongoDB Connected');
  } catch (err) {
    console.error('MongoDB Initial Connection Error:', err);
    process.exit(1);
  }
};

export default connectDB;