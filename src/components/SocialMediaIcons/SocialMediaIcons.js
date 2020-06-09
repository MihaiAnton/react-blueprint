import React from "react";

import classes from "./SocialMediaIcons.module.css"

const SocialMediaIcons = (props) => {

    return (
        <div className={classes.Icons}>
            {props.children}
        </div>
    )

};

export default SocialMediaIcons;