import React, {Component} from "react";

import classes from "./BlankPage.module.css"
import {WEBSITE_NAME} from "../../../constants";

class BlankPage extends Component {

    componentDidMount() {
        document.title = 'Blank | ' + WEBSITE_NAME;
    }


    render() {
        return (
            <div className={classes.BlankPage}>


            </div>
        )
    }
}

export default BlankPage;