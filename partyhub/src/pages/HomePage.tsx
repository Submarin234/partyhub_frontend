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

            <div className="homePage row">

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
                            <p>Go and find a party now!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                </div>
                <div className="col">

                    <Carousel className="carouselHome">
                        <Carousel.Item>
                            <img
                                className="slideImage d-block w-100"
                                src="http://localhost:3000/images/opinion1.png"
                                alt="First slide"
                            />

                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="slideImage d-block w-100"
                                src="http://localhost:3000/images/opinion2.png"
                                alt="Second slide"
                            />

                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="slideImage d-block w-100"
                                src="http://localhost:3000/images/opinion3.png"
                                alt="Second slide"
                            />

                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="slideImage d-block w-100"
                                src="http://localhost:3000/images/opinion4.png"
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="slideImage d-block w-100"
                                src="http://localhost:3000/images/opinion5.png"
                                alt="Second slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>

            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Footer/>
        </div>

    );
}

export default HomePage;