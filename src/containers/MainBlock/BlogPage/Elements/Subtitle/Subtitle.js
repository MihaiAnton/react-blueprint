import React from "react";

import classes from "./Subtitle.module.css"

const Subtitle = (props) => {
    return (
        <div className={classes.Subtitle}>
            <h4>{props.children}</h4>
        </div>
    )
};

export default Subtitle;