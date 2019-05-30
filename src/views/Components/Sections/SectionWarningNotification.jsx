import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Warning from "@material-ui/icons/Warning";
// core components
import SnackbarContent from "components/Snackbar/SnackbarContent.jsx";
import Clearfix from "components/Clearfix/Clearfix.jsx";
import notificationsStyles from "assets/jss/material-kit-react/views/componentsSections/notificationsStyles.jsx";

class SectionWarningNotification extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.section} id="notifications">
                <div className={classes.container}>

                <SnackbarContent
                    message={
                        <span>
              <b>HIÁNYOS ADATLAP</b> Kérlek, adj meg minden paramétert!
            </span>
                    }

                    color="warning"
                    icon={Warning}
                />
                <Clearfix />
            </div>
            </div>
        );
    }
}

export default withStyles(notificationsStyles)(SectionWarningNotification);
