import React, {Component} from "react";

import classes from "./HomePage.module.css"
import InfoBox from "../../../components/Navigation/InfoBox/InfoBox";
import Text from "../BlogPage/Elements/Text/Text";
import Title from "../BlogPage/Elements/Title/Title";
import Subtitle from "../BlogPage/Elements/Subtitle/Subtitle";
import SectionBreak from "../BlogPage/Elements/SectionBreak/SectionBreak";
import Image from "../BlogPage/Elements/Image/Image";
import {WEBSITE_NAME} from "../../../constants";

class HomePage extends Component {

    componentDidMount() {
        document.title = 'Home | ' + WEBSITE_NAME;
    }


    render() {
        return (
            <div className={classes.HomePage}>
                <Title>Home page</Title>
                <Subtitle>React app template</Subtitle>
                <Text>This is a general purpose React template, including Routing, custom components and some other elements.</Text>
                <SectionBreak/>
                <Text>Feel free to fork and modify as you need.</Text>

                <Image type="full" src={"https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"}/>
            </div>
        )
    }
}

export default HomePage;