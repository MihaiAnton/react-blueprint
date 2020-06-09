import React from "react";

import classes from "./InfoBox.module.css"

const InfoBox = (props) => {
    return (
        <div className={classes.InfoBox}>
            {props.children}
        </div>
    )
};

export default InfoBox;