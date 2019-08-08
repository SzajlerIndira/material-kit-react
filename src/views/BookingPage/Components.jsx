import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import SectionPersonalInfo from"./Sections/SectionPersonalInfo";
//scroll

import ScrollableAnchor from 'react-scrollable-anchor'
import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";
import SectionQuestionnaire from "./Sections/SectionQuestionnaire";

class Components extends React.Component {
  constructor(props){
    super(props);
      this.state={

        freeSlots: {},
        freeDays:[]
      }
      this.saveFreeSlots = this.saveFreeSlots.bind(this);
  }

  saveFreeSlots=(slots) => {
    this.setState({freeSlots: slots});
      this.state.freeDays=[];
    for(let key in slots){
      this.state.freeDays.push(key);
    }
    this.state.freeDays.sort();
  }

  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          brand="Maca Nails"
          rightLinks={<HeaderLinks />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        />
        <Parallax image={require("assets/img/header-background.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                  <h1 className={classes.title}>Maca Nails</h1>
                  <h3 className={classes.subtitle}>
                    Időpontfoglaláshoz görgess lejjebb.<br></br>
                    Munkáimat a <a  href = "/gallery" target="_blank">galériában</a> találhatod.
                  </h3>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>

        <div className={classNames(classes.main, classes.mainRaised)}>

          <ScrollableAnchor id={'nail'}>
          <SectionQuestionnaire saveFreeSlots = {this.saveFreeSlots}/>
          </ScrollableAnchor>
          <ScrollableAnchor id={'personal'}>
            <SectionPersonalInfo freeSlots = {this.state.freeSlots} freeDays = {this.state.freeDays} saveFreeSlots = {this.saveFreeSlots}/>
          </ScrollableAnchor>

        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(componentsStyle)(Components);
