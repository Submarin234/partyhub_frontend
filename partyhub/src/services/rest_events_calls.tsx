import { Request,Response,NextFunction } from "express";
import axios,{AxiosResponse} from "axios";
import { BASE_URL } from "./environment";

interface Event {
  eventId: number;
  eventName: string;
}

const getAllEvents = async (res: Response) => {
  let result: AxiosResponse = await axios.get(`${BASE_URL}/event/find`);
  let events: [Event] = result.data;
  return res.status(200).json({
    message: events,
  });
};

const getEventById = async (req: Request, res: Response) => {
  let eventId: number = Number(req.params.eventId);
  let result: AxiosResponse = await axios.get(
    `${BASE_URL}/event/find/id/${eventId}`
  );
  let event: Event = result.data;
  return res.status(200).json({
    message: event,
  });
};

const getEventByName = async (req: Request, res: Response) => {
  let eventName: string = req.params.eventName;
  let result: AxiosResponse = await axios.get(
    `${BASE_URL}/event/find/${eventName}`
  );
  let event: Event = result.data;
  return res.status(200).json({
    message: event,
  });
};

const addEvent = async (req: Request, res: Response) => {
  let eventName: string = req.body.eventName;
  let response: AxiosResponse = await axios.post(`${BASE_URL}/event`, {
    eventName,
  });
  return res.status(200).json({
    message: response.data,
  });
};

const updateEvent = async (req: Request, res: Response) => {
  let eventId: number = Number(req.params.eventId);
  let eventName: string = req.body.eventName ?? null;
  let response: AxiosResponse = await axios.put(
    `${BASE_URL}/event/${eventId}`,
    {
      ...(eventName && { eventName }),
    }
  );
  return res.status(200).json({
    message: response.data,
  });
};

const deleteEvent = async (req: Request, res: Response) => {
  let eventId: number = Number(req.params.eventId);
  let response: AxiosResponse = await axios.delete(
    `${BASE_URL}/event/${eventId}`
  );
  return res.status(200).json({
    message: response.data,
  });
};

export default {
  getAllEvents,
  getEventById,
  getEventByName,
  addEvent,
  updateEvent,
  deleteEvent,
};
