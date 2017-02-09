import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import styles from './FooterNavs.css';

class FooterNavs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSet: [],
    };
  }

  componentWillMount() {

  }

  render() {
    return (
      <div className={styles.FooterNavWrapper}>
        <FooterNav />
      </div>
    );
  }
}

const FooterNav = () => (
  <div>Nav</div>
);

export default withStyles(styles)(FooterNavs);
