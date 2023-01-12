import React from 'react'
import {Col, Row} from "react-bootstrap";
import events from '../events'
import EventProps from "../props/EventProps";
import EventCardComponent from "../base_components/EventCardComponent";

const Events: React.FC = () => {
    return (
        <>
            <Row>
                {events.map((event: EventProps) => (
                    <Col sm={12} md={6} lg={4}>
                        <EventCardComponent
                            _id={event._id}
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