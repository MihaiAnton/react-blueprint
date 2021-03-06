import React, {Component} from "react";

import classes from "./BlogPage.module.css"
import Title from "./Elements/Title/Title";
import Text from "./Elements/Text/Text";
import Subtitle from "./Elements/Subtitle/Subtitle";
import Image from "./Elements/Image/Image";

import SectionBreak from "./Elements/SectionBreak/SectionBreak";
import PostPreview from "./Elements/PostPreview/PostPreview";

import blogPosts from "../../../userInput/BlogPosts/BlogPosts";
import {WEBSITE_NAME} from "../../../constants";
import List from "./Elements/List/List";
import PostInfo from "./Elements/PostInfo/PostInfo";

class BlogPage extends Component {
    /* Everything here is rendered from userInput/BlogPosts/BlogPosts*/

    componentDidMount() {
        document.title = 'Blog | ' + WEBSITE_NAME;
    }

    getPostPreviews() {

        let postsPreviews = [];

        for (let i in blogPosts) {
            let post = blogPosts[i];
            postsPreviews.push(
                <PostPreview
                    link={"/blog/" + post.path}
                    image={post.previewImage}
                    title={post.title}
                    subtitle={post.subtitle}
                />
            )
        }
        return postsPreviews
    }

    renderPost(content) {
        let post = [];

        for (let i in content) {
            let item = content[i];

            if (item.type === "title") {
                post.push(<Title>{item.content}</Title>);
            }
            else if (item.type === "subtitle") {
                post.push(<Subtitle>{item.content}</Subtitle>);
            }
            else if (item.type === "text") {
                post.push(<Text>{item.content}</Text>);
            }
            else if (item.type === "fullimage") {
                post.push(<Image type="full" src={item.src}/>);
            }
            else if (item.type === "mediumimage") {
                post.push(<Image type="medium" src={item.src}/>);
            }
            else if (item.type === "normalimage") {
                post.push(<Image type="normal" src={item.src}/>);
            }
            else if (item.type === "sectionbreak") {
                post.push(<SectionBreak/>);
            }
            else if (item.type === "numberedlist") {
                post.push(<List numbered content={item.content}/>);
            }
            else if (item.type === "list") {
                post.push(<List content={item.content}/>);
            }
            else if (item.type === "postinfo") {
                post.push(<PostInfo>{item.content}</PostInfo>);
            }



        }

        return post;
    }

    render() {

        if (this.props.post) {
            return (
                <div className={classes.BlogPage}>
                    {this.renderPost(this.props.content)}
                </div>
            )
        } else {
            return (
                <div className={classes.BlogPage}>
                    {this.getPostPreviews()}

                </div>
            )
        }

    }
}

export default BlogPage;