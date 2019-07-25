import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Check from "@material-ui/icons/Check";
import Warning from "@material-ui/icons/Warning";
// core components
import SnackbarContent from "components/Snackbar/SnackbarContent.jsx";
import Clearfix from "components/Clearfix/Clearfix.jsx";
import notificationsStyles from "assets/jss/material-kit-react/views/componentsSections/notificationsStyles.jsx";

class SectionNotifications extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.section} id="notifications">
                <SnackbarContent
                    message={
                        <span>
              <b>HOPPÁ!</b><br/> Valaki gyorsabb volt nálad, kérlek válassz másik időpontot.
            </span>
                    }
                    close
                    color="danger"
                    icon="info_outline"
                />
                <Clearfix />
            </div>
        );
    }
}

export default withStyles(notificationsStyles)(SectionNotifications);
