import React, {Component} from "react";
import classes from "./DocsPage.module.css"
import configDoc from "./configDoc";
import {WEBSITE_NAME} from "../../../constants";

class DocsPage extends Component {

    componentDidMount() {
        document.title = 'Docs | ' + WEBSITE_NAME;
    }



    render() {

        let configDocList = [];
        for (let i in configDoc) {
            let conf = configDoc[i];
            configDocList.push(
                <div className={classes.ConfigDocBox}>
                    <h4 className={classes.MacroName}>{conf.key}</h4>
                    <div className={classes.ExplanationBox}>

                        {conf.default ?
                            <div className={classes.InlineBox}>
                                <p className={classes.DefaultConf}>default:</p>
                                <p>{conf.default}</p>
                            </div> : null}

                        {conf.choices ?
                            <div className={classes.InlineBox}>
                                <p className={classes.DefaultConf}>choices:</p>
                                <p>{conf.choices}</p>
                            </div> : null}
                        <div className={classes.InlineBox}>
                            <p>{conf.description}</p>
                        </div>
                    </div>
                </div>
            )
        }


        return (
            <div className={classes.DocsWrapper}>
                <div className={classes.DocsContainer}>
                    <h1>Documentation</h1>
                    <h1>An API documentation template for <a href={"https://github.com/MihaiAnton/AutoML"}>this project</a></h1>

                    <div className={classes.ExplanationBox}>
                        <p>
                            The anon Pipeline, which can be found at this GitHub Link is a fully customizable Automated
                            Machine Learning Package. As also presented in the code chunks on the Main page a Pipeline
                            object has to be initialized
                            with a configuration dictionary, which has to contain at least the train time and the
                            predicted column. The default configuration file
                            is available on github, in the Pipeline
                            package. If fields are missing from the given configuration, the default one will be used
                            for
                            filling the gaps. Below, each configuration
                            field is explained. At the bottom of the page, are the explained Pipeline flows, each with a
                            code example.
                        </p>
                    </div>

                    <h2>Configuration</h2>

                    {configDocList}
                    <div style={{height:"100px"}}></div>
                </div>
            </div>

        );
    }
}

export default DocsPage;