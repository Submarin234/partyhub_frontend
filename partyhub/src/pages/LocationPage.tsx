import {RouteComponentProps} from "react-router";
import React, {useEffect, useState} from "react";
import EventProps from "../props/EventProps";
import {getEventById, getLocationByName} from "../services/apiService";
import Header from "../components/Header";
import {Col, Container, Row} from "react-bootstrap";
import EventDetailsComponent from "../base_components/EventDetailsComponent";
import Footer from "../components/Footer";
import LocationProps from "../props/LocationProps";
import LocationDetailsComponent from "../base_components/LocationDetailsComponent";

interface LocationRouterProps extends RouteComponentProps<{
    name?: string;
}> {
}

const LocationPage: React.FC<LocationRouterProps> = ({match}) => {
    const routeName = match.params.name || '';

    const [location, setLocation] = useState<LocationProps | undefined>(undefined);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        getLocationByName(routeName).then(data => {
            console.log(
                "location ---" + data + "\n" +
                data.name
            );

            setLocation(data);
            setLoading(false);
        })
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (location === undefined) {
        return <div>Loading...</div>;
    }

    return (
        <div className='text-center'>
            <Header/>
            <main>
                <Container>
                    <Row>
                        {location &&
                            <Col>
                                <LocationDetailsComponent
                                    id={location.id}
                                    name={location.name}
                                    address={location.address}
                                    description={location.description}
                                    lat={location.lat}
                                    lon={location.lon}/>
                            </Col>
                        }
                    </Row>
                </Container>
            </main>
            <Footer/>
        </div>
    );
}

export default LocationPage;