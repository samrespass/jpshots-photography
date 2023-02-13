import * as React from "react";
import "/src/styles/global.css";
import { useState, useEffect } from "react";
import { StaticImage, GatsbyImage, getImageData } from "gatsby-plugin-image";
import Gallery from "react-photo-gallery";
import Wedding from "/src/wedding-gallery.json";
import { wedPhotos } from "/src/wedding-photos.js";
import { engagePhotos } from "/src/engagement-photos.js";
import { gradPhotos } from "/src/graduation-photos.js";
import Graduation from "/src/graduation-gallery.json";
import { Button, ButtonGroup } from '@chakra-ui/react'
import Engagement from "/src/engagement-gallery.json";

export default function Services() {
  const [photos, setPhotos] = useState(wedPhotos);
  const [banner, setBanner] = useState("");


  function selectedWedding() {
    let buttonEngage = document.querySelector('.engagementButton')
    let buttonGrad = document.querySelector('.graduationButton')
    buttonEngage.style.textDecoration = 'none';
    buttonGrad.style.textDecoration = 'none';
    let button = document.querySelector('.weddingButton')
    button.style.textDecoration = 'underline';
    console.log("i'm done")
  }

  function selectedGraduation() {
    let button = document.querySelector('.weddingButton')
    let buttonEngage = document.querySelector('.engagementButton')
    button.style.textDecoration = 'none';
    buttonEngage.style.textDecoration = 'none';
    let buttonGrad = document.querySelector('.graduationButton')
    buttonGrad.style.textDecoration = 'underline';
    console.log("i'm done")
  }

  function selectedEngagement() {
    let button = document.querySelector('.weddingButton')
    let buttonGrad = document.querySelector('.graduationButton')
    button.style.textDecoration = 'none';
    buttonGrad.style.textDecoration = 'none';
    let buttonEngage = document.querySelector('.engagementButton')
    buttonEngage.style.textDecoration = 'underline';
    console.log("i'm done")
  }

  return (
    <>
    <div className="paper-border-top">
    <div className={banner}>
    <div className="serviceText">
      {banner}
    </div>
    <div className="serviceCopy">
      <p>A lotta wedding photographers talk big shit but can't deliver, but I'm here to tell you that neither do we. We at JPShots will do whatever it takes to ruin this once in a lifetime moment. I personally guarantee that this will be a cataclysmic failure in every possible way, coloring everyone's perception of your marriage and the trajectory of your lives.</p>
    </div>
    </div>
    </div>
    <div className="serviceBody">
    <div className="topBorder">&nbsp;</div>
      <div className="serviceSelect">
        <button className="weddingButton"
          onClick={() => {
            
            setPhotos(wedPhotos);
            setBanner("")
            setBanner("Weddings")
            selectedWedding()
          }}
        >
          Weddings
        </button>
        <button className="graduationButton"
          onClick={() => {
            setPhotos(gradPhotos);
            setBanner("")
            setBanner("Engagement")
            selectedGraduation()
          }}
        >
          Engagement
        </button>
        <button className="engagementButton"
          onClick={() => {
            
            setPhotos(engagePhotos);
            selectedEngagement()
          }}
        >
         Graduation
        </button>
             </div>

       <Gallery photos={photos} direction={"column"} className="photoGallery"/>
      <div className="bottomBorder">&nbsp;</div>
    </div></>
  );
}
