export default function TransactionHistory({items}){
  return(
    <table className="transaction-history">
  <thead className="transaction-title">
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
{  items.map(item => ( <tr key={item.id} className="dark-row">
    <td>{item.type}</td>
    <td>{item.amount}</td>
    <td>{item.currency}</td>
  </tr>))}

  </tbody>
</table>
  )

} 