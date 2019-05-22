import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "components/CustomButtons/Button.jsx";
import basicsStyle from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.jsx";
import SectionRadioQuestion1 from "./SectionRadioQuestion1";
import SectionRadioQuestion2 from "./SectionRadioQuestion2";
import SectionRadioQuestion3 from "./SectionRadioQuestion3";

class SectionOrder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            answers : [],
        };

    }
    saveRadioAnswer(id, answer){
        let answers = [...this.state.answers];   //creating the copy
            answers[id-1] = answer
        this.setState({answers: answers});
    }

    handleClick(event) {

        const payload =JSON.stringify({"answers": this.state.answers});

        fetch('http://localhost:8080', {
            method: 'POST', // or 'PUT'
            mode: 'cors',
            body: payload, // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(response => console.log('Success:', response))
            .catch(error => console.error('Error:', error));
    }


    render() {
        const {classes} = this.props;
        return (
            <div className={classes.sections}>
                <div className={classes.container}>
                    <div className={classes.title}>
                        <h3>A szükséges idő kalkulálásához kérlek, add meg az alábbi paramétereket!</h3>
                    </div>
                    <SectionRadioQuestion1 saveRadioAnswer1= {this.saveRadioAnswer.bind(this)} />
                    <SectionRadioQuestion2 saveRadioAnswer2= {this.saveRadioAnswer.bind(this)}/>
                    <SectionRadioQuestion3 saveRadioAnswer3= {this.saveRadioAnswer.bind(this)}/>
                    <br></br>
                    <div id="buttons"  >
                        <Button label="submit" color="rose" round onClick={(event) =>  this.handleClick(event)}>Időpont foglalás</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(basicsStyle)(SectionOrder);
