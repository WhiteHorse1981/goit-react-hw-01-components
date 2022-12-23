import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({items}) => {
    return (
        <table className={css.transactionHistoryTable}>
            <thead className={css.titleHeaderRow}>
                <tr className={css.valuesRow}>
                    <th className={css.columnValue}>Type</th>
                    <th className={css.columnValue}>Amount</th>
                    <th className={css.columnValue}>Currency</th>
                </tr>
            </thead>
            <tbody>
            {items.map(item => (
                <tr key={item.id} className={css.valuesRow}>
                    <td className={css.transaction}>{item.type}</td>
                    <td className={css.transaction}>{item.amount}</td>
                    <td className={css.transaction}>{item.currency}</td>
                </tr>
            ))}  
            </tbody>
        </table>
    );
}

TransactionHistory.protoType = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};