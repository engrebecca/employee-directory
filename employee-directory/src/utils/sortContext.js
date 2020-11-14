import React from "react";

const SortContext = React.createContext({
    fieldToSortBy: "",
    fields: [],
    onChange: () => { }
});

export default SortContext;
