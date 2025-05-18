import express from 'express';  // ES Modules style
import connectDB from './config/db';
import notificationRoutes from './routes/notificationRoutes';

const app = express();
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/notifications', notificationRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});