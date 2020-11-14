import React, { useEffect, useState } from "react";
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Jumbotron";
import Container from "./components/Container";
import Header from "./components/Header";
import Employees from "./employees.json"
import Directory from "./components/Directory";
import EmployeeContext from "./utils/employeeContext";
import FilterContext from "./utils/filterContext";
import Filter from "./components/Filter";
import SortContext from "./utils/sortContext";
import Sort from "./components/SortField";
import OrderContext from "./utils/orderContext";
import Order from "./components/OrderField";

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

    // Updates filter value to user input whenever there is a change to value in the input field
    function handleFilterInput(e) {
        setFilter(e.target.value)
    };

    // Updates fieldToSortBy to user input whenever there is a change to the value in the drop down menu
    function handleSortInput(e) {
        setFieldToSortBy(e.target.value)
    };

    // Updates sortOrder to user input whenever there is a change to the value in the drop down menu
    function handleSortOrder(e) {
        setSortOrder(+e.target.value)
    };

    return (
        <div>
            <Jumbotron></Jumbotron>
            <Container>
                <FilterContext.Provider value={{ filter, handleFilterInput }}>
                    {/* Input field for first name to filter by, updates filter to be the user's input */}
                    <Filter></Filter>
                </FilterContext.Provider>
                <SortContext.Provider value={{ fieldToSortBy, fields, handleSortInput }}>
                    {/* Drop down menu for field to sort by, updates fieldToSortBy to be user's input*/}
                    <Sort></Sort>
                </SortContext.Provider>

                <OrderContext.Provider value={{ sortOrder, handleSortOrder }}>
                    {/* Drop down menu for selecting sort order, updates sortOrder to be the user's input*/}
                    <Order></Order>
                </OrderContext.Provider>
            </Container>
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