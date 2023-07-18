import React from "react";

export const HistoryTransferTable = ({ transfers }) => {
    return (
      <div>
        <h3>Transfers</h3>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Source Account</th>
              <th>Destination Account</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {transfers.map((transfer) => (
              <tr key={transfer._id}>
                <td>{transfer._id}</td>
                <td>{transfer.sourceAccount}</td>
                <td>{transfer.destinationAccount}</td>
                <td>{transfer.amount}</td>
                <td>{transfer.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };