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
            name : "default",
            mail : " ",
            phone : " "
        };
        this.handleChangeUserInput = this.handleChangeUserInput.bind(this);
    }
    handleChangeUserInput = (event) => {
        console.log(event.target.value);
        this.setState({ [event.target.name] : event.target.value });
    }

    handleSubmit(event) {

        const payload =JSON.stringify({"name": this.state.name, "mail": this.state.mail, "phone": this.state.phone});
        console.log(payload);

        fetch('http://localhost:8080/personal', {
            method: 'POST',
            mode: 'cors',
            body: payload,
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(response => console.log('Success:', response))
            .catch(error => console.error('Error:', error));
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
                                            name="name"
                                            onChange={this.handleChangeUserInput.bind(this)}

                                            formControlProps={{
                                                fullWidth: true
                                            }}

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
                                            name="mail"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            onChange={this.handleChangeUserInput.bind(this)}
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
                                            name="phone"
                                            errorText="This field is required"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            onChange={this.handleChangeUserInput.bind(this)}
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
                                        <Button label="submit" simple color="primary" size="lg" onClick={(event) =>  this.handleSubmit(event)}>
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
