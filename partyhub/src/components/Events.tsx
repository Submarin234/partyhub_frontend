import React, {useState} from 'react'
import {Col, Row} from "react-bootstrap";
import EventProps from "../props/EventProps";
import EventCardComponent from "../base_components/EventCardComponent";
import {
    getEvents,
    getEventsByLocation,
    getEventsSortByDate,
    getEventsSortByName,
    getLocations
} from "../services/apiService";
import {useEffect} from "react";
import LocationProps from "../props/LocationProps";
import { Dropdown, DropdownButton } from 'react-bootstrap';

const Events: React.FC = () => {

    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    const [locations, setLocations] = useState<LocationProps[]>([]);
    const [selectedLocation, setSelectedLocation] = useState('All');

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedLocation(event.target.value);
    };

    const handleSortByName = () => {
        getEventsSortByName().then(data => {
            setEvents(data);
        })
    };

    const handleSortByDate = () => {
        getEventsSortByDate().then(data => {
            setEvents(data);
        })
    };

    const handleSortReset = () => {
        getEvents().then(data => {
            setEvents(data);
        })
    };

    useEffect(() => {
        setLoading(true);
        getEvents().then(data => {
            setEvents(data);
            setLoading(false);
        })
    }, [])

    useEffect(() => {
        if (selectedLocation === 'All') {
            getEvents().then(data => {
                setEvents(data);
            })
        } else {
            getEventsByLocation(selectedLocation).then(data => {
                setEvents(data);
            })
        }

    }, [selectedLocation])

    useEffect(() => {
        getLocations().then(data => {
            const allLocations: Array<LocationProps> = [{
                id: 100000000,
                name: 'All',
                address: '',
                description: '',
                lat: 0,
                lon: 0
            }];

            data = allLocations.concat(data);
            setLocations(data);
        })
    }, [])

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Row>
                <Col>
                    {
                        locations &&

                        <select value={selectedLocation} onChange={handleChange}>
                            {locations.map((location: LocationProps) => (
                                <option key={location.name} value={location.name}>
                                    {
                                        location.name
                                    }
                                </option>
                            ))}
                        </select>
                    }
                </Col>
                <Col>
                    <br/>
                    <button className="btn btn-dark" onClick={handleSortByName}>Sort by name</button>
                </Col>
                <Col>
                    <br/>
                    <button className="btn btn-dark" onClick={handleSortByDate}>Sort by date</button>
                </Col>
                <Col>
                    <br/>
                    <button className="btn btn-dark"  onClick={handleSortReset} >Reset sort</button>
                </Col>
            </Row>
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
