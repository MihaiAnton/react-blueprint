import React, {Component} from "react";

import appLogo from '../../assets/images/logo.png'
import classes from './Logo.module.css'

class logo extends Component {


    render() {
        return (
            <a href={"/"}>
                <div className={classes.Logo} >
                    <img style={{height: this.props.height}} src={appLogo} alt="logo"/>
                </div>
            </a>
        )
    }
};

export default logo
