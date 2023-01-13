import React, {useState} from 'react'
import {Col, Row} from "react-bootstrap";
import EventProps from "../props/EventProps";
import EventCardComponent from "../base_components/EventCardComponent";
import {getEvents} from "../services/eventService";
import {useEffect} from "react";

const Events: React.FC = () => {

    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        getEvents().then(data => {
            setEvents(data);
            setLoading(false);
        })
    }, [])

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Row>
                {events.map((event: EventProps) => (
                    <Col sm={12} md={6} lg={4}>
                        <EventCardComponent
                            id={event.id}
                            name={event.name}
                            description={event.description}
                            image={event.image}
                            date={event.date}
                            shortDescription={event.shortDescription}
                            ticketPrice={event.ticketPrice}
                            location={event.location}
                        />
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default Events;
