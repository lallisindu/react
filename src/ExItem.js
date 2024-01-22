import React from "react";
import ExpenseDate from "./ExDate";
import Card from "./Card";
function ExpenseItem(props){
    
   
    return (
        <Card><div>{props.title}</div>
              <div>{props.amount}</div> 
              <div><ExpenseDate date={props.date}/></div> 
              <button onClick={ClickHandler}>Change title</button></Card>
    );

}
export default ExpenseItem;