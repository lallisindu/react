import React from 'react';

const CartItem = ({ item }) => {
    console.log('Item:', item);
    if (!item || !item.product) {
      return null; // Return null if item or item.product is undefined
    }
  
    
    return (
      <div>
        {/* Render item properties here */}
        <p>Id: {item._id}</p>
        <p>Title: {item.product.title}</p>
        <p>Price: ${item.product.price}</p>
        <img src={item.product.imageUrl} alt={item.product.title} />
      </div>
    );
};

export default CartItem;
