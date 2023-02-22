import * as React from "react"
import "/src/styles/global.css"

import Navbar from "/src/components/navbar.js"
import Gallery from "/src/components/gallery.js"
import Footer from "/src/components/footer.js"
import { StaticImage, GatsbyImage, getImageData } from "gatsby-plugin-image";


const ServicesPage = () => {

    return (
      <main>
        <title>JPShots Photography | About Us</title>
        <Navbar></Navbar>
        <div className="title"><h1>Meet the  Team</h1></div>
        <div className="aboutBody">
        <div className="rightPic"><StaticImage src='../images/about-pic.png' alt="JPShots logo" /></div>
        <div className="copyContainer">
        <div className="copyBox">
          <h1>Jp</h1>
          <p>Filler Text Here</p>
        </div>
        <div className="copyBox">
          <h1>Alicia</h1>
          <p>Filler Text Here</p>
        </div>
        </div>
        </div>
        <div className="processBody">
        <div className="holdMe">
          <div className="copyBox">
            <h1>Our Process</h1>
            <p>Here's where that blurb about not doing packages is gonna go.</p>
          </div>
        </div>
        </div>
        <Footer/>
        </main>
    )
  }
  
  export default ServicesPage
  