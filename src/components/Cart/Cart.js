import React from 'react';

const Cart = ({ cart }) => {
    return (
        <div>
            <h4>Order summary</h4>
            <p>Selected Items : {cart.length}</p>
            <p>Total Price : ${cart.price}</p>
            <p>Total Shipping Charge : { }</p>
            <p>Tax : { }</p>
            <p>Grand Total : { }</p>
        </div>
    );
};

export default Cart;