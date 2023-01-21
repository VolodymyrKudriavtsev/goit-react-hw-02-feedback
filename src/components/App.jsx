import { Component } from 'react';
import Section from 'components/Section';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';
import Notification from 'components/Notification';

const buttonOptions = ['good', 'neutral', 'bad'];
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = good + neutral + bad;
    return totalFeedback;
  }

  // calcPercent(feedbackName) {
  //   const total = this.countTotalFeedback();
  //   if (total === 0) {
  //     return 0;
  //   }
  //   const value = this.state[feedbackName];
  //   const result = ((value / total) * 100).toFixed();
  //   return Number(result);
  // }

  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();
    if (total === 0) {
      return 0;
    }
    const { good } = this.state;
    const result = ((good / total) * 100).toFixed();
    return Number(result);
  }

  onLeaveFeedback = feedbackName => {
    this.setState(prevState => {
      return { [feedbackName]: prevState[feedbackName] + 1 };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={buttonOptions}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          <Notification message="There is no feedback" />
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
      </div>
    );
  }
}

export default App;
