import React, {useEffect, useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EventDetailsComponent from "../base_components/EventDetailsComponent";
import EventProps from "../props/EventProps";
import {RouteComponentProps} from 'react-router';
import {getEventById} from "../services/apiService";


interface EventRouterProps extends RouteComponentProps<{
    id?: string;
}> {
}

const EventPage: React.FC<EventRouterProps> = ({match}) => {
    const routeId = match.params.id || '';
    const id = parseInt(routeId);

    const [event, setEvent] = useState<EventProps | undefined>(undefined);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        getEventById(id).then(data => {
            console.log(
                "event ---" + data + "\n" +
                data.name
            );

            setEvent(data);
            setLoading(false);
        })
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (event === undefined) {
        return <div>Loading...</div>;
    }

    return (
        <div className='text-center'>
            <Header/>
            <main>
                <Container>
                    <Row>
                        {event &&
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
                        }
                    </Row>
                </Container>
            </main>
            <Footer/>
        </div>
    );
}

export default EventPage;
