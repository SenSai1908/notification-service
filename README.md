# Notification Service 🚀

A scalable backend system to send email, SMS, and in-app notifications with queue-based processing. Built for an internship assignment.

[![Node.js](https://img.shields.io/badge/Node.js-18-green)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-7-green)](https://www.mongodb.com/)
[![RabbitMQ](https://img.shields.io/badge/RabbitMQ-3.12-orange)](https://www.rabbitmq.com/)

## Features ✨
- **Multi-channel notifications**: Email, SMS, and in-app
- **Queue processing**: RabbitMQ for async delivery
- **Retry mechanism**: 3 attempts for failed notifications
- **REST API**: Fully documented endpoints
- **Real-time updates**: WebSocket support

## API Endpoints 📡
| Method | Endpoint                        | Description                          |
|--------|---------------------------------|--------------------------------------|
| POST   | `/notifications`                | Send a notification                  |
| GET    | `/users/:id/notifications`      | Get user's notification history      |

**Sample Request (POST):**
```json
{
  "userId": "user123",
  "message": "Your order has shipped!",
  "types": ["email", "sms"]
}
