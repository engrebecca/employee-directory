import React, { useContext } from "react";
import EmployeeContext from "../../utils/employeeContext";
// import "./style.css";

function Directory() {
    const employees = useContext(EmployeeContext);

    // Returns a row for each employee in the employees array which can be updated based on a user set filter or sort
    return (<>
        {employees.map((employee, i) => (
            <div className="container" key={i}>
                <div className="row">
                    <div className="col-2">
                        <img src={employee.image} alt={employee.firstname}></img>
                    </div>
                    <div className="col-2">
                        {employee.firstname}
                    </div>
                    <div className="col-2">
                        {employee.lastname}
                    </div>
                    <div className="col-2">
                        {employee.position}
                    </div>
                    <div className="col-2">
                        {employee.department}
                    </div>
                    <div className="col-2">
                        {employee.email}
                    </div>
                </div>
            </div>
        ))}</>
    );
}

export default Directory;