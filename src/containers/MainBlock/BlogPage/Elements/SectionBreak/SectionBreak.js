import React from "react";

import classes from "./SectionBreak.module.css"

import dots from "../../../../../assets/icons/sectionBreak.png"

const SectionBreak = (props) => {
    return (
        <div className={classes.SectionBreak}>
            <img src={dots} alt={"Section break"}/>
        </div>
    )
};

export default SectionBreak;