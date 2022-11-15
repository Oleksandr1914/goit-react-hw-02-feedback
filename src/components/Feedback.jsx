import React, { Component } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';
import '../index.css';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  percentageOfReviews(total) {
    const calc = ((this.state.good + this.state.neutral) / total) * 100;
    return Math.floor(calc);
  }

  onLeaveFeedback = e => {
    const name = e.target.name;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  render() {
    const total = this.state.good + this.state.neutral + this.state.bad;
    const positivePercentage = this.percentageOfReviews(total);
    return (
      <div className="container">
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={{
              good: this.state.good,
              neutral: this.state.neutral,
              bad: this.state.bad,
            }}
            onLeaveFeedback={this.onLeaveFeedback}
          />
          {total === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default Feedback;
