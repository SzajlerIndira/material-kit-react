import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import carouselStyle from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.jsx";
import image1 from "assets/img/nails_black.jpg";
import image2 from "assets/img/nails_copper.jpg";
import image3 from "assets/img/nails_grey.jpg";
import image4 from "assets/img/nails_pink.jpg";
import image5 from "assets/img/nails_white.jpg";

class SectionCarousel extends React.Component {
  render() {
    const { classes } = this.props;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false
    };
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
              <Card carousel>
                <Carousel {...settings}>
                  <div>
                    <img
                      src={image1}
                      alt="First slide"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      <h4>
                        {/*<LocationOn className="slick-icons" />*/}
                        Fekete francia
                      </h4>
                    </div>
                  </div>
                  <div>
                    <img
                      src={image2}
                      alt="Second slide"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      <h4>
                        {/*<LocationOn className="slick-icons" />*/}
                        Fekete, réz
                      </h4>
                    </div>
                  </div>
                  <div>
                    <img
                      src={image3}
                      alt="Third slide"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      <h4>
                        Szürke
                      </h4>
                    </div>
                  </div>
                  <div>
                    <img
                        src={image4}
                        alt="First slide"
                        className="slick-image"
                    />
                    <div className="slick-caption">
                      <h4>
                        Pink
                      </h4>
                    </div>
                  </div><div>
                  <img
                      src={image5}
                      alt="First slide"
                      className="slick-image"
                  />
                  <div className="slick-caption">
                    <h4>
                     Fehér gél
                    </h4>
                  </div>
                </div>
                </Carousel>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(carouselStyle)(SectionCarousel);
