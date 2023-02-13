import "/src/styles/global.css";
import * as React from "react";
import { useState, useEffect } from "react";
import jockey from "/src/dj-database.json";
import axios from "axios";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

export default function VendorDj() {
  const [slide, setSlide] = useState(0);

  return (
    <div className="vendor">
      <>
        <div className="vendorProfile">
          <div className="vendorPic">
            <h2>{jockey[slide].name}</h2>
            <img src={`${jockey[slide].image}`} alt={jockey[slide].alt} />
          </div>
          <div className="djNavigation">
            <div className="filmGallery">
            {jockey.map((jockey) => (
            <button className="filmItem" onClick={() => {
            setSlide(jockey.index);
          }}>
            <img src={jockey.image} alt={jockey.alt} />
            
            </button> 
        ))}
        </div>
          
          </div>
        </div>
        <div className="vendorInfo">
          <div className="vendorBlurb">
          <div className="vendorBio">
            <p className="vendorCopy">A good DJ does a lot more than bring in the music/equipment. A good
            DJ is the MC, and knows how to read & lead the room. They might only
            play one song for 20-30 seconds before working in a different song.
            Ask how comfortable they are experienced with mixing songs.</p></div>
          </div>
          <div className="vendorText">
            <div className="vendorBio"><p>{jockey[slide].profile}</p></div>
          </div>
        </div>
      </>
    </div>
  );
}
