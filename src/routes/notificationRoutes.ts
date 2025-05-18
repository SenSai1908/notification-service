import { Router } from 'express';
import { sendNotification, getUserNotifications } from '../controllers/notificationController';

const router = Router();

router.post('/', sendNotification);
router.get('/users/:id/notifications', getUserNotifications);

export default router;