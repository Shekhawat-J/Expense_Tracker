import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  // let addNewExpense = true;
  const [isEditing , setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random(),
    };

    // console.log(expenseData);
    props.onAddExpenseData(expenseData);
  };

  const isEditingHandler = () =>{
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  }

  return (
    <div className="new-expense">
      {/* <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} /> */}

      {!isEditing && <button onClick={isEditingHandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancle={stopEditingHandler} />}
      
    </div>
  );
};

export default NewExpense;
