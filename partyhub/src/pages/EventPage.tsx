import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EventDetailsComponent from "../base_components/EventDetailsComponent";
import events from '../events'
import EventProps from "../props/EventProps";
import { RouteComponentProps } from 'react-router';
import Events from "../components/Events";

// TODO: remove this when we use the fake api
function getEvent(id: number) {
    return events.find((element) => {
        return element.id === id;
    })
}

interface EventRouterProps extends RouteComponentProps<{
    id?: string;
}> {}

const EventPage: React.FC<EventRouterProps> = ({match }) => {
    const routeId = match.params.id || '';
    const id = parseInt(routeId);
    const event: EventProps = getEvent(id)!
    return (
        <div className='text-center'>
            <Header/>
            <main>
                <Container>
                    <Row>
                        <Col>
                            <EventDetailsComponent
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
                    </Row>
                </Container>
            </main>
            <Footer/>
        </div>
    );
}

export default EventPage;