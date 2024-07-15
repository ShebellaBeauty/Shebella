import React from "react";
import SpliceElement from "./splice";
import GridContainer from "./gridContainer";
import Listings from "./listings";
import Contactparent from "./contactParent";
import Socials from "./socials";
import AboutSection from "./about";
import Quote from "./quote";
import Setmore from './setmore'

function Homepage() {
  return (
    <div>
      <SpliceElement />
      <Quote />
      <AboutSection />
      <GridContainer />
      <Listings />
      <Contactparent />
      <Socials />
      <Setmore />
    </div>
  );
}

//changes

export default Homepage;
