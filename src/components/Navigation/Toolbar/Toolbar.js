import React from "react";

import NavigationItems from "../NavigationItems/NavigationItems"
import Logo from "../../Logo/Logo";
import classes from "./Toolbar.module.css"
import InfoBox from "../InfoBox/InfoBox";
import locationPin from "../../../assets/icons/locationPin.png";

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div className={classes.LogoInfoBox}>
            <Logo height="64px"/>
            <div className={classes.InfoBox}>
                <InfoBox>
                    <h2>Website name</h2>
                    <p><img src={locationPin}/>   Cluj-Napoca, Romania</p>
                    <p>Some other info...</p>
                </InfoBox>
            </div>
        </div>
        <nav>
            <NavigationItems/>
        </nav>
    </header>
);

export default toolbar;
