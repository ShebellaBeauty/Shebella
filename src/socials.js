import React, { useState } from "react";
import GoogleReviews from "./reviewCarousell";
import { ElfsightWidget } from "react-elfsight-widget";

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

  //Widget for google reviews
  const reviewWidget = {
    width: "80%",
  };

  return (
    <div style={flexContainer}>
      <div style={reviewWidget} className="widgetControl">
        <GoogleReviews />
      </div>
      <ElfsightWidget widgetId="ef870bda-cf78-488e-85b5-109115b61d29" />
      <ElfsightWidget widgetId="79f39766-0869-4581-8627-665d8ce21eba" />
    </div>
  );
}

export default Socials;
