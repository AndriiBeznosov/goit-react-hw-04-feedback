import { List, Item } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <List>
      <Item>
        Good: <span>{good}</span>
      </Item>
      <Item>
        Neutral: <span>{neutral}</span>
      </Item>
      <Item>
        Bad: <span>{bad}</span>
      </Item>

      <Item>
        Total: <span>{total}</span>
      </Item>
      <Item>
        Positive Feedback: <span>{positivePercentage}%</span>
      </Item>
    </List>
  );
};
