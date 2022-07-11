import React from "react";

export default function History({ trasactionDetails, deleteTransaction }) {
  const { id, title, amount, type } = trasactionDetails;

  return (
    <>
      <div className='   justify-between  border-2  mx-10  border-black m-10 p-10'>
        <h1 className='    font-bold text-2xl'>History</h1>
        <div className=' flex   justify-between  font-bold'>
          <p>Title:</p>

          <p>Amount:</p>

          <p>Type:</p>
        </div>
        <div className=' flex   justify-between '>
          <p>{title}</p>
          <p>{amount}</p>
          <p>{type}</p>
          <button onClick={() => deleteTransaction(id)}>X</button>
        </div>
      </div>
    </>
  );
}
