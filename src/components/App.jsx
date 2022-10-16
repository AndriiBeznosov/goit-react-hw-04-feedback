import React, { Component } from 'react';
// import { Section } from './Section/Section';

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
      <section>
        <h2>Please leave feedback</h2>
        <div>
          {textBtn.map((btn, i) => {
            return (
              <button
                key={'btn-' + i}
                type="button"
                onClick={this.addReviewState}
              >
                {btn.toUpperCase()}
              </button>
            );
          })}
        </div>
        <div>
          <h3>Statistics</h3>
          {!good && !neutral && !bad ? (
            <div>There is no feedback</div>
          ) : (
            <ul>
              <li>
                Good: <span>{good}</span>
              </li>
              <li>
                Neutral: <span>{neutral}</span>
              </li>
              <li>
                Bad: <span>{bad}</span>
              </li>

              <li>
                Total: <span>{this.countTotalFeedback()}</span>
              </li>
              <li>
                Positive Feedback:
                <span>{this.countPositiveFeedbackPercentage()}%</span>
              </li>
            </ul>
          )}
        </div>
      </section>
    );
  }
}
