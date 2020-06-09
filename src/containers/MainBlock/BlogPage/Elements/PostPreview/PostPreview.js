import React from "react";

import classes from "./PostPreview.module.css"
import Title from "../Title/Title";
import Subtitle from "../Subtitle/Subtitle";

const PostPreview = (props) => {


    return (
        <div className={classes.PostPreview} style={{"text-decoration": "none"}}>
            <a className={classes.Link} href={props.link}>

                <div className={classes.ImageBox}>
                    <img src={props.image} alt={"Post preview"}/>
                </div>
                <div>
                    <Title>{props.title}</Title>
                    {props.subtitle ? <Subtitle>{props.subtitle}</Subtitle> : null}
                </div>

            </a>
        </div>)
};

export default PostPreview;