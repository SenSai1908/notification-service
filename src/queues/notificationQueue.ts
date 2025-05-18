import amqp from 'amqplib';

export const processNotificationQueue = async () => {
  const connection = await amqp.connect('amqp://localhost');
  const channel = await connection.createChannel();
  
  await channel.assertQueue('notifications');
  channel.consume('notifications', async (msg) => {
    if (msg) {
      const notification = JSON.parse(msg.content.toString());
      await processNotification(notification); // Your processing logic
      channel.ack(msg);
    }
  });
};