import PropTypes from 'prop-types';
import { Text } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <Text>Good: {good}</Text>
      <Text>Neutral: {neutral}</Text>
      <Text>Bad: {bad}</Text>
      <Text>Total: {total}</Text>
      <Text>Positive feedback: {positivePercentage}%</Text>
    </>
  );
};

Statistics.propTypes = {
  bad: PropTypes.number.isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default Statistics;
