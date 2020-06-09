import React from "react";

import classes from "./Title.module.css"

const Title = (props) => {
    return (
        <div className={classes.Title}>
            <h2>{props.children}</h2>
        </div>
    )
};

export default Title;