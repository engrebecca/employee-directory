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
    }, []);

    // function to sort the employees array to be grouped by department

    // function to filter employees array based on employee name

    // function to handle form submit from user to sort directory based on selected department

    // function to handle button click to filter employees in alphabetical order


    return (
        <div>
            {/* <Navbar></Navbar> */}
            <Wrapper>
                <Header></Header>
                {/* Section that renders all employees from employees.json */}
                <EmployeeContext.Provider value={employees}>
                    <Directory></Directory>
                </EmployeeContext.Provider>
            </Wrapper>
        </div >
    );
}

export default App;