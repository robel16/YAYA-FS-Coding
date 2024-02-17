// TransactionTable.js
import React from "react";

const TransactionTable = () => {
  return (
    <>
      <div className="p-6 overflow-x-scroll px-0 pt-0 pb-2">
        <table className="w-full min-w-[640px] table-auto">
          <thead>
            <tr>
              <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">
                  Transaction ID
                </p>
              </th>
              <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">
                  Sender
                </p>
              </th>
              <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">
                  Receiver
                </p>
              </th>
              <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">
                  Amount
                </p>
              </th>
              <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">
                  Currency
                </p>
              </th>
              <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">
                  Cause
                </p>
              </th>
              <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">
                  Created At
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            {dataToShow.map((transaction) => (
              <tr key={transaction.id}>
                <td className="py-3 px-5 border-b border-blue-gray-50">
                  {transaction.id}
                </td>
                <td className="py-3 px-5 border-b border-blue-gray-50">
                  {transaction.sender}
                </td>
                <td className="py-3 px-5 border-b border-blue-gray-50">
                  {transaction.receiver}
                </td>
                <td className="py-3 px-5 border-b border-blue-gray-50">
                  {transaction.amount}
                </td>
                <td className="py-3 px-5 border-b border-blue-gray-50">
                  {transaction.currency}
                </td>
                <td className="py-3 px-5 border-b border-blue-gray-50">
                  {transaction.cause}
                </td>
                <td className="py-3 px-5 border-b border-blue-gray-50">
                  {transaction.createdAt}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TransactionTable;
