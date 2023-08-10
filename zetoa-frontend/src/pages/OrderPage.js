import React, { useState } from 'react';
import ProductRow from '../components/ProductRow.js';      

function OrderPage({items}) { 
    return (
        <div>
            <h2>Order Page</h2>
            <article>
                <h3>General Instructions</h3>

                <p>Within this page, you may order any of the specific items listed below in the table. An
                    individual is limited to ten quantities per item.
                </p>
                        <legend>These are the current items that we have in stock.</legend>
                        <table className="table_design">
                            <caption><strong>Product Stock</strong></caption>
                            <thead>
                                <tr>
                                    <th>Item, Company</th>
                                    <th>Price</th>
                                    <th>Choose Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map((currentItem, indexPosition) => <ProductRow item={currentItem} key={indexPosition} />)}
                            </tbody>
                        </table>
            </article>
            </div>
    );
}
export default OrderPage;
