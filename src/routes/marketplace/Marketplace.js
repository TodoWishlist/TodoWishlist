import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import styles from './Marketplace.css';

class Marketplace extends Component {
  render() {
    return (
      <section>
        <div>Subtitle</div>
        <div>Marketplace</div>
      </section>
    );
  }
}


// App.propTypes = {
//   children: PropTypes.object.isRequired,
//   dispatch: PropTypes.func.isRequired,
//   intl: PropTypes.object.isRequired,
// };

export default withStyles(styles)(Marketplace);
