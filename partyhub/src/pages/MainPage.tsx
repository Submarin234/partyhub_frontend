import React from 'react';
import {Container} from 'react-bootstrap'
import Header from "../components/Header";
import Footer from "../components/Footer";
import Events from "../components/Events";

function MainPage() {
    return (
        <Container className='text-center py-3'>
            <Header/>
            <main>
                <Events/>
            </main>
            <Footer/>
        </Container>
    );
}

export default MainPage;