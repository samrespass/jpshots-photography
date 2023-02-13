import "/src/styles/global.css"
import * as React from "react"
import { useState } from "react";
import DatePicker from "react-datepicker";
import subDays from "date-fns/subDays";
import Leads from "/src/new-leads.json";
import axios from "axios";
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

export default function ContactForm() {

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [startDate, setStartDate] = useState(new Date());


    

    const formSubmit = (event) => {
        event.preventDefault()
        const lead = [ {'first name': fname}, {'last name': lname},{'phone': phone}, {'email': email}, {'Wedding Date': startDate}, {'message': message} ]
        console.log(lead)

    };

    return (
        <>
        <form  name='WebToLeads4913135000001156025' method='POST'   onSubmit={(e) => formSubmit(e)} accept-charset='UTF-8' className="contact-form">
        <label>First Name</label>
        <input placeholder="First Name" onChange={(e) => setFname(e.target.value)}></input>
        <label placeholder="Last Name">
        Last Name
        </label>
        <input placeholder="Last Name" onChange={(e) => setLname(e.target.value)}></input>
        <label placeholder="Email">
        Email
        </label>
        <input placeholder="Email" type='email' onChange={(e) => setEmail(e.target.text)}></input>
        <label placeholder="Phone">
        Phone
        </label>
        <input placeholder="Phone" onChange={(e) => setPhone(e.target.value)}></input>
        <label>Event Date</label>
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}/>
        <label>Message</label>
        <textarea placeholder="Message" id="textMessage" onChange={(e) => setMessage(e.target.value)} className='messageBox'></textarea>
        <input type='submit' id='formsubmit' className='formsubmit zcwf_button' value='Submit' title='Submit'/>
            </form>
 

    </>
)
}