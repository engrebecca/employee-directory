import React from "react";
// import "./style.css";

function Header() {
    // Header for all the information fields of the employee directory
    return (
        <div className="container">
            <div className="row">
                <div className="col-2">
                    Photo
                </div>
                <div className="col-2">
                    First Name
                </div>
                <div className="col-2">
                    Last Name
                </div>
                <div className="col-2">
                    Position
                </div>
                <div className="col-2">
                    Department
                </div>
                <div className="col-2">
                    Email
                </div>
            </div>
        </div>
    );
}

export default Header;