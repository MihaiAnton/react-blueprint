import React from "react";

import classes from "./Icon.module.css"

const Icon = (props) => {

    return (
        <div className={classes.Icon}>
            <a href={props.link}><img src={props.img} alt={"icon"}/></a>
        </div>
    )
};

export default Icon;