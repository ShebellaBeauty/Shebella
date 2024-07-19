import React from "react";
import SpliceElement from "./splice";
import GridContainer from "./gridContainer";
import Listings from "./listings";
import Contactparent from "./contactParent";
import Socials from "./socials";
import AboutSection from "./about";
import Quote from "./quote";
import { ElfsightWidget } from "react-elfsight-widget";


function Homepage() {
  return (
    <div>
      <ElfsightWidget style={{marginTop: "1%"}} widgetId="eedbe33a-c475-44ba-b247-23842c4ad9f6" />
      <SpliceElement />
      <Quote />
      <AboutSection />
      <GridContainer />
      <Listings />
      <Contactparent />
      <Socials />
    </div>
  );
}

//changes

export default Homepage;
