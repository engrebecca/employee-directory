import React, { useContext } from "react";
import OrderContext from "../../utils/orderContext";

function Order() {
    const { sortOrder, handleSortOrder } = useContext(OrderContext);

    // Returns form for sorting fields A-Z or Z-A
    return (
        <select className="form-control" value={sortOrder} onChange={handleSortOrder}>
            <option value={1}>A-Z</option>
            <option value={-1}>Z-A</option>
        </select>
    );
}

export default Order;