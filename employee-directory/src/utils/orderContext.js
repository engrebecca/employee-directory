import React from "react";

const OrderContext = React.createContext({
    sortOrder: 1,
    onChange: () => { }
});

export default OrderContext;
