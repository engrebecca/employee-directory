import React from "react";
import "./style.css";

function Container(props) {
    // Container to hold all the rendered album images
    return <main className="container">{props.children}</main>;
}

export default Container;
