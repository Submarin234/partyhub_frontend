import React from 'react'
import {Card} from "react-bootstrap";
import EventProps from "../props/EventProps";
import {FaMapMarkerAlt, FaCalendarAlt} from "react-icons/fa";
import locations from "../locations";
import LocationProps from "../props/LocationProps";
import img0 from "../images/img0.png";

function getLocation(name: String) {
    return locations.find((element) => {
        return element.name === name;
    })
}

const EventCardComponent: React.FC<EventProps> = (event) => {
    const location: LocationProps = getLocation(event.location)!
    // const imagePath = "../images/img0.png";
    const imagePath = event.image;
    const path2 = require(imagePath);
    console.log(event.image);
    return (
        <Card className='my-3 py-3 rounded'>
            {/*import img0 from "./images/img0.png"*/}
            {/*console.log("EventCardComponent: ");*/}
            <Card.Img src={path2} alt={event.image} height={"150px"}/>
            {/*<Card.Img src={"../images/img0.png"} alt={event.image} height={"150px"}/>*/}
            {/*<Card.Img src={require("../images/img0.png")} alt={event.image} height={"150px"}/>*/}
            {/*<Card.Img src={img0} alt={event.image} height={"150px"}/>*/}

            <Card.Body>
                <Card.Title>
                    <strong>{event.name}</strong>
                </Card.Title>
            </Card.Body>

            <Card.Text>
                <div className='my-3'>
                    <p><FaMapMarkerAlt/> {location ? location.name : event.location} </p>
                </div>
            </Card.Text>

            <Card.Text>
                <div className='my-3'>
                    <p><FaCalendarAlt/> {event.date}</p>
                </div>
            </Card.Text>

            <Card.Link href={"/event/" + event.id}><i>See more</i></Card.Link>
        </Card>
    )
}

export default EventCardComponent;