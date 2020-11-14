import React from "react";
import "./style.css";

function Container(props) {
    // Container to hold all the rendered employees
    return <div className="form-format">{props.children}</div>;
}

export default Container;
