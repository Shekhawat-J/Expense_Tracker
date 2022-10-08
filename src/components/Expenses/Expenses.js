import React, { useState } from "react";

import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expense(props) {
  const [filteredYear, setFilteredYear] = useState("ALL");

  // props.items.map( e => console.log(e));
  
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  let filteredExpenses = props.items;

  if(filteredYear !== 'ALL'){
    filteredExpenses = props.items.filter( (item) => {
      return item.date.getFullYear().toString() === filteredYear;
    })
  }

  
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onFilterChangeHandler={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}

export default Expense;
