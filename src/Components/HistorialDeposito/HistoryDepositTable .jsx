export const HistoryDepositTable = ({ deposits }) => {
    return (
      <div>
        <h3>Deposits</h3>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Account</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {deposits.map((deposit) => (
              <tr key={deposit._id}>
                <td>{deposit._id}</td>
                <td>{deposit.noCuenta}</td>
                <td>{deposit.amount}</td>
                <td>{deposit.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };