import PropTypes from 'prop-types';
import '../index.css';

const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <>
      {Object.keys(options).map(key => {
        let newStr = key[0].toUpperCase() + key.slice(1);
        return (
          <button onClick={onLeaveFeedback} name={key} key={key}>
            {newStr}
          </button>
        );
      })}
    </>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
  options: PropTypes.object,
};

export default FeedbackOptions;
