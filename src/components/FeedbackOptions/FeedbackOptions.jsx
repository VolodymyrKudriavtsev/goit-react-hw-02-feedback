import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const buttons = options.map(name => (
    <button
      key={name}
      onClick={() => {
        onLeaveFeedback(name);
      }}
      type="button"
    >
      {name}
    </button>
  ));

  return <>{buttons}</>;
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FeedbackOptions;
