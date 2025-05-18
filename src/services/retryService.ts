export const retryFailedNotifications = async () => {
  const failedNotifications = await Notification.find({
    status: 'failed',
    retries: { $lt: 3 }, // Max 3 retries
  });

  for (const notification of failedNotifications) {
    await publishToQueue('notifications', notification);
    await Notification.updateOne(
      { _id: notification._id },
      { $inc: { retries: 1 } }
    );
  }
};