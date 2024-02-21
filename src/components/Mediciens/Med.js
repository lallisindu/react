import React, { useState } from 'react';
import InputForm from './AddItem';
import Meals from './Mediciens';
import Card from '../UI/Card';

const Med= () => {
  const [items, setItems] = useState([]);
  const [showInputForm, setShowInputForm] = useState(true); // State to control the visibility of the input form

  const addItemHandler = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
    setShowInputForm(false); // Hide the input form after adding an item
  };

  const showInputFormHandler = () => {
    setShowInputForm(true); // Show the input form
  };

  return (
    
    <div>
      {showInputForm && <InputForm onAddItem={addItemHandler} />}
      <button onClick={showInputFormHandler}>Show Input Form</button> {/* Button to manually show the input form */}
      <Card>
      <div>
        {items.map((item, index) => (
          <Meals key={index} item={item} />
        ))}
      </div>
      </Card>
    </div>
    
  );
};

export default Med;