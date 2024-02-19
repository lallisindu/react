import React from 'react';

const CartItem = (props) => {
  return (
    <li>
      <div>
        <h2>{props.name}</h2>
        <div>
          <span>Price: ${props.price}</span> {/* Display price */}
          <span>Quantity: {props.quantity}</span> {/* Display quantity */}
        </div>
      </div>
      <div>
        <button onClick={props.onReduce}>-</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;