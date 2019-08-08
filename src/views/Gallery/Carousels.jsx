import React from "react";
// react component for creating beautiful carousel
import withStyles from "@material-ui/core/styles/withStyles";

import carouselStyle from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.jsx";
import SectionProfile from "../BookingPage/Components";
import classNames from "classnames";
import SectionCarousel from "../Gallery/Sections/SectionCarousel.jsx";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import HeaderLinks from "../../components/Header/HeaderLinks";

class Carousels extends React.Component {

    render() {
        const { classes, ...rest } = this.props;
        return (
            <div>
                <Header
                    brand="Maca Nails"
                    image={<SectionProfile />}
                    rightLinks={<HeaderLinks />}
                    fixed
                    color="transparent"
                    changeColorOnScroll={{
                        height: 400,
                        color: "white"
                    }}
                    {...rest}
                />
                <div
                     className={classNames(classes.main, classes.mainRaised)}
                    >
                        <SectionCarousel />
                </div>
                <Footer />
            </div>
        );
    }
}
export default withStyles(carouselStyle)(Carousels);

