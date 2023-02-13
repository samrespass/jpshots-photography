import "/src/styles/global.css"
import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"


export default function Navbar() {
    return (
        <>
    <nav className="nav-bar">
    <div className="nav-lists">
    <Link to='/about' className="nav-link button1">About</Link>
    <Link to='/contact' className="nav-link button2">Contact</Link>
    <Link to='/' ><StaticImage src='../images/Big-logo.png' alt="JPShots logo" className="logo"/></Link>
    <Link to='/services' className="nav-link button3">Services</Link>
    <Link to='/vendors' className="nav-link button4">Vendors</Link>
    </div>
    <div className="bottomBorder">&nbsp;</div>
        </nav>
        </>
    
)
}