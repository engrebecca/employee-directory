import React, { useEffect, useState } from "react";
import Wrapper from "./components/Wrapper";
// import Navbar from "./components/Navbar";
// import Container from "./components/Container";
import Header from "./components/Header";
import Employees from "./employees.json"
import Directory from "./components/Directory";
import EmployeeContext from "./utils/employeeContext";

function App() {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        setEmployees(Employees)
    }, [employees]);

    // function to sort the employees array to be in alphabetical order by last name

    // function to filter employees array based on employee department

    // function to handle button click to sort employees in alphabetical order

    // function to handle form submit from user to filter directory based on selected department

    return (
        <div>
            {/* <Navbar></Navbar> */}
            <Wrapper>
                <Header></Header>
                {/* Section that renders all employees from employees.json */}
                <EmployeeContext.Provider value={employees}>
                    {employees.map(employee => (
                        <div className="container">
                            <div className="row" id={employee.id}>
                                <div className="col-2">
                                    <img src={employee.image}></img>
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
                    ))}
                    {/* <Directory></Directory> */}
                </EmployeeContext.Provider>
            </Wrapper>
        </div>
    );
}

export default App;