import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";


import questionnaireStyle from "assets/jss/material-kit-react/views/componentsSections/questionnaireStyle.jsx";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import SectionWarningNotification from "views/Components/Sections/SectionWarningNotification.jsx";


class SectionQuestionnaire extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            basicNail: ["Natúr köröm", "Géllakk van a körmön", "Műköröm van a körmön"],
            naturalNailOptions: ["Géllakk", "Géllakk megerősítéssel", "Műköröm S méret", "Műköröm M méret",
                "Műköröm L méret"],
            gelLacOptions: ["Géllakk eltávolítása manikűrrel", "Géllakkcsere", "Megerősített géllakk csere",
                "Géllakk eltávolítás majd építés S méret", "Géllakk eltávolítás majd építés M méret",
                "Géllakk eltávolítás majd építés L méret", "Egy köröm javítása"],
            artificialOptions: ["Műköröm eltávoltítása manikűrrel",
                "Műköröm eltávolítás majd géllakk ",
                "Töltés S méret", "Töltés M méret", "Töltés L méret", "Egy köröm javítása"],
            decoration: ["Transzferfólia vagy cukorpor", "Effekt porok", "Inda minta", "Festett 3D virágok", "Kövek", "Komplex Díszítés",
                "Realisztikus festés", "Nincs díszítés"],
            selectedNail: ' ',
            selectedNailStyle: ' ',
            selectedDecor: ' ',
            href: "#nail",
            isWarning: false,
            freeSlots:{},
            buttonTextNailType:'Köröm állapota',
            buttonTextDecor:'Díszítés',
            buttonTextNatural:'Milyen körmöt szeretnél natúr körömre',
            buttonTextGel:'Milyen körmöt szeretnél géllakk esetén',
            buttonTextArtificial:'Milyen körmöt szeretnél műköröm esetén',
        };
        this.handleClickNailType = this.handleClickNailType.bind(this);
        this.handleClickDecor = this.handleClickDecor.bind(this);
        this.handleClickNailStyle = this.handleClickNailStyle.bind(this);
    }

    handleClickNailType( value) {
        this.setState({selectedNail: value});
        this.setState({buttonTextNailType:value});
        this.setState({buttonTextNatural:'Milyen körmöt szeretnél natúr körömre',
            buttonTextGel:'Milyen körmöt szeretnél géllakk esetén',
            buttonTextArtificial:'Milyen körmöt szeretnél műköröm esetén',});
        this.setState({selectedNailStyle:' '});
    }
    handleClickDecor( value) {
        this.setState({selectedDecor: value});
        this.setState({buttonTextDecor:value});
        this.setState({isWarning: false});
    }
    handleClickNailStyle (value){
        this.setState({selectedNailStyle: value});
        this.setState({buttonTextDecor:'Díszítés',selectedDecor: ' ',});
    }
    handleOnchangeNatural(value){
        this.setState({buttonTextNatural:value})
    }
    handleOnchangeGel(value){
        this.setState({buttonTextGel:value})
    }
    handleOnchangeArtificial(value){
        this.setState({buttonTextArtificial:value})
    }

    renderNaturalNail(){
        const { classes } = this.props;
        return (
            <CustomDropdown
                onClick={(e) => {this.handleClickNailStyle(e); this.handleOnchangeNatural(e);}}
                buttonText={this.state.buttonTextNatural}
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
                onClick={(e) => {this.handleClickNailStyle(e); this.handleOnchangeGel(e);}}
                buttonText={this.state.buttonTextGel}
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
                onClick={(e) => {this.handleClickNailStyle(e); this.handleOnchangeArtificial(e);}}
                buttonText={this.state.buttonTextArtificial}
                buttonProps={{
                    className: classes.navLink,
                    // color: "rose"
                }}
                dropdownList={this.state.artificialOptions}
            />
        );
    }
    renderDecor(){
        const { classes } = this.props;
        return (
            <CustomDropdown
                onClick={this.handleClickDecor}
                buttonText={this.state.buttonTextDecor}
                buttonProps={{
                    className: classes.navLink,
                    // color: "rose"
                }}
                dropdownList={this.state.decoration}

            />
        );
    }
    saveFreeSlots(){
        this.props.saveFreeSlots(this.state.freeSlots);
    }
    handleError(event){
        this.state.isWarning = false;
        if (this.state.selectedNail =='' || this.state.selectedNailStyle ==' ' || this.state.selectedDecor == ' ') {
            this.setState({isWarning: true})
        }else {
            this.handleClick();
        }
    }
    handleClick(){

        const payload = JSON.stringify({
            nailStyle: this.state.selectedNailStyle,
            decoration: this.state.selectedDecor
        });

        fetch('http://localhost:8080', {
            method: 'POST', // or 'PUT'
            mode: 'cors',
            body: payload, // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(response =>  this.setState({
                freeSlots:response
            },this.saveFreeSlots))
            .then(response => console.log('Success:',response, this.state.freeSlots))
            .catch(error => console.error('Error:', error))


        this.setState({"href": '#personal'});
        this.setState({selectedNail: ' ',selectedNailStyle: ' ',
            selectedDecor: ' ',});
    }
    renderAlert(){
        return(
            <div>
                <SectionWarningNotification/>
            </div>
        );
    }

    render() {
        const {classes} = this.props;
        let naturalNail;
        if (this.state.selectedNail === "Natúr köröm") {
            naturalNail= this.renderNaturalNail();
        }else if(this.state.selectedNail ==="Géllakk van a körmön"){
            naturalNail = this.renderGelNail();
        }else if(this.state.selectedNail === "Műköröm van a körmön"){
            naturalNail = this.renderArtificialNail();
        }
        let decor;
        if(this.state.selectedNail !== " " && this.state.selectedNailStyle !== " "){
            decor = this.renderDecor();
        }

        let warning;
        if (this.state.isWarning) {
            warning = this.renderAlert();
        }
        return (
            <div className={classes.sections}>
                <div className={classes.container}>
                    <div className={classes.title}>
                        <br></br>
                        <h3>A szükséges idő kalkulálásához kérlek, add meg az alábbi paramétereket!</h3>
                    </div>

                    <GridContainer>
                        <GridItem xs={12} sm={6} md={4} lg={3}>
                            <div>
                                <CustomDropdown
                                    onClick={this.handleClickNailType}
                                                buttonText= {this.state.buttonTextNailType}
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
                                {decor}
                            </div>
                        </GridItem>
                    </GridContainer>
                    <div id="buttons">
                        <Button id="submitbutton" label="submit" color="rose" round
                                onClick={(event) => this.handleError(event)}
                                href={this.state.href}
                            >
                            Időpont foglalás</Button>
                    </div>
                    <div>
                        {warning}
                    </div>
                </div>
            </div>
        );
    }
}
export default withStyles(questionnaireStyle)(SectionQuestionnaire);
