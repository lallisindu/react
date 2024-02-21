import React, { useState } from 'react';
import MealItem from './MediItems';
import Card from '../UI/Card';
import InputForm from './AddItem'; // Import AddItemForm



const Meals = () => {
  const [meals, setMeals] = useState([]);

  const addItemHandler = (newItem) => {
    setMeals((prevMeals) => [...prevMeals, newItem]); // Add new item to the meals state
  };

  const mealItems = meals.map(meal => (
    <MealItem key={meal.id} id={meal.id} name={meal.name} description={meal.description} price={meal.price} />
  ));

  return (
    <section>
      <Card>
        <InputForm onAddItem={addItemHandler} /> {/* Render AddItemForm and pass addItemHandler as a prop */}
        <ul>{mealItems}</ul>
      </Card>
    </section>
  );
};

export default Meals;