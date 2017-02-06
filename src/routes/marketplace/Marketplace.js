import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import styles from './Marketplace.css';

class Marketplace extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>Marketplace</Col>
        </Row>
      </Container>
    );
  }
}


// App.propTypes = {
//   children: PropTypes.object.isRequired,
//   dispatch: PropTypes.func.isRequired,
//   intl: PropTypes.object.isRequired,
// };

export default withStyles(styles)(Marketplace);
