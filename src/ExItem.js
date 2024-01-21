import React,{useState} from "react";
import ExpenseDate from "./ExDate";
import Card from "./Card";
function ExpenseItem(props){
    const [title,setTitle]=useState(props.title);
    const ClickHandler=() =>{
       setTitle('Updated!')
       console.log('Expensive Iitem evaluated by React!')
    }
   
    return (
        <Card><div>{title}</div>
              <div>{props.amount}</div> 
              <div><ExpenseDate date={props.date}/></div> 
              <button onClick={ClickHandler}>Change title</button></Card>
    );

}
export default ExpenseItem;