import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx"

import calendarStyle from "assets/jss/material-kit-react/views/componentsSections/calendarStyle.jsx";

class SectionCalendar extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.section}>
                <div className={classes.container}>
                    <div className={classes.title}>
                        <h2 color={"FFFFFF"}>Naptár</h2>
                    </div>
                        <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={8}>
                                <Card>
                                    <iframe className={classes.section2} title="calendar"
                                    src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23B39DDB&amp;ctz=Europe%2FBudapest&amp;src=bm9lbWlqYXRla2JvbHRAZ21haWwuY29t&amp;src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;src=ZW4uaHVuZ2FyaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;src=aHUuaHVuZ2FyaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%23039BE5&amp;color=%2333B679&amp;color=%230B8043&amp;color=%237986CB&amp;mode=WEEK"
                                    ></iframe>
                                </Card>
                            </GridItem>
                    </GridContainer>
                </div>
            </div>
        );
    }
}

export default withStyles(calendarStyle)(SectionCalendar);

