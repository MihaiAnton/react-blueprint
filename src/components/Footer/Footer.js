import React from "react";

import SocialMediaIcons from "../SocialMediaIcons/SocialMediaIcons";
import Icon from "../SocialMediaIcons/Icon/Icon";
import classes from "./Footer.module.css"

import facebook from "../../assets/icons/facebook.png"
import linkedin from "../../assets/icons/linkedin.png"
import github from "../../assets/icons/github.png"

const Footer = (props) => (
    <div className={classes.Footer}>
           <p>{props.text}</p>
            <SocialMediaIcons>
                <Icon img={facebook} link={"https://www.facebook.com/mihai.anton4"}/>
                <Icon img={linkedin} link={"https://www.linkedin.com/in/mihaianton98/"}/>
                <Icon img={github} link={"https://github.com/MihaiAnton"}/>
            </SocialMediaIcons>
    </div>
);


export default Footer;