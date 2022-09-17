import "/src/styles/global.css"
import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

export default function Navbar() {
    return (
    <nav className="nav-bar">
    <div className="nav-lists">
    <Link to='/about' className="nav-link"><h3 className="nav-item">About</h3></Link>
    <Link to='/contact' className="nav-link"><h3 className="nav-item">Contact</h3></Link>
    <Link to='/'><StaticImage src='../images/nav-logo.png' alt="JPShots logo" /></Link>
    <Link to='/services' className="nav-link"><h3 className="nav-item">Services</h3></Link>
    <Link to='/vendors' className="nav-link"><h3 className="nav-item">Vendors</h3></Link>
    </div>
    </nav>
    
)
}