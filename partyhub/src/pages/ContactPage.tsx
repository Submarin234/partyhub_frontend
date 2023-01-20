import React, { useState } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

function ContactPage() {

    return (
        <div className="mainContactDiv">
            <div className='text-center'>
            <Header />
            </div>
            <br/>
        <div className="formDiv">
            <p>Do you own a club or are you organizing a party and want to be part of our community? It is easy, just contact us.</p>

            <form action="mailto:partyfinder@gmail.com">
                <label htmlFor="fname">First Name:</label>
                <input type="text" id="fname" name="firstname" placeholder="Your first name.."/>

                <label htmlFor="lname">Last Name:</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

                <label htmlFor="location">Location:</label>
                <input type="text" id="location" name="location" placeholder="Party location.."/>

                <label htmlFor="date">Date:</label>
                <br/>
                <input type="date" id="location" name="date" />
                <br/>
                <br/>

                <label htmlFor="ticket">Ticket price:</label>
                <input type="text" id="ticket" name="ticket" placeholder="Ticket price.."/>
                <br/>

                <label htmlFor="message">Other information:</label>
                <br/>
                <textarea name="message" className="contactMessage" ></textarea>


                <input type="submit" value="Submit"/>
            </form>
        </div>
            <br/>
            <div className='text-center'>

            <Footer/>
            </div>
        </div>
    );
}

export default ContactPage;

