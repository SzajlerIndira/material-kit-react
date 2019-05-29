import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "components/CustomButtons/Button.jsx";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
// @material-ui/icons
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import basicsStyle from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.jsx";


class SectionOrder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nailType: " ",
            shape: " ",
            decoration: " ",
            href: "#nail",
        };
        this.handleChangeEnabled = this.handleChangeEnabled.bind(this);

    }
    handleChangeEnabled(event) {
        this.setState({[event.target.name]: event.target.value});

    }

    handleError(event){
        if (this.state.nailType ==" "||this.state.shape== " " || this.state.decoration==" " ) {
            alert("Kérlek, adj meg minden paramétert!");
        }else {
            this.handleClick();
        }
    }

    handleClick(event){

        const payload = JSON.stringify({
            nailType: this.state.nailType,
            shape: this.state.shape,
            decoration: this.state.decoration
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
            .then(response => console.log('Success:', response))
            .catch(error => console.error('Error:', error))

        this.setState({"href": '#personal'});
       // document.getElementById("submitbutton").href = '#section1';

    }
    render()
    {
        const {classes} = this.props;
        return (
            <div className={classes.sections}>
                <div className={classes.container}>
                    <div className={classes.title}>
                        <h3>A szükséges idő kalkulálásához kérlek, add meg az alábbi paramétereket!</h3>
                    </div>
                    <GridContainer>
                        <GridItem xs={12} sm={6} md={4} lg={3}>
                            <div className={classes.title}>
                                <h3>Válassz típust!:</h3>
                            </div>
                            <div
                                className={
                                    classes.checkboxAndRadio +
                                    " " +
                                    classes.checkboxAndRadioHorizontal
                                }
                            >
                                <FormControlLabel
                                    control={
                                        <Radio
                                            checked={this.state.nailType === "FILLING"}
                                            onChange={this.handleChangeEnabled}
                                            value="FILLING"
                                            name="nailType"
                                            aria-label="FILLING"
                                            icon={
                                                <FiberManualRecord
                                                    className={classes.radioUnchecked}
                                                />
                                            }
                                            checkedIcon={
                                                <FiberManualRecord className={classes.radioChecked}/>
                                            }
                                            classes={{
                                                checked: classes.radio
                                            }}
                                        />
                                    }
                                    classes={{
                                        label: classes.label
                                    }}
                                    label="Töltés"
                                />
                            </div>
                            <div
                                className={
                                    classes.checkboxAndRadio +
                                    " " +
                                    classes.checkboxAndRadioHorizontal
                                }
                            >
                                <FormControlLabel
                                    control={
                                        <Radio
                                            checked={this.state.nailType === "REMOVING"}
                                            onChange={this.handleChangeEnabled}
                                            value="REMOVING"
                                            name="nailType"
                                            aria-label="REMOVING"
                                            icon={
                                                <FiberManualRecord
                                                    className={classes.radioUnchecked}
                                                />
                                            }
                                            checkedIcon={
                                                <FiberManualRecord className={classes.radioChecked}/>
                                            }
                                            classes={{
                                                checked: classes.radio
                                            }}
                                        />
                                    }
                                    classes={{
                                        label: classes.label
                                    }}
                                    label="Levétel"
                                />
                            </div>
                            <div
                                className={
                                    classes.checkboxAndRadio +
                                    " " +
                                    classes.checkboxAndRadioHorizontal
                                }
                            >
                                <FormControlLabel
                                    control={
                                        <Radio
                                            checked={this.state.nailType === "BUILDING"}
                                            onChange={this.handleChangeEnabled}
                                            value="BUILDING"
                                            name="nailType"
                                            aria-label="BUILDING"
                                            icon={
                                                <FiberManualRecord
                                                    className={classes.radioUnchecked}
                                                />
                                            }
                                            checkedIcon={
                                                <FiberManualRecord className={classes.radioChecked}/>
                                            }
                                            classes={{
                                                checked: classes.radio
                                            }}
                                        />
                                    }
                                    classes={{
                                        label: classes.label
                                    }}
                                    label="Építés"
                                />
                            </div>
                        </GridItem>
                    </GridContainer>

                    <GridContainer>
                        <GridItem xs={12} sm={6} md={4} lg={3}>
                            <div className={classes.title}>
                                <h3>Válassz formát</h3>
                            </div>
                            <div
                                className={
                                    classes.checkboxAndRadio +
                                    " " +
                                    classes.checkboxAndRadioHorizontal
                                }
                            >
                                <FormControlLabel
                                    control={
                                        <Radio
                                            checked={this.state.shape === "SQUARE"}
                                            onChange={this.handleChangeEnabled}
                                            value="SQUARE"
                                            name="shape"
                                            aria-label="SQUARE"
                                            icon={
                                                <FiberManualRecord
                                                    className={classes.radioUnchecked}
                                                />
                                            }
                                            checkedIcon={
                                                <FiberManualRecord className={classes.radioChecked}/>
                                            }
                                            classes={{
                                                checked: classes.radio
                                            }}
                                        />
                                    }
                                    classes={{
                                        label: classes.label
                                    }}
                                    label="szögletes"
                                />
                            </div>
                            <div
                                className={
                                    classes.checkboxAndRadio +
                                    " " +
                                    classes.checkboxAndRadioHorizontal
                                }
                            >
                                <FormControlLabel
                                    control={
                                        <Radio
                                            checked={this.state.shape === "ROUND"}
                                            onChange={this.handleChangeEnabled}
                                            value="ROUND"
                                            name="shape"
                                            aria-label="ROUND"
                                            icon={
                                                <FiberManualRecord
                                                    className={classes.radioUnchecked}
                                                />
                                            }
                                            checkedIcon={
                                                <FiberManualRecord className={classes.radioChecked}/>
                                            }
                                            classes={{
                                                checked: classes.radio
                                            }}
                                        />
                                    }
                                    classes={{
                                        label: classes.label
                                    }}
                                    label="KEREK"
                                />
                            </div>
                        </GridItem>
                    </GridContainer>
                    <GridContainer>
                        <GridItem xs={12} sm={6} md={4} lg={3}>
                            <div className={classes.title}>
                                <h3>Díszítést kérsz?</h3>
                            </div>
                            <div
                                className={
                                    classes.checkboxAndRadio +
                                    " " +
                                    classes.checkboxAndRadioHorizontal
                                }
                            >
                                <FormControlLabel
                                    control={
                                        <Radio
                                            checked={this.state.decoration === "YES"}
                                            onChange={this.handleChangeEnabled}
                                            value="YES"
                                            name="decoration"
                                            aria-label="YES"
                                            icon={
                                                <FiberManualRecord
                                                    className={classes.radioUnchecked}
                                                />
                                            }
                                            checkedIcon={
                                                <FiberManualRecord className={classes.radioChecked}/>
                                            }
                                            classes={{
                                                checked: classes.radio
                                            }}
                                        />
                                    }
                                    classes={{
                                        label: classes.label
                                    }}
                                    label="Igen"
                                />
                            </div>
                            <div
                                className={
                                    classes.checkboxAndRadio +
                                    " " +
                                    classes.checkboxAndRadioHorizontal
                                }
                            >
                                <FormControlLabel
                                    control={
                                        <Radio
                                            checked={this.state.decoration === "NO"}
                                            onChange={this.handleChangeEnabled}
                                            value="NO"
                                            name="decoration"
                                            aria-label="NO"
                                            icon={
                                                <FiberManualRecord
                                                    className={classes.radioUnchecked}
                                                />
                                            }
                                            checkedIcon={
                                                <FiberManualRecord className={classes.radioChecked}/>
                                            }
                                            classes={{
                                                checked: classes.radio
                                            }}
                                        />
                                    }
                                    classes={{
                                        label: classes.label
                                    }}
                                    label="Nem"
                                />
                            </div>
                        </GridItem>
                    </GridContainer>
                    <div id="buttons">
                        <Button  id= "submitbutton" label="submit" color="rose" round onClick={(event) =>this.handleError(event)}
                                href={this.state.href} >
                            Időpont foglalás</Button>
                    </div>
                </div>
            </div>
        );
    }
}
export default withStyles(basicsStyle)(SectionOrder);
