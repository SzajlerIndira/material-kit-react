import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons
import People from "@material-ui/icons/People";
import Email from "@material-ui/icons/Email";
import Phone from "@material-ui/icons/Phone";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";

import loginStyle from "assets/jss/material-kit-react/views/componentsSections/loginStyle.jsx";

class SectionPersonalInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name : " ",
            mail : " ",
            phone : " "
        };
        this.handleChangeUserInput = this.handleChangeUserInput.bind(this);
    }
    handleChangeUserInput(event) {
        this.setState({ [event.target.id]: event.target.value });
    }


    render() {
        const { classes } = this.props;
        return (
            <div className={classes.section}>
                <div className={classes.container}>
                    <GridContainer justify="center">
                        <GridItem xs={12} sm={12} md={4}>
                            <Card>
                                <form className={classes.form}>
                                    <CardHeader color="primary" className={classes.cardHeader}>
                                        <h4>Személyes Adatok</h4>
                                    </CardHeader>
                                    <p className={classes.divider}>Kérlek, a foglaláshoz add meg az alábbi adatokat!</p>
                                    <CardBody>
                                        <CustomInput
                                            labelText="Név..."
                                            id="name"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            onChange={this.handleChangeUserInput}
                                            inputProps={{
                                                type: "name",
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <People className={classes.inputIconsColor} />
                                                    </InputAdornment>
                                                )
                                            }}
                                        />
                                        <CustomInput
                                            labelText="Email..."
                                            id="mail"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            onChange={this.handleChangeUserInput}
                                            inputProps={{
                                                type: "mail",
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <Email className={classes.inputIconsColor} />
                                                    </InputAdornment>
                                                )
                                            }}
                                        />
                                        <CustomInput
                                            labelText="Telefonszám..."
                                            id="phone"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            onChange={this.handleChangeUserInput}
                                            inputProps={{
                                                type: "phone",
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <Phone className={classes.inputIconsColor} />
                                                    </InputAdornment>
                                                )
                                            }}
                                        />
                                    </CardBody>
                                    <CardFooter className={classes.cardFooter}>
                                        <Button simple color="primary" size="lg">
                                            Időpont mentése
                                        </Button>
                                    </CardFooter>
                                </form>
                            </Card>
                        </GridItem>
                    </GridContainer>
                </div>
            </div>
        );
    }
}

export default withStyles(loginStyle)(SectionPersonalInfo);
