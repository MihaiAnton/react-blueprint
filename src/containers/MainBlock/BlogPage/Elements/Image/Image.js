import React from "react";

import classes from "./Image.module.css"

const FullWidthImage = (props) => {
    return (
        <div className={classes.FullImage}>
            <img src={props.src} alt={"Blog image"}/>
        </div>
    )
};

const MediumWidthImage = (props) => {
    return (
        <div className={classes.MediumImage}>
            <img src={props.src} alt={"Blog image"}/>
        </div>
    )
};

const NormalWidthImage = (props) => {
    return (
        <div className={classes.NormalImage}>
            <img src={props.src} alt={"Blog image"}/>
        </div>
    )
};

const Image = (props) => {

    if (props.type === "full") {
        return (
            <div  className={classes.Image}>
                <FullWidthImage src={props.src}/>
            </div>
        )
    } else if (props.type === "medium") {
        return <div className={classes.Image}>
            <MediumWidthImage src={props.src}/>
        </div>
    } else {
        return <div className={classes.Image}>
            <NormalWidthImage src={props.src}/>
        </div>
    }

};

export default Image;



