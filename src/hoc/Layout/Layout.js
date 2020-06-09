import React, {Component} from "react";

import Footer from "../../components/Footer/Footer";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import classes from "./Layout.module.css"
import SideNavigation from "../../components/Navigation/SideNavigation/SideNavigation";

class Layout extends Component {

    render() {
        return (
            <div className={classes.LayoutBox}>

                    <Toolbar/>
                    <SideNavigation/>

                    <main className={classes.ContentBox}>
                        {this.props.children}
                    </main>

                    <div className={classes.FooterBox}>
                        <Footer text="June 2020"/>
                    </div>

            </div>
        )
    }
}

export default Layout;
