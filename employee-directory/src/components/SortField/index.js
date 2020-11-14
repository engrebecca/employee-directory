import React, { useContext } from "react";
import SortContext from "../../utils/sortContext";

function Sort() {
    const { fieldToSortBy, fields, handleSortInput } = useContext(SortContext);

    // Returns form for sorting by employees by first name, last name, position, department, or email
    return (
        <select className="form-control" value={fieldToSortBy} onChange={handleSortInput}>
            <>
                {fields.map(({ key, text }) => (<option key={key} value={key}>{text}</option>))}
            </>
        </select>
    );
}

export default Sort;