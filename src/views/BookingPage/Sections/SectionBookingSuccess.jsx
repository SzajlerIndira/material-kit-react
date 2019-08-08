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

import confirmation from "assets/img/confirmation.png";

class SectionNotifications extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.section} id="notifications">
                <SnackbarContent
                    message={
                        <span>
              <b>Időpontodat sikeresen mentettük!</b><br/> Kérlek nézd meg az emailjeidet, és igazold vissza foglalásod.
                            <br/>
                            <img src={confirmation} width="250"/>
            </span>
                    }
                    close
                    color="success"
                    icon={Check}
                />
                <Clearfix />
            </div>
        );
    }
}

export default withStyles(notificationsStyles)(SectionNotifications);
