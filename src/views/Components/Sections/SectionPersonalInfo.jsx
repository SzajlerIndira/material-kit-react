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

import questionnaireStyle from "assets/jss/material-kit-react/views/componentsSections/questionnaireStyle.jsx";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import SectionWarningNotification from "views/Components/Sections/SectionWarningNotification.jsx";
import SectionFailedBooking from "views/Components/Sections/SectionFailedBooking.jsx";
import SectionBookingSuccess from "views/Components/Sections/SectionBookingSuccess.jsx";

class SectionPersonalInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name : "",
            email : "",
            confirmEmail:'',
            phone : "",
            selectedDay:' ',
            selectedSlot:' ',
            isWarning: false,
            hours: [],
            buttonTextDays:'Választható napok:',
            buttonTextHours:'Választható órák:',
            neededTime:' ',
            isBookingFailed:'none',
            isAppointmentSaved: false,
            nameError: false,
            emailError: false,
            confirmEmailError: false,
            phoneError: false,

        };
        this.handleChangeUserInput = this.handleChangeUserInput.bind(this);
        this.handleClickDay = this.handleClickDay.bind(this);
        this.handleClickHour = this.handleClickHour.bind(this);

    }
    handleChangeUserInput = (event) => {
        this.setState({[event.target.name]: event.target.value}, () => {
            console.log(this.state.phone);
           if(this.validateName()||this.validateEmail() ||
            this.checkIdenticalEmail() ||
            this.validatePhone()) {
               this.setState({isWarning: true})
           } else {
               this.setState({isWarning:false})
           }
        });
    }

    handleClickHour(value) {
        let day = this.props.freeSlots[this.state.selectedDay];
        for (let key in day) {
            if (day[key]["startHour"] === value) {
                this.state.selectedSlot = day[key];
            }
        }
        this.setState({buttonTextHours: value});
    }

    handleClickDay(value) {
        this.setState({selectedDay: value});
        this.setState({buttonTextDays: value});
    }

    renderNeededTime() {
        let day = this.props.freeSlots[this.state.selectedDay];
        for (let key in day) {
            if (this.state.neededTime == ' ') {
                this.state.neededTime = day[key]["neededTime"]
                break;
            }
        }
        return (
            <div>
                <p>A köröm elkészítése {this.state.neededTime} órát vesz igénybe.</p>
            </div>
        );
    }

    renderHours() {
        const {classes} = this.props;
        let day = this.props.freeSlots[this.state.selectedDay];
        let hours = [];
        for (let key in day) {
            hours.push(day[key]["startHour"]);
        }
        this.state.hours = hours;
        return (
            <CustomDropdown onClick={this.handleClickHour.bind(this)}
                            buttonText={this.state.buttonTextHours}
                            buttonProps={{
                                className: classes.navLink,
                                color: "rose"
                            }}
                            dropdownList={this.state.hours}
            />);
    }


    renderSaveAppointment() {
        return (<Button label="submit" simple color="primary" size="lg"
                        onClick={(event) => this.handleError(event)}>
                Időpont mentése
            </Button>
        );
    }

    handleSubmit(event) {
    const payload =JSON.stringify({"name": this.state.name, "mail": this.state.email, "phone": this.state.phone,
    "selectedSlot": this.state.selectedSlot});
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
            .then(response => this.checkConfimation(response))
            .then(response => console.log('Success:', response))
            .catch(error => console.error('Error:', error));
    }

    checkConfimation(response) {
        console.log(response["status"]);
        if (response["status"] === "fail") {
            this.setState({isBookingFailed: true});
            this.props.saveFreeSlots(response["slots"]);

        }
        if (response["status"] === "success") {
            this.setState({isBookingFailed: false});
            this.setState({isAppointmentSaved : true})  ;

        }
    }

    renderBookingFailed() {
        return <div>
            <SectionFailedBooking/>
        </div>
    }

    renderBookingSuccess() {
        return <div>
            <SectionBookingSuccess/>
        </div>
    }

    validatePhone(){
        let phoneNum = new RegExp(/^\+36(20|30|31|50|70)\d{7}$/gm);
        if(this.state.phone.match(phoneNum)) {
            this.setState({phoneError:false});
            return false;
        } else {
            this.setState({phoneError:true});
            return true;
        }
    }
    validateName(){
        if(this.state.name==="") {
            this.setState({nameError:true});
            return true;
        } else {
            this.setState({nameError:false});
            return false;
        }
    }

    validateEmail(){
        let email = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
        if (email.test(this.state.email)) {
            this.setState({emailError:false});
            return false;
        }else{
            this.setState({emailError:true});
            return true
        }
    }
    checkIdenticalEmail(){
        if(this.state.email === this.state.confirmEmail){
            this.setState({confirmEmailError:false});
            return false;
        }else{
            this.setState({confirmEmailError:true});
            return true;
        }
    }

    handleError = e => {
        this.state.isWarning = false;
        if (this.state.name ==""||this.state.email== "" || this.state.phone=="" || this.state.selectedDay == ""
            || this.state.selectedSlot == "") {
            this.setState({isWarning: true});
        } else {
            this.handleSubmit();
        }
    }

    renderAlert() {
        return (
            <div>
                <SectionWarningNotification warningText = {this.state.warningText}/>
            </div>
        );
    }

    render() {
        const {classes} = this.props;
        let hoursPerDay;
        let neededTime;
        let saveAppointmentButton;
        if (this.state.isAppointmentSaved===false){
            saveAppointmentButton = this.renderSaveAppointment();
        }
        if (this.state.selectedDay !== " ") {
            hoursPerDay = this.renderHours();
            neededTime = this.renderNeededTime();
        }
        let warning;
        if (this.state.isWarning) {
            warning = this.renderAlert();
        }

        let bookingFailed;
        if (this.state.isBookingFailed === true) {
            bookingFailed = this.renderBookingFailed();
        } else if (this.state.isBookingFailed === false) {
            bookingFailed = this.renderBookingSuccess()
        }
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
                                    {warning}
                                    <CardBody>
                                        <CustomInput
                                            labelText="Név..."
                                            id="name"
                                            name="name"

                                            onChange={this.handleChangeUserInput}

                                            formControlProps={{
                                                fullWidth: true,
                                                error: this.state.nameError
                                            }}

                                            inputProps={{
                                                type: "name",
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <People className={classes.inputIconsColor}/>
                                                    </InputAdornment>
                                                )
                                            }}
                                        />
                                        <CustomInput
                                            labelText="Email..."
                                            id="email"
                                            name="email"
                                            formControlProps={{
                                                fullWidth: true,
                                                error: this.state.emailError
                                            }}
                                            onChange={this.handleChangeUserInput}
                                            inputProps={{
                                                type: "email",
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <Email className={classes.inputIconsColor}/>
                                                    </InputAdornment>
                                                )
                                            }}
                                            />
                                        <CustomInput
                                            labelText="Confirm Email..."
                                            id="confirmEmail"
                                            name="confirmEmail"
                                            formControlProps={{
                                                fullWidth: true,
                                                error: this.state.confirmEmailError
                                            }}
                                            onChange={this.handleChangeUserInput}
                                            inputProps={{
                                                type: "text",
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <Email className={classes.inputIconsColor}/>
                                                    </InputAdornment>
                                                )
                                            }}
                                        />
                                        <CustomInput required={true}
                                            labelText="Telefonszám  pl:+36203176914"
                                            id="phone"
                                            name="phone"
                                            errorText="This field is required"
                                            formControlProps={{
                                                fullWidth: true,
                                                error: this.state.phoneError
                                            }}
                                            onChange={this.handleChangeUserInput}
                                            inputProps={{
                                                type: "text",
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <Phone className={classes.inputIconsColor} />
                                                    </InputAdornment>
                                                )
                                            }}
                                        />

                                        <div>
                                            <CustomDropdown onClick={this.handleClickDay.bind(this)}
                                                            buttonText={this.state.buttonTextDays}
                                                            buttonProps={{
                                                                className: classes.navLink,
                                                                color: "rose"
                                                            }}
                                                            dropdownList={this.props.freeDays}

                                            />
                                        </div>
                                        <div>
                                            {hoursPerDay}
                                        </div>
                                        <div>
                                            {neededTime}
                                        </div>

                                    </CardBody>
                                    <CardFooter className={classes.cardFooter}>
                                        <div>
                                            {bookingFailed}
                                        </div>
                                        <div>
                                            {saveAppointmentButton}
                                        </div>

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

export default withStyles(questionnaireStyle)(SectionPersonalInfo);
