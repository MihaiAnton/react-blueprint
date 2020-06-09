import React, {Component} from "react";

import classes from "../../containers/MainBlock/NotFoundPage/NotFoundPage.module.css"
import Subtitle from "../../containers/MainBlock/BlogPage/Elements/Subtitle/Subtitle";
import Image from "../../containers/MainBlock/BlogPage/Elements/Image/Image";

import sunset from "../../assets/images/sunset.jpg"

class NotFoundPage extends Component {


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