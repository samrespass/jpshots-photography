import * as React from "react"
import "/src/styles/global.css"

import Navbar from "/src/components/navbar.js"
import Contactform from "/src/components/contact-form.js"
import { StaticImage, GatsbyImage, getImageData } from "gatsby-plugin-image";


const ServicesPage = () => {


    return (
      <main>
        <title>JPShots Photography | Contact Us</title>
        <Navbar/>
        <div className="homeBody">
        <div className="copyBox">
        <h1>Hit Us Up</h1>
        <p>If you're gonna use a contact form like your old site you really gotta trim it down</p>
        <Contactform className="contact"/>
        </div>
        </div>
        <div className="bottomBorder">&nbsp;</div>
        </main>
    )
  }
  
  export default ServicesPage
  