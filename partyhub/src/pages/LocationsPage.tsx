import React from 'react';
import {Container} from 'react-bootstrap'
import Header from "../components/Header";
import Footer from "../components/Footer";
import Locations from "../components/Locations";

function LocationsPage() {
    return (
        <div className='text-center'>
            <Header/>
            <main>
                <Container>
                    <Locations/>
                </Container>
            </main>
            <Footer/>
        </div>

    );
}

export default LocationsPage;