import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
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
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import SectionWarningNotification from "views/Components/Sections/SectionWarningNotification.jsx";


class SectionQuestionnaire extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            basicNail: ["Natúr köröm", "Géllakk van a körmön", "Műköröm van a körmön", "Egy köröm javítása"],
            naturalNailOptions: ["Géllakk ", "Géllakk megerősítéssel", "Műköröm 'S' méret", "Műköröm 'M' méret",
                "Műköröm 'L' méret"],
            gelLacOptions: ["Géllakk eltávolítása manikűrrel", "Géllakkcsere", "Megerősített géllakkcsere",
                "Géllakk eltávolítás majd építés 'S' méret", "Géllakk eltávolítás majd építés 'M' méret",
                "Géllakk eltávolítás majd építés 'L' méret"],
            artificialOptions: ["Műköröm eltávoltítása manikűrrel",
                "Műköröm eltávolítás, majd géllakk építés",
                "Töltés 'S' méret", "Töltés 'M' méret", "Töltés 'L' méret"],
            decoration: ["Transzferfólia/cukorpor", "Effekt porok", "Inda minta", "Festett/ 3D virágok", "Kövek", "Komplex Diszítés",
                "Realisztikus festés (Állat/Portré stb...", "Nincs díszítés"],
            selectedNail: ' ',
            selectedNAilStyle: ' ',
            selectedDecor: ' ',
            isWarning: false,
        };
        this.handleClickNailType = this.handleClickNailType.bind(this);
        this.handleClickDecor = this.handleClickDecor.bind(this);
    }

    handleClickNailType( value) {
        this.setState({selectedNail: value});
    }
    handleClickDecor( value) {
        this.setState({selectedDecor: value});
    }
    renderNaturalNail(){
        const { classes } = this.props;
        return (
            <CustomDropdown
                // onClick={this.handleClickDay.bind(this)}
                buttonText="Milyen körmöt szeretnél natúr körömre"
                buttonProps={{
                    className: classes.navLink,
                    // color: "rose"
                }}
                dropdownList={this.state.naturalNailOptions}

            />
        );
    }
    renderGelNail(){
        const { classes } = this.props;
        return (
            <CustomDropdown
                // onClick={this.handleClickDay.bind(this)}
                buttonText="Milyen körmöt szeretnél géllakk esetén"
                buttonProps={{
                    className: classes.navLink,
                    // color: "rose"
                }}
                dropdownList={this.state.gelLacOptions}

            />
        );
    }
    renderArtificialNail(){
        const { classes } = this.props;
        return (
            <CustomDropdown
                // onClick={this.handleClickDay.bind(this)}
                buttonText="Milyen körmöt szeretnél műköröm esetén"
                buttonProps={{
                    className: classes.navLink,
                    // color: "rose"
                }}
                dropdownList={this.state.artificialOptions}
            />
        );
    }


    render() {
        const {classes} = this.props;
        let naturalNail;
        if (this.state.selectedNail == "Natúr köröm") {
            naturalNail= this.renderNaturalNail();
        }else if(this.state.selectedNail == "Géllakk van a körmön"){
            naturalNail = this.renderGelNail();
        }else if(this.state.selectedNail == "Műköröm van a körmön"){
            naturalNail = this.renderArtificialNail();
        }
        // let warning;
        // if (this.state.isWarning) {
        //     warning = this.renderAlert();
        // }
        return (
            <div className={classes.sections}>
                <div className={classes.container}>
                    <div className={classes.title}>
                        <br></br>
                        <h3>A szükséges idő kalkulálásához kérlek, add meg az alábbi paramétereket!</h3>
                    </div>
                    <div className={classes.title}>
                        <h3>Választásod: {this.state.selectedNail} {this.state.selectedDecor}</h3>
                    </div>
                    <GridContainer>
                        <GridItem xs={12} sm={6} md={4} lg={3}>
                            <div>
                                <CustomDropdown
                                    onClick={this.handleClickNailType}
                                                buttonText="Köröm állapota"
                                                buttonProps={{
                                                    className: classes.navLink,
                                                    // color: "rose"
                                                }}
                                                dropdownList={this.state.basicNail}

                                />
                            </div>
                            <div>
                                {naturalNail}
                            </div>
                            <div>
                                <CustomDropdown
                                    onClick={this.handleClickDecor}
                                    buttonText="Díszítés"
                                    buttonProps={{
                                        className: classes.navLink,
                                        // color: "rose"
                                    }}
                                    dropdownList={this.state.decoration}

                                />
                            </div>
                            <div id="buttons">
                                <Button id="submitbutton" label="submit" color="rose" round
                                        // onClick={(event) => this.handleError(event)}
                                        // href={this.state.href}
                                    >
                                    Időpont foglalás</Button>
                            </div>
                            <div>
                            {/*{warning}*/}
                            </div>
                        </GridItem>
                    </GridContainer>
                </div>
            </div>
        );
    }
}
export default withStyles(loginStyle)(SectionQuestionnaire);
