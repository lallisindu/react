import React, { useState } from 'react';

const AddProductForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [largeQty, setLargeQty] = useState(0);
  const [mediumQty, setMediumQty] = useState(0);
  const [smallQty, setSmallQty] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      name,
      description,
      price,
      quantity: {
        large: parseInt(largeQty), // Convert to integer
        medium: parseInt(mediumQty), // Convert to integer
        small: parseInt(smallQty) // Convert to integer
      }
    };
    onAdd(newProduct);
    setName('');
    setDescription('');
    setPrice('');
    setLargeQty(0);
    setMediumQty(0);
    setSmallQty(0);
  };

  return (
    <div>
      <h1>Add T-Shirt</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Description:
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <br />
        <label>
          Price:
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
        </label>
        <br />
        <label>
          Large Quantity:
          <input type="number" value={largeQty} onChange={(e) => setLargeQty(e.target.value)} />
        </label>
        <br />
        <label>
          Medium Quantity:
          <input type="number" value={mediumQty} onChange={(e) => setMediumQty(e.target.value)} />
        </label>
        <br />
        <label>
          Small Quantity:
          <input type="number" value={smallQty} onChange={(e) => setSmallQty(e.target.value)} />
        </label>
        <br />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProductForm;
