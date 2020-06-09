import React from "react";

import classes from "./Text.module.css"

const Text = (props) => {
    return (
        <div className={classes.Text}>
            <p>{props.children}</p>
        </div>
    )
};

export default Text;