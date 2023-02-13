import * as React from "react"
import "/src/styles/global.css"

import Navbar from "/src/components/navbar.js"
import Vendordj from "../components/vendors-dj"
import Vendorvideo from "../components/vendors-small"
import Vendorcake from "../components/vendors-cakes"
import { StaticImage, GatsbyImage, getImageData } from "gatsby-plugin-image";


const ServicesPage = () => {

    return (
      <main>
        <title>JPShots Photography | Vendors</title>
        <Navbar/>
        <div className="vendorBooth">
        <Vendordj/>
        <Vendorcake/>
        <Vendorvideo/>
        </div>
        </main>
    )
  }
  
  export default ServicesPage
  