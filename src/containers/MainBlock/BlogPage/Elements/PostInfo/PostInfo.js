import React from "react";

import classes from "./PostInfo.module.css"

const PostInfo = (props) => {
    return (
        <div className={classes.PostInfo}>
            <h6>{props.children}</h6>
        </div>
    )
};

export default PostInfo;