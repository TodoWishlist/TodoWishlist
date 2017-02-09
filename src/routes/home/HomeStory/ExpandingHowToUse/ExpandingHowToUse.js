import React, { Component } from 'react';
import { Collapse, Button } from 'reactstrap';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import styles from './ExpandingHowToUse.css';

import ToggleCard from './ToggleCard/ToggleCard';

class ExpandingHowToUse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle = () => {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    return (
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <Button className={styles.buttonColor} onClick={this.toggle} style={{ marginBottom: '1rem' }}><i className="fa fa-toggle-on" aria-hidden="true" />Open</Button>
        <Collapse isOpen={this.state.collapse}>
          <div className={styles.cardWrapper}>
            {this.props.extendDataSet.map((data, index) =>
              <ToggleCard key={index} extendDataSet={data} />,
            )}
          </div>
        </Collapse>
      </div>
    );
  }
}

ExpandingHowToUse.propTypes = {
  extendDataSet: React.PropTypes.array.isRequired,
};

export default withStyles(styles)(ExpandingHowToUse);
