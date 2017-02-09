import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import styles from './HomeBottomSignup.css';
import SignupForm from '../components/SignupForm/SignupForm';

class HomeBottomSignup extends Component {
  constructor(props) {
    super(props);
    this.state = { position: 'bottom' };
  }

  render() {
    return (
      <section className={styles.BottomSignupWrapper}>
        <div className={styles.rowContent}>
          <h1 className={styles.header} >Get start now</h1>
          <SignupForm dataSet={this.state} />
        </div>
      </section>
    );
  }
}

export default withStyles(styles)(HomeBottomSignup);
