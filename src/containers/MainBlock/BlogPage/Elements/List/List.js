import React from "react";

import classes from "./List.module.css"

const List = (props) => {
    return (
        <div className={classes.List}>
            {props.numbered ?
                <ol>
                    {props.content.map(item=>{return (<li><p>{item}</p></li>)})}
                </ol>
                :
                <ul>
                    {props.content.map(item=>{return (<li><p>{item}</p></li>)})}
                </ul>
            }
        </div>
    )
};

export default List;