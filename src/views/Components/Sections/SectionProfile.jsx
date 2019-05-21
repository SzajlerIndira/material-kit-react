import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import typographyStyle from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.jsx";
import image from "assets/img/faces/avatar.jpg";
class SectionProfile extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.section}>
                <div className={classes.container}>
                    <div id="images">
                        <GridContainer>
                            <GridItem xs={12} sm={2} className={classes.marginRight}>
                                <img
                                    src={image}
                                    alt="..."
                                    className={classes.imgRoundedCircle + " " + classes.imgFluid}
                                />
                            </GridItem>
                        </GridContainer>
                    </div>
                </div>
                    <div className={classes.space50} />
            </div>
        );
    }
}

export default withStyles(typographyStyle)(SectionProfile);
