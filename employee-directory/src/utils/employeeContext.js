import React from "react";

const EmployeeContext = React.createContext({
    firstname: "",
    lastname: "",
    email: "",
    position: "",
    department: "",
    image: "",
    handleBtnClick: () => { },
    handleSubmit: () => { }
});

export default EmployeeContext;
