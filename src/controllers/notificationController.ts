import { Request, Response } from 'express';
import Notification from '../models/notificationModel';

export const sendNotification = async (req: Request, res: Response) => {
  const { userId, message, types } = req.body;

  const notification = new Notification({
    userId,
    message,
    types,
    status: 'pending'
  });

  await notification.save();
  res.status(201).json({ success: true, notification });
};

export const getUserNotifications = async (req: Request, res: Response) => {
  const { id } = req.params;
  const notifications = await Notification.find({ userId: id }).sort({ createdAt: -1 });
  res.json(notifications);
};