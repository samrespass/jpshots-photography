import * as React from "react"
import "/src/styles/global.css"

import Navbar from "/src/components/navbar.js"
import Footer from "/src/components/footer.js"
import Contactform from "/src/components/contact-form.js"
import { StaticImage, GatsbyImage, getImageData } from "gatsby-plugin-image";


const ServicesPage = () => {


    return (
      <main>
        <title>JPShots Photography | Contact Us</title>
        <Navbar/>
        <div className="title"><h1>Hit Us Up</h1></div>
        <div className="homeBody">
        <div className="copyBox">
        <p>If you're gonna use a contact form like your old site you really gotta trim it down</p>
        <Contactform className="contact"/>
        </div>
        </div>
        <div className="bottomBorder">&nbsp;</div>
        <Footer/>
        </main>
    )
  }
  
  export default ServicesPage
  