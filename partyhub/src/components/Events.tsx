import React from 'react'
import {Col, Row} from "react-bootstrap";
import events from '../events'
import EventProps from "../props/EventProps";
import EventComponent from "../base_components/EventComponent";

const Events: React.FC = () => {
    return (
        <>
            <Row>
                {events.map((event: EventProps) => (
                    <Col sm={12} md={6} lg={4}>
                        <EventComponent
                            _id={event._id}
                            name={event.name}
                            description={event.description}
                            image={event.image}
                        />
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default Events;