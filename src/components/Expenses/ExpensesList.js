import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';


const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__content">No Expense Found</h2>;
  }

  return props.items.map((expense) => (
    <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    ></ExpenseItem>
  ));
};

export default ExpensesList;
