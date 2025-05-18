import nodemailer from 'nodemailer';

export const sendEmail = async (email: string, message: string) => {
  const transporter = nodemailer.createTransport({
    service: 'Gmail', // or SMTP
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: '"Notification Service" <notifications@example.com>',
    to: email,
    subject: 'New Notification',
    text: message,
  });
};