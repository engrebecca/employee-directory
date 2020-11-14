import React, { useEffect, useState } from "react";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
// import Container from "./components/Container";
import Header from "./components/Header";
import Employees from "./employees.json"
import Directory from "./components/Directory";
import EmployeeContext from "./utils/employeeContext";

// Array that holds all the field names of the employee directory, to reference for filtering and sorting
const fields = [{ key: "firstname", text: "First Name" }, { key: "lastname", text: "Last Name" }, { key: "position", text: "Position" }, { key: "department", text: "Department" }, { key: "email", text: "Email" }]

function App() {
    // Setting useState hook for employees array, filter, sort field, and sort order
    // Enables one to keep track of the current state and update state for each of these
    const [employees, setEmployees] = useState([]);
    const [filter, setFilter] = useState("")
    const [fieldToSortBy, setFieldToSortBy] = useState("firstname");
    const [sortOrder, setSortOrder] = useState(1);

    // useEffect hook that sets employees array to be the array from employees.json when page mounts
    useEffect(() => {
        setEmployees(Employees)
    }, []);

    // Creating a RegExp that is the first name that must be matched in the name filter
    const filterRegExp = new RegExp(filter, "i");

    return (
        <div>
            <Navbar></Navbar>
            {/* Input field for first name to filter by, updates filter to be the user's input */}
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-default">Filter by Name</span>
                </div>
                <input type="text" className="form-control" placeholder="Enter Employee First Name" value={filter} onChange={(e) => setFilter(e.target.value)} />
            </div>
            {/* Drop down menu for field to sort by, updates fieldToSortBy to be user's input*/}
            <select value={fieldToSortBy} onChange={(e) => setFieldToSortBy(e.target.value)}>
                {fields.map(({ key, text }) => (<option key={key} value={key}>{text}</option>))}
            </select>
            {/* Drop down menu for selecting sort order, updates sortOrder to be the user's input*/}
            <select value={sortOrder} onChange={(e) => setSortOrder(+e.target.value)}>
                <option value={1}>A-Z</option>
                <option value={-1}>Z-A</option>
            </select>
            <Wrapper>
                <Header></Header>
                {/* Section that renders all employees from employees state*/}
                <EmployeeContext.Provider value={
                    // Providing EmployeeContext child, Directory, with access to the employees state and ability to filter and sort employees
                    employees
                        .filter((employee) => filterRegExp.test(employee.firstname))
                        .sort((a, b) => {
                            if (a[fieldToSortBy] < b[fieldToSortBy]) return -sortOrder
                            if (a[fieldToSortBy] > b[fieldToSortBy]) return sortOrder
                            return 0
                        })
                }>
                    <Directory></Directory>
                </EmployeeContext.Provider>
            </Wrapper>
        </div >
    );
}

export default App;