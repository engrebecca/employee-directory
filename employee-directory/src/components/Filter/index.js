import React, { useContext } from "react";
import FilterContext from "../../utils/filterContext";

function Filter() {
    const { filter, handleFilterInput } = useContext(FilterContext);

    // Returns input field for filtering by employee first name
    return (
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-default">Filter by Name</span>
            </div>
            <input type="text" className="form-control" placeholder="Enter First Name" value={filter} onChange={handleFilterInput} />
        </div>
    );
}

export default Filter;