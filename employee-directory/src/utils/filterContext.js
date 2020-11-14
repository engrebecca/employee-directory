import React from "react";

const FilterContext = React.createContext({
    filter: "",
    onChange: () => { }
});

export default FilterContext;
