import "./App.css";
import { useState } from "react";
import AddTrasaction from "./component/AddTrasaction";
import History from "./component/History";
import TotalTrasaction from "./component/TotalTrasaction";
function App() {
  const transactionTypeOptions = [
    { optionId: "INCOME", displayText: "Income" },
    { optionId: "EXPENSE", displayText: "Expense" },
  ];
  const [TransactionList, setTransactionList] = useState([]);

  const handleTotalExpenseAmount = () => {
    let expensesAmount = 0;
    TransactionList.forEach((element) => {
      if (element.type === transactionTypeOptions[1].displayText) {
        expensesAmount += element.amount;
      }
    });
    return expensesAmount;
  };

  const handleTotalIncomeAmount = () => {
    let incomeAmount = 0;
    TransactionList.forEach((element) => {
      if (element.type === transactionTypeOptions[0].displayText) {
        incomeAmount += element.amount;
      }
    });
    return incomeAmount;
  };

  const handleTotBalance = () => {
    let balanceAmount = 0;
    let incomeAmount = 0;
    let expensesAmount = 0;

    TransactionList.forEach((element) => {
      if (element.type === transactionTypeOptions[0].displayText) {
        incomeAmount += element.amount;
      } else {
        expensesAmount += element.amount;
      }
    });

    balanceAmount = incomeAmount - expensesAmount;

    return balanceAmount;
  };

  const balanceAmount = handleTotBalance();
  const incomeAmount = handleTotalIncomeAmount();
  const expensesAmount = handleTotalExpenseAmount();

  const deleteTransaction = (id) => {
    const updatedTransactionList = TransactionList.filter(
      (item) => id !== item.id
    );

    setTransactionList(updatedTransactionList);
  };
  return (
    <div className='App'>
      <TotalTrasaction
        balanceAmount={balanceAmount}
        incomeAmount={incomeAmount}
        expensesAmount={expensesAmount}
      />

      <div className='flex flex-row  justify-between w-1/2 mx-auto '>
        <AddTrasaction setTransactionList={setTransactionList} />

        <ul>
          {TransactionList.map((item) => {
            return (
              <History
                key={item.id}
                trasactionDetails={item}
                deleteTransaction={deleteTransaction}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
