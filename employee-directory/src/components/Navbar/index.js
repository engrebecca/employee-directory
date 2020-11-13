import React from "react";
import "./style.css";

function Navbar(props) {
    return <nav className="navbar fixed-top">
        {/* Spans that take in props for title, score, and high score based on state */}
        <span class="navbar-brand mb-0 h1">{props.title}</span>
        <span class="navbar-brand mb-0 h1">{props.message}</span>
        <span class="navbar-brand mb-0 h1">Score: {props.score} Top Score: {props.highScore}</span>
    </nav>;
}

export default Navbar;
