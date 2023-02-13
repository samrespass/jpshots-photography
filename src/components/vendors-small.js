import "/src/styles/global.css";
import * as React from "react";
import { useState, useEffect } from "react";
import jockey from "/src/dj-database.json";
import axios from "axios";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

export default function Vendorsmall() {
  const [slide, setSlide] = useState(0);

  return (
    <div className="vendor">
      <>
      <div className="smallVendor">
          <div className="innerVendor">
          <h2 className="smallVendorHeader">Robot Monster Creative</h2>
            <img src='https://i.imgur.com/i2YG4NU.png' alt='robot monster creative logo' />
            <p className="videoText">If you plan on working with a videographer, I would recommend Robot Monster Creative. He’s creative like his name, and a really nice guy.</p>
          </div>
        </div>
        <div className="smallVendor">
          <div className="innerVendor">
          <h2 className="smallVendorHeader">Slabotsky's<br/><br/></h2>
            <img src='https://i.imgur.com/AJ9AKPS.png' alt='slabotsky logo' />
            <p className="videoText">I chose to go with Slabotsky’s for my own wedding. They make custom-tailored suits for about the same price as renting, but you actually get to keep the suit! Another similar and great option is Dan the Tailor.</p>
          </div>
        </div>
        <div className="smallVendor">
          <div className="innerVendor">
          <h2 className="smallVendorHeader">Fiore Events<br/><br/></h2>
            <img src='https://i.imgur.com/lWBieD1.png' alt='fiore events logo' />
            <p className="videoText">Julie Schlueter | Fiore Events is my new top recommendation. She is incredibly detailed and is on the ball with communication well before the wedding, during the wedding, and even does a fair amount of work after. Essentially she’s a hard core boss and I CANOT SAY ENOUGH GOOD THINGS ABOUT HER.</p>
          </div>
        </div>
   
      </>
    </div>
  );
}
