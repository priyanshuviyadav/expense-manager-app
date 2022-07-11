import { useState } from "react";
import { nanoid } from "nanoid";

export default function AddTrasaction({ setTransactionList }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [optionId, setOptionId] = useState("");

  const onAddTransaction = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: nanoid(4),
      title: title,
      amount: parseInt(amount),
      type: optionId,
    };
    setTransactionList((prevValue) => [...prevValue, newTransaction]);
    setTitle("");
    setAmount("");
    setOptionId("");
  };

  return (
    <>
      <form onSubmit={onAddTransaction}>
        <div className=' flex flex-col justify-between  border-2  border-black m-10 p-10'>
          <h1 className='text-xl font-bold	mb-8 '>AddTrasaction</h1>
          <label id='title' htmlFor='title'>
            Title
          </label>
          <input
            className=' mx-auto border-2'
            type='text'
            placeholder='Enter The Title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label id='amount' htmlFor='amount'>
            Amount
          </label>
          <input
            className=' mx-auto border-2'
            type='number'
            placeholder='Enter The Amout'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          <label id='input' htmlFor='select'>
            Type
          </label>
          <select
            className='  mx-auto border-2'
            id='select'
            value={optionId}
            onChange={(e) => setOptionId(e.target.value)}
          >
            <option></option>
            <option>Income</option>
            <option>Expense</option>
          </select>
          <button
            type='submit'
            className='border-2 border-green-800 my-8 w-1/3 mx-auto text-white bg-green-800'
          >
            Add
          </button>
        </div>
      </form>
    </>
  );
}
