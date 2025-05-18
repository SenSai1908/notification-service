import { Schema, model } from 'mongoose';

const NotificationSchema = new Schema({
  userId: String,
  message: String,
  types: [String],
  status: { type: String, default: 'pending' }
});


// Add this export
export const AppNotification = model('Notification', NotificationSchema);