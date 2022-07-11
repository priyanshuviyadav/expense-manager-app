import React from "react";

export default function TotalTrasaction({
  balanceAmount,
  incomeAmount,
  expensesAmount,
}) {
  return (
    <>
      <div className='header border-2 border-black bg-cyan-300  px-5 py-5 rounded-xl  w-1/2 h-20  text-left flex flex-col mx-auto'>
        <h1 className='font-bold text-lg  '>Hi, Richard</h1>
        <p>
          Welcome back to your
          <span> Money Manager</span>
        </p>
      </div>

      <div className=' flex flex-row justify-between w-1/2 mx-auto my-10 '>
        <div className='border-2 border-green-800 font-bold bg-green-300 rounded-lg p-2 w-1/4'>
          <p>Your Balance</p>
          <p>Rs {balanceAmount}</p>
        </div>

        <div className='border-2 border-blue-800 bg-blue-300 font-bold rounded-lg p-2 w-1/4'>
          <p>Your Income</p>
          <p>Rs {incomeAmount}</p>
        </div>

        <div className='border-2 border-purple-800 font-bold bg-purple-300 rounded-lg p-2 w-1/4'>
          <p>Your Expenses</p>
          <p>Rs {expensesAmount}</p>
        </div>
      </div>
    </>
  );
}
