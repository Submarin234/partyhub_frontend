import React, { ChangeEvent, useEffect, useState } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import FormErrorProps from '../props/FormErrorProps';
import { useHistory } from 'react-router-dom';

function ContactPage() {

    const [isFormValid, setIsFormValid] = useState(false);
    
    const history = useHistory();

    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        location: "",
        date: Date.now(),
        ticket: 0,
        message: "",
      });

      const[error, setError] = useState<FormErrorProps>({
        firstname: "",
        lastname: "",
        location: "",
        date: "",
        ticket: "",
        message: "",
      }
      )

      function validateForm() {
        let isError = false;
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        tomorrow.setHours(0, 0, 0, 0);
      
        if (!formData.firstname) {
          isError = true;
          error.firstname = "First name is required";
        }
        else{
            error.firstname = "";
        }
        if (!formData.lastname) {
          isError = true;
          error.lastname = "Last name is required";
        }
        else{
            error.lastname = "";
        }
        if (!formData.location) {
          isError = true;
          error.location = "Location is required";
        }
        else{
            error.location = "";
        }
        if (!formData.date) {
          isError = true;
          error.date = "Date is required";
        } 
        else{
            error.date = "";
        }
        if (new Date(formData.date) < tomorrow) {
          isError = true;
          error.date = "Date must be at least tomorrow";
        }
        else{
            error.date = "";
        }
        if (!formData.ticket) {
          isError = true;
          error.ticket = "Ticket price is required";
        }
        else{
            error.ticket = "";
        }
        if (!formData.message) {
          isError = true;
          error.message = "Other information is required";
        }
        else{
            error.message = "";
        }
        setError(error);
        return !isError;
      }
      
      const handleSubmit = (event: React.FormEvent) => {
        if (validateForm()) {
          // send the email
          setIsFormValid(true);

        }
        else{
            event.preventDefault();
            if(error.date != "")
                alert("Invalid date! Proposed events should start after the following day!")
            if(error.firstname != "")
                alert("Invalid first name!")
            if(error.lastname != "")
                alert("Invalid last name!")
            if(error.location != "")
                alert("Invalid location!")
            if(error.message != "")
                alert("Provide more informations!")
            if(error.ticket != "")
                alert("Invalid tickets!")
        }
      };
      const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value
        });
      };

      useEffect(() => {
        if(isFormValid) {
            history.push("/home");
        }
    }, [isFormValid]);
    
    return (
        <div className="mainContactDiv">
            <div className='text-center'>
            <Header />
            </div>
            <br/>
        <div className="formDiv">
            <p>Do you own a club or are you organizing a party and want to be part of our community? It is easy, just contact us.</p>

            <form onSubmit={handleSubmit} action="mailto:partyfinder@gmail.com" method="post" encType="text/plain">
                <label htmlFor="fname">First Name:</label>
                <input type="text" id="fname" name="firstname" placeholder="Your first name.." onChange={handleChange} />
      
                <label htmlFor="lname">Last Name:</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.." onChange={handleChange} />

                <label htmlFor="location">Location:</label>
                <input type="text" id="location" name="location" placeholder="Party location.." onChange={handleChange}/>

                <label htmlFor="date">Date:</label>
                <br/>
                <input type="date" id="date" name="date" onChange={handleChange}/>
                <br/>
                <br/>

                <label htmlFor="ticket">Ticket price: (in lei)</label>
                <br/>
                <input type="number" id="ticket" name="ticket" placeholder="Ticket price.." min="0" onChange={handleChange}/>
                <br/>

                <label htmlFor="message">Other information:</label>
                <br/>
                <input name="message" className="contactMessage" onChange={handleChange}/>


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

