import React from "react";

const EmployeeContext = React.createContext({
    firstname: "",
    lastname: "",
    email: "",
    position: "",
    phone: "",
    image: "",
    handleBtnClick: () => { },
    handleSubmit: () => { }
});

export default EmployeeContext;
