import { Container, Button } from './FeedbackOptions.stuled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Container>
      {options.map((btn, i) => {
        return (
          <Button key={'btn-' + i} type="button" onClick={onLeaveFeedback}>
            {btn.toUpperCase()}
          </Button>
        );
      })}
    </Container>
  );
};
