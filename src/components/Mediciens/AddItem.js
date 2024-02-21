import React, { useState } from 'react';

const InputForm = ({ onAddItem }) => {
  const [itemName, setItemName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleAddItem = () => {
    // Validate input fields
    if (!itemName.trim() || !description.trim() || !price.trim()) {
      alert('Please fill out all fields');
      return;
    }

    // Call the onAddItem function with the new item data
    const newItem = {
      name: itemName.trim(),
      description: description.trim(),
      price: parseFloat(price),
    };
    onAddItem(newItem);

    // Clear input fields
    setItemName('');
    setDescription('');
    setPrice('');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Item Name"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button onClick={handleAddItem}>Add</button>
    </div>
  );
};

export default InputForm;