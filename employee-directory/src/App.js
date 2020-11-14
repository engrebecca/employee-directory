import React, { useEffect, useState } from "react";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
// import Container from "./components/Container";
import Header from "./components/Header";
import Employees from "./employees.json"
import Directory from "./components/Directory";
import EmployeeContext from "./utils/employeeContext";

const fields = [{ key: "firstname", text: "First Name" }, { key: "lastname", text: "Last Name" }, { key: "position", text: "Position" }, { key: "department", text: "Department" }, { key: "email", text: "Email" }]

function App() {
    const [employees, setEmployees] = useState([]);
    const [filter, setFilter] = useState("")
    const [fieldToSortBy, setFieldToSortBy] = useState("firstname");
    const [sortOrder, setSortOrder] = useState(1);

    useEffect(() => {
        setEmployees(Employees)
    }, []);

    // function to sort the employees array to be grouped by department

    // function to filter employees array based on employee name

    // function to handle form submit from user to sort directory based on selected department

    // function to handle button click to filter employees in alphabetical order

    const filterRegExp = new RegExp(filter, "i");

    return (
        <div>
            <Navbar></Navbar>
            <input type="text" value={filter} onChange={(e) => setFilter(e.target.value)} />
            <select value={fieldToSortBy} onChange={(e) => setFieldToSortBy(e.target.value)}>
                {fields.map(({ key, text }) => (<option key={key} value={key}>{text}</option>))}
            </select>
            <select value={sortOrder} onChange={(e) => setSortOrder(+e.target.value)}>
                <option value={1}>Asc</option>
                <option value={-1}>Desc</option>
            </select>
            <Wrapper>
                <Header></Header>
                {/* Section that renders all employees from employees.json */}
                <EmployeeContext.Provider value={
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