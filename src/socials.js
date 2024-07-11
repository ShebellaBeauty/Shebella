import React, { useState } from "react";
import storeImge from "./Assets/GoogleBusinessProfileImages.webp";
import GoogleReviews from "./reviewCarousell";
import { ElfsightWidget } from 'react-elfsight-widget';


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
      <div style={reviewWidget} className="widgetControl">
        <GoogleReviews />
      </div>
      <ElfsightWidget widgetId="9680c738-58a7-4369-8d8e-2b268e961c1a" />
    </div>
  );
}

export default Socials;
