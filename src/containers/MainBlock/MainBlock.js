import React, {Component} from "react";
import {Route, Switch} from 'react-router-dom'

import HomePage from "./HomePage/HomePage"
import BlankPage from "./BlankPage/BlankPage";
import DocsPage from "./DocsPage/DocsPage";

import classes from "./MainBlock.module.css"
import BlogPage from "./BlogPage/BlogPage";

import blogPosts from "../../userInput/BlogPosts/BlogPosts"
import NotFoundPage from "./NotFoundPage/NotFoundPage";
import {WEBSITE_NAME} from "../../constants";


class MainBlock extends Component{



    render() {

        const blogPostSwitches = blogPosts.map((post)=>{
           return <Route path={"/blog/"+post.path} component={()=><BlogPage post content={post.content}/>}/>
        });



        return (
            <div className={classes.MainBlock}>
                <Switch>
                    {blogPostSwitches}

                    <Route path="/" exact component={HomePage}/>
                    <Route path="/blog" component={BlogPage}/>
                    <Route path="/blank" component={BlankPage}/>
                    <Route path="/docs" component={DocsPage}/>

                    <Route component={NotFoundPage}/>
                </Switch>
            </div>
        )
    }
}

export default MainBlock;
