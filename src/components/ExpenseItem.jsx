import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
export default function ExpenseItem(props) {
  // export default function ExpenseItem({title,amount,date})   //Destructuring when u directly pass the whole expense object as props in app.js file
  return (
    <div className="expense-item">
      <div>
        <ExpenseDate date={props.date}></ExpenseDate>
      </div>
      {/* <div>{props.expense.date.toISOString()}</div> */}
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        {/* <h2>{props.expense.title}</h2> */}
        <div className="expense-item__price">${props.amount}</div>
        {/* <div className="expense-item__price">${props.expense.amount}</div> */}
      </div>
    </div>
  );
}
