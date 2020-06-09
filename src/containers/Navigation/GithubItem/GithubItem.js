import React, {Component} from "react";

import classes from "./GithubItem.module.css"
import githubImg from "../../../assets/icons/githubToolbarIcon.png"
import {DEBUG_MODE, githubApiURL} from "../../../constants";

class GithubItem extends Component {

    state = {
        stars: null,
        stylePos: 1,

        styles: [
            {
                height: '28px',
                width: 'auto',
                animation: 'shake 0.5s',
                'animation-iteration-count': 2,
                'animation-delay': '1s',
            },
            {
                height: '28px',
                width: 'auto',
            }
        ],

    };

    componentDidMount() {
        fetch(githubApiURL, {
            method: 'GET',
        }).then(
            response => response.json()
        ).then(
            response => {
                let stars = 0;
                for(let i in response){
                    stars += response[i]["stargazers_count"]
                }
                this.setState({stars})
            }
        ).catch(
            error => {
                if (DEBUG_MODE) {
                    console.log("Github star fetch error")
                }
            }
        );
        this.playAnimation();


    }


    playAnimation(){
        this.setState({stylePos:0}, ()=>{
            setTimeout(()=>{
                this.setState({stylePos:1}, ()=>{
                    setTimeout(()=>{this.playAnimation()}, 16000+Math.random()*8000)
                })
            }, 3000)
        })
    }


    render() {
        return (
            <div className={classes.GithubItem}>
                <div className={classes.ImageDiv}>
                    <img style={this.state.styles[this.state.stylePos]} src={githubImg} alt={"Github"}/>
                </div>
                <div className={classes.TextDiv}>
                    <p className={classes.GitHubName}>GitHub</p>
                    {this.state.stars ? <p className={classes.Stats}>{this.state.stars} Stars</p> : null}
                </div>
            </div>
        )
    }
}

export default GithubItem;