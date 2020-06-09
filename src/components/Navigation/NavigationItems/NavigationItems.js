import React from "react";

import NavigationItem from "./NavigationItem/NavigationItem";
import classes from "./NavigationItems.module.css"
import GithubItem from "../../../containers/Navigation/GithubItem/GithubItem";

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/blog">Blog</NavigationItem>
        <NavigationItem link="/docs">Docs</NavigationItem>
        <NavigationItem link="/blank">Blank</NavigationItem>
        <NavigationItem link="/some-not-existing-url">404</NavigationItem>
        <NavigationItem link={"https://github.com/MihaiAnton"}>
            <GithubItem/>
        </NavigationItem>
    </ul>
);

export default navigationItems;