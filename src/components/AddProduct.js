import React, { useState } from 'react';

const AddProduct = ({ onAdd }) => {
  const [productId, setProductId] = useState('');
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');

  const handleAdd = () => {
    if (!productId || !productName || !productPrice) return;
    const product = {
      id: productId,
      name: productName,
      price: parseFloat(productPrice),
    };
    // Store product details in local storage
    localStorage.setItem(productId, JSON.stringify(product));
    onAdd(product);
    setProductId('');
    setProductName('');
    setProductPrice('');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Product ID"
        value={productId}
        onChange={(e) => setProductId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Product Name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={productPrice}
        onChange={(e) => setProductPrice(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default AddProduct;