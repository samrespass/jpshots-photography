import * as React from "react";
import "/src/styles/global.css";
import { useState, useEffect } from "react";
import { StaticImage, GatsbyImage, getImageData } from "gatsby-plugin-image";
import Wedding from "/src/wedding-gallery.json";
import Graduation from "/src/graduation-gallery.json";
import { Button, ButtonGroup } from '@chakra-ui/react'
import Engagement from "/src/engagement-gallery.json";

export default function Gallery() {
  const [gallery, setGallery] = useState([]);
  const [galleryInfo, setGalleryInfo] = useState("")
  function cleaner() {
    setGallery([null]);
  }

  return (
    <div className="serviceBody">
      <div className="serviceSelect">
        <button
          onClick={() => {
            cleaner();
            setGallery(Wedding);
          }}
        >
          Weddings
        </button>
        <button
          onClick={() => {
            cleaner();
            setGallery(Graduation);
          }}
        >
          Graduation
        </button>
        <button
          onClick={() => {
            cleaner();
            setGallery(Engagement);
          }}
        >
          Engagement
        </button>
        <p>Here's where you'll talk about your photography ethos or some such, this section is static, you'll probly wanna tell dummies to select a service</p>
      </div>
      {gallery.length > 1 && 
        <div className="galleryText">
          <h1>{gallery[0].category}</h1>
          <p>{gallery[0].gallery_description}</p>
        </div>
      }
      <div className="galleryBox">
        <div className="galleryInfo">
          <p>
           {gallery.gallery_Info}
          </p>
        </div>

        {gallery.map((gallery) => (
          <div className="galleryImage">
            <img src={gallery.image} alt={gallery.alt} />
          </div>
        ))}
      </div>
      <div className="bottomBorder">&nbsp;</div>
    </div>
  );
}
