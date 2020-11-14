import React from "react";
import "./style.css";

function Header() {
    // Header for all the information fields of the employee directory
    return (
        <div className="container">
            <div className="row">
                <div className="col-2 header-format">
                    Photo
                </div>
                <div className="col-2 header-format">
                    First Name
                </div>
                <div className="col-2 header-format">
                    Last Name
                </div>
                <div className="col-2 header-format">
                    Position
                </div>
                <div className="col-2 header-format">
                    Department
                </div>
                <div className="col-2 header-format">
                    Email
                </div>
            </div>
        </div>
    );
}

export default Header;