import Header from "../components/Header";
import {Container} from "react-bootstrap";
import Events from "../components/Events";
import Footer from "../components/Footer";
import React from "react";
import {Carousel} from "react-bootstrap";

function HomePage() {
    return (
        <div className='text-center'>
            <Header/>

            <div className="homePage row-cols-2">

                <div className="col">

                <Carousel className="carouselHome">
                    <Carousel.Item>
                        <img
                            className="slideImage d-block w-100"
                            src="http://localhost:3000/images/team.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Welcome,dear friend!</h3>
                            <p>Do you want to come to a party but you do not know where to find one?</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="slideImage d-block w-100"
                            src="http://localhost:3000/images/home1.jpg"
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>You made the right choice coming here!</h3>
                            <p>We have plenty of parties to choose from. We have parties in different locations.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="slideImage d-block w-100"
                            src="http://localhost:3000/images/home2.jpg"
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>Are the parties here legit?</h3>
                            <p>Of course, they are! We know representatives from many clubs and update our party list every day.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="slideImage d-block w-100"
                            src="http://localhost:3000/images/home3.jpeg"
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>Stop waiting!</h3>
                            <p>Start searching for a party to go with your friends and have a great night!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                </div>

                <div className="col">

                </div>
            </div>
            <br/>
            <br/>
            <Footer/>
        </div>

    );
}

export default HomePage;