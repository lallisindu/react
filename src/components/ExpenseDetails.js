import React from 'react';

const ExpenseDetails = (props) => {
  return (
    <div>
      <div>{props.title}</div>
      <div>${props.amount}</div>
      <div>{props.location}</div>
    </div>
  );
};

export default ExpenseDetails;
