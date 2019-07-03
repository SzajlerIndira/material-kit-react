/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function HeaderLinks({ ...props }) {
    const {classes} = props;
    return (
        <List className={classes.list}>
            <ListItem className={classes.listItem}>
                <CustomDropdown
                    noLiPadding
                    buttonText="Menü"
                    buttonProps={{
                        className: classes.navLink,
                        color: "transparent"
                    }}
                    buttonIcon={Apps}
                    dropdownList={[
                        <Link to={{ pathname: '/gallery' }} className={classes.dropdownLink} target="_blank">
                            Galéria
                        </Link>,
                        <a
                            // href="https://creativetimofficial.github.io/material-kit-react/#/documentation"
                            // target="_blank"
                            className={classes.dropdownLink}
                        >
                            Rólam
                        </a>
                    ]}
                />
            </ListItem>
            <ListItem className={classes.listItem}>
                <Tooltip
                    id="instagram-facebook"
                    title="Kövess facebookon is"
                    placement={window.innerWidth > 959 ? "top" : "left"}
                    classes={{tooltip: classes.tooltip}}
                >
                    <Button
                        color="transparent"
                        href="https://www.facebook.com/nailsbymaca/"
                        target="_blank"
                        className={classes.navLink}
                    >
                        <i className={classes.socialIcons + " fab fa-facebook"}/>
                    </Button>
                </Tooltip>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Tooltip
                    id="instagram-tooltip"
                    title="Kövess instagramon is"
                    placement={window.innerWidth > 959 ? "top" : "left"}
                    classes={{tooltip: classes.tooltip}}
                >
                    <Button
                        color="transparent"
                        href="https://www.instagram.com/macanailart/?hl=hu"
                        target="_blank"
                        className={classes.navLink}
                    >
                        <i className={classes.socialIcons + " fab fa-instagram"}/>
                    </Button>
                </Tooltip>
            </ListItem>
        </List>
    );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
