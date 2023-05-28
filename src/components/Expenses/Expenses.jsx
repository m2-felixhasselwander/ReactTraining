import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2021");

  const onFilterChangeHandler = (filterValue) => {
    setFilterYear(filterValue);
    console.log("In Expenses.jsx: Filter value:", filterValue);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filterYear}
        onFilterChange={onFilterChangeHandler}
      />
      {props.expenses.map((Expense) => (
        <ExpenseItem
          title={Expense.title}
          amount={Expense.amount}
          date={Expense.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
