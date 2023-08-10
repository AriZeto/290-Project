import React, { useState } from 'react';
import { BsFillArrowDownSquareFill, BsFillArrowUpSquareFill } from "react-icons/bs";

function ProductQuantity() {
    const [total, settingTotal] = useState(0);

    const incrementTotal = () => settingTotal(total === 10 ? total: total + 1)
    const decrementTotal = () => settingTotal(total === 0 ? 0: total - 1)
    return (
        <div className="">
            <BsFillArrowDownSquareFill onClick={decrementTotal} className="smaller" />
            <span className="total">{total}</span>
            <BsFillArrowUpSquareFill onClick={incrementTotal} className="larger" />
        </div>
    );
}

export default ProductQuantity;