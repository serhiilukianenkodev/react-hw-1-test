import PropTypes from 'prop-types';
import {
  HistoryTable,
  TableHead,
  TableTitle,
  TableBody,
  TableRow,
  TableContent,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => (
  <HistoryTable>
    <TableHead>
      <TableRow>
        <TableTitle>Type</TableTitle>
        <TableTitle>Amount</TableTitle>
        <TableTitle>Currency</TableTitle>
      </TableRow>
    </TableHead>

    <TableBody>
      {items.map(({ type, amount, currency, id }) => (
        <TableRow key={id}>
          <TableContent>{type}</TableContent>
          <TableContent>{amount}</TableContent>
          <TableContent>{currency}</TableContent>
        </TableRow>
      ))}
    </TableBody>
  </HistoryTable>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
