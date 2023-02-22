import "/src/styles/global.css";
import * as React from "react";
import { useState, useEffect } from "react";
import jockey from "/src/dj-database.json";
import axios from "axios";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

export default function VendorCake() {
  const [slide, setSlide] = useState(0);

  return (
    <main className="wrap">
    
      <div className="vendorCakeBody">
        <div className="cakeVendor">
        <div className="cakeText">
          <h2>Foster's Frosting</h2>
          <p>
            I recommend Foster’s Frosting. She’s also a vendor we hired for our
            wedding. She has offered anyone who books through me a 20% off
            discount on their cake (no kickback to me). She’s a very
            talented baker who works as the bakery manager at Price Chopper by
            day, and makes AMAZING cakes for her own business by night. She’s
            unique in her ability to make very classy cakes, and also
            fun/creative cakes.
          </p>
        </div>
                 </div>
      </div>
    </main>
  );
}
