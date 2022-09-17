import * as React from "react"
import "/src/styles/global.css"

import Navbar from "/src/components/navbar.js"
import Gallery from "/src/components/gallery.js"
import { StaticImage, GatsbyImage, getImageData } from "gatsby-plugin-image";


const ServicesPage = () => {

    return (
      <main>
        <title>JPShots Photography | About Us</title>
        <Navbar></Navbar>
        <div className="homeBody">
        <div className="copyBox">
        <h1>About the Team</h1>
        <p>Here's where you'll throw in a blurb about your team,
        history, manifesto, all that shit.</p></div>
        <div className="rightPic"><StaticImage src='../images/kansas-city-wedding-photographers.jpg' alt="JPShots logo" /></div>
        </div>
        <div className="bottomBorder">&nbsp;</div>
        </main>
    )
  }
  
  export default ServicesPage
  