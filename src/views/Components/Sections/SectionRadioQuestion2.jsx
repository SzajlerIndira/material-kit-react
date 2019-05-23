import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
// @material-ui/icons
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import basicsStyle from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.jsx";

class SectionRadioQuestion2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedEnabled: "d",
            id : 2,

        };
        this.handleChangeEnabled = this.handleChangeEnabled.bind(this);
    }

    handleChangeEnabled(event) {
        this.setState({ selectedEnabled: event.target.value }, this.saveAnswer);
    }

    saveAnswer(){
        this.props.saveRadioAnswer2(this.state.id, this.state.selectedEnabled);
    }

    render() {
        const {classes} = this.props;
        return (
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
                                        checked={this.state.selectedEnabled === "d"}
                                        onChange={this.handleChangeEnabled}
                                        value="d"
                                        name="radio button enabled"
                                        aria-label="D"
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
                                        checked={this.state.selectedEnabled === "e"}
                                        onChange={this.handleChangeEnabled}
                                        value="e"
                                        name="radio button enabled"
                                        aria-label="E"
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
                                label="ovális"
                            />
                        </div>
                    </GridItem>
                </GridContainer>
        );
    }
}

export default withStyles(basicsStyle)(SectionRadioQuestion2);
