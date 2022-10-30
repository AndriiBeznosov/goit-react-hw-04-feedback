import PropTypes from 'prop-types';
import { Container, Button } from './FeedbackOptions.stuled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Container>
      {options.map((btn, i) => {
        return (
          <Button
            key={'btn-' + i}
            type="button"
            onClick={() => onLeaveFeedback(btn)}
          >
            {btn.toUpperCase()}
          </Button>
        );
      })}
    </Container>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
