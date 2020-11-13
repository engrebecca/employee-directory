import React from "react";
import "./style.css";

function albumImg({ name, image, ...props }) {
    console.log(props)
    return (
        // Image rendered for each album
        <img src={image} alt={name} {...props} className="img-thumbnail"></img>
    );
}

export default albumImg;
