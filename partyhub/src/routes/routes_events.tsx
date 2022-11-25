import express from 'express';
import controller from '../services/rest_events_calls';

const router = express.Router();

router.get('/event/find',controller.getAllEvents);
router.get('/event/find/:eventName',controller.getEventByName);
router.get('/event/find/id/:id',controller.getEventById);
router.post('/event',controller.addEvent);
router.put('/event/:id',controller.updateEvent);
router.delete('/event/:id',controller.deleteEvent);

export default router;