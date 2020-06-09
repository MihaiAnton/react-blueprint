import React from "react";


import Logo from "../../Logo/Logo"
import NavigationItems from "../NavigationItems/NavigationItems"

import classes from "./SideNavigation.module.css"
import InfoBox from "../InfoBox/InfoBox";
import facebook from "../../../assets/icons/facebook.png";
import linkedin from "../../../assets/icons/linkedin.png";
import github from "../../../assets/icons/github.png";
import locationPin from "../../../assets/icons/locationPin.png"
import SocialMediaIcons from "../../SocialMediaIcons/SocialMediaIcons";
import Icon from "../../SocialMediaIcons/Icon/Icon";


const SideNavigation = (props) => {
    return (
        <div className={classes.SideNavigation}>
            <div className={classes.LogoBox}>
                <Logo height="128px"/>
            </div>
            <div className={classes.InfoBox}>
                <InfoBox>
                    <h3>Website name</h3>
                    <p><img src={locationPin}/>    Cluj-Napoca, Romania</p>
                    <p>Some other info...</p>
                </InfoBox>
            </div>
            <div className={classes.SocialMediaIconsBox}>
                <SocialMediaIcons>
                    <Icon img={facebook} link={"https://www.facebook.com/mihai.anton4"}/>
                    <Icon img={linkedin} link={"https://www.linkedin.com/in/mihaianton98/"}/>
                    <Icon img={github} link={"https://github.com/MihaiAnton"}/>
                </SocialMediaIcons>
            </div>

            <nav>
                <NavigationItems/>
            </nav>
        </div>
    )
};

export default SideNavigation;