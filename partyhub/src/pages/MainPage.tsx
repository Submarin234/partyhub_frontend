import React from 'react';
import {Container} from 'react-bootstrap'
import Header from "../components/Header";
import Footer from "../components/Footer";
import Events from "../components/Events";

function MainPage() {
    return (
        <div className='text-center'>
            <Header/>
            <main>
                <Container>
                    <Events/>
                </Container>
            </main>
            <Footer/>
        </div>

    );
}

export default MainPage;
