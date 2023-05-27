import { v1 as uuidv1 } from "uuid";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const onSubmitExpenseHandler = (oForm) => {
    const oNewExpense = {
      ...oForm,
      id: uuidv1(),
    };
    props.onAddExpense(oNewExpense);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSubmitExpense={onSubmitExpenseHandler} />
    </div>
  );
};

export default NewExpense;
