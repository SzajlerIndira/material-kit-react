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

class SectionRadioQuestion1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedEnabled: "a",
            id : 1,

        };
        this.handleChangeEnabled = this.handleChangeEnabled.bind(this);

    }

    handleChangeEnabled(event) {
        this.setState({ selectedEnabled: event.target.value }, this.saveAnswer);

    }

    saveAnswer(){
        this.props.saveRadioAnswer1(this.state.id,this.state.selectedEnabled);
    }

    render() {
        const {classes} = this.props;
        return (
                    <GridContainer >
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
                                            checked={this.state.selectedEnabled === "a"}
                                            onChange={this.handleChangeEnabled}
                                            value="a"
                                            name="radio button enabled"
                                            aria-label="A"
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
                                            checked={this.state.selectedEnabled === "b"}
                                            onChange={this.handleChangeEnabled}
                                            value="b"
                                            name="radio button enabled"
                                            aria-label="B"
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
                                            checked={this.state.selectedEnabled === "c"}
                                            onChange={this.handleChangeEnabled}
                                            value="c"
                                            name="radio button enabled"
                                            aria-label="C"
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

        );
    }
}

export default withStyles(basicsStyle)(SectionRadioQuestion1);
