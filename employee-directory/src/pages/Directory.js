import React, { useEffect, useState } from "react";
import { render } from "react-dom";

function Directory() {
    const [employees, setEmployees] = useState([]);
    // const [employees, setEmployee] = useState({});
    // const [employeeIndex, setEmployeeIndex] = useState(0)

    // useEffect hook to render all employee info from employee.json when page mounts or when employees state changes
    useEffect(() => {
        employees.map(employee => {

        })
    }, [employees]);


    // function to sort the employees array to be in alphabetical order by last name

    // function to filter employees array based on employee department

    // function to handle button click to sort employees in alphabetical order

    // function to handle form submit from user to filter directory based on selected department

    // return (
    // );
};

export default Directory;