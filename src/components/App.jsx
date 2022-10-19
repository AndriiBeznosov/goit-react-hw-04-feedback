import React, { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  addReviewState = name => {
    this.setState(prevState => {
      return {
        [name.target.textContent.toLowerCase()]:
          prevState[name.target.textContent.toLowerCase()] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const totalFeedback = good + neutral + bad;
    return totalFeedback;
  };
  countPositiveFeedbackPercentage = () => {
    const Positive = (this.state.good / this.countTotalFeedback()) * 100;
    return Positive ? Math.round(Positive) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const textBtn = Object.keys(this.state);

    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={textBtn}
          onLeaveFeedback={this.addReviewState}
        />

        <Section title="Statistics">
          {!good && !neutral && !bad ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </Section>
    );
  }
}
