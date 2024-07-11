import React, { useState } from "react";
import storeImge from "./Assets/GoogleBusinessProfileImages.webp";
import GoogleReviews from "./reviewCarousell";

function Socials() {
  //Step 1: Initialize state
  const [showimage, setShowimage] = useState(false);

  console.log("useState");
  console.log(showimage);

  const flexContainer = {
    marginTop: "10%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const flexContainer1 = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  };

  const buttonStyle = {
    marginTop: "5%",
    fontSize: "100%",
    padding: "1%",
    fontFamily: "Montserrat, sans-serif",
    backgroundColor: "#051d40",
    color: "white",
  };

  const photoStyle = {
    marginTop: "5%",
    display: showimage ? "initial" : "none",
    width: "100%",
  };

  // const fbLogoStyle = {
  //   marginTop: "3%",
  //   width: "10%",
  //   height: "10%",
  // };

  //Widget for google reviews
  const reviewWidget = {
    width: "80%",
  };

  return (
    <div style={flexContainer}>
      <div style={reviewWidget}>
        <GoogleReviews />
      </div>{" "}
      <div style={flexContainer}>
        {/* This is for a facebook button that leads to the customer's facebook page, ignore for now because i found a better widget>
        {/* <a
          className="socials-container"
          style={aStyle}
          href="https://www.facebook.com"
        >
          Our facebook page
          <img
            src={fbLogo}
            style={fbLogoStyle}
            className="storeButton"
            alt="fblogo"
            loading="lazy"
          />
        </a> */}

        {/* <button
          style={btn}
          className="storeButton"
          onClick={() => {
            window.location.href =
              "https://www.facebook.com/profile.php?id=61561731779552";
          }}
        >
          Click this here to visit
        </button> */}
      </div>
      <button
        // Step 2: Add event handler
        style={buttonStyle}
        className="storeButton"
        onClick={() => {
          setShowimage(showimage === false); //update state, set timeframe to true to make the state true
        }}
      >
        Click here to see our Store @ #01-89 Roxy Square
      </button>
      <div style={flexContainer1}>
        <img style={photoStyle} src={storeImge} alt="store" />
      </div>
    </div>
  );
}

export default Socials;
