import * as React from "react"
import "/src/styles/global.css"
import Navbar from "/src/components/navbar.js"
import Services from "/src/components/gallery.js"


const ServicesPage = () => {

    return (
      <main>
        <title>JPShots Photography | Photo Services</title>
        <Navbar></Navbar>
        <Services></Services>
        </main>
    )
  }
  
  export default ServicesPage
  