import * as React from "react"
import "/src/styles/global.css"
import Navbar from "/src/components/navbar.js"
import Photobar from "/src/components/photo-bar.js"
import Welcome from "/src/components/welcome-image.js"
import { StaticImage } from "gatsby-plugin-image"

// markup
const IndexPage = () => {
  return (
    <main>
      <title>JPShots Photography</title>
      <Welcome></Welcome>
      <Navbar></Navbar>
      <div className="homeBody">
      <div className="copyBox">
      <h1>Let's Talk About Some Wedding Shit</h1>
      <p>A lotta wedding photographers talk big shit but can't deliver, but
        I'm here to tell you that neither do we. We at JPShots will do whatever
        it takes to ruin this once in a lifetime moment. I personally guarantee
        that this will be a cataclysmic failure in every possible way, coloring
        everyone's perception of your marriage and the trajectory of your lives.
      </p>
      </div>
      
      <div className="rightPic">
      <StaticImage src='../images/kansas-city-wedding-photography-dip-kiss.jpg' alt="JPShots logo" />
      </div>
      <div className="fullWidthBox">

      </div>
      </div>
      <div className="bottomBorder">&nbsp;</div>
      <Photobar></Photobar>
    </main>
  )
}

export default IndexPage
