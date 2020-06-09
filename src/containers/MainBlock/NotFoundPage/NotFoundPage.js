import React, {Component} from "react";

import classes from "./NotFoundPage.module.css"
import Subtitle from "../BlogPage/Elements/Subtitle/Subtitle";
import Image from "../BlogPage/Elements/Image/Image";

import sunset from "../../../assets/images/sunset.jpg"
import {WEBSITE_NAME} from "../../../constants";

class NotFoundPage extends Component {

    componentDidMount() {
        document.title = 'Not found';
    }



    render() {
        return (
            <div className={classes.NotFoundPage}>
                <Subtitle>The page you are looking for could not be found</Subtitle>
                <Image type="full" src={sunset}/>
            </div>
        )
    }
}

export default NotFoundPage;