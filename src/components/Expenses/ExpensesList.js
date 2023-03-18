import React from "react";
import ExpenseItem from "./ExpenseItem";
import styles from "./ExpensesList.module.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return (
      <h2 className={styles["expenses-list__fallback"]}>Found No Expense</h2>
    );
  }
  return (
    <ul className={styles["expenses-list"]}>
      {props.items.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
