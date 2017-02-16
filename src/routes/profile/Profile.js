import React, { Component } from 'react';
import classNames from 'classnames';
import { Col } from 'reactstrap';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import styles from './Profile.css';

class Profile extends Component {
  render() {
    return (

      <Col lg="6" sm="6">
        <div className={classNames(styles.card, styles.hovercard)}>
          <div className={styles['card-background']}>
            <img alt="" src="http://lorempixel.com/100/100/people/9/" />
          </div>
          <div className={styles.useravatar}>
            <img alt="" src="http://lorempixel.com/100/100/people/9/" />
          </div>
          <div className={styles['card-info']}>
            <span className={styles['card-title']}>Pamela Anderson</span>
          </div>
        </div>

        <div className={classNames(styles['btn-pref'], styles.btn, 'btn-group', 'btn-group-justified', 'btn-group-lg')} role="group" aria-label="...">
          <div className={'btn-group'} role="group">
            <button type="button" id="stars" className={'btn btn-primary'} href="#tab1" data-toggle="tab">
              <span className={'glyphicon glyphicon-star'} aria-hidden="true" />
              <div className={'hidden-xs'}>Stars</div>
            </button>
          </div>
          <div className={'btn-group'} role="group">
            <button type="button" id="favorites" className={'btn btn-default'} href="#tab2" data-toggle="tab">
              <span className={'glyphicon glyphicon-heart'} aria-hidden="true" />
              <div className={'hidden-xs'}>Favorites</div>
            </button>
          </div>
          <div className={'btn-group'} role="group">
            <button type="button" id="following" className={'btn btn-default'} href="#tab3" data-toggle="tab">
              <span className={'glyphicon glyphicon-user'} aria-hidden="true" />
              <div className={'hidden-xs'}>Following</div>
            </button>
          </div>
        </div>

        <div className={'card'}>
          <div className={'tab-content'}>
            <div className={'tab-pane fade in active'} id="tab1">
              <h3>This is tab 1</h3>
            </div>
            <div className={'tab-pane fade in'} id="tab2">
              <h3>This is tab 2</h3>
            </div>
            <div className={'tab-pane fade in'} id="tab3">
              <h3>This is tab 3</h3>
            </div>
          </div>
        </div>
      </Col>

    );
  }
}


// App.propTypes = {
//   children: PropTypes.object.isRequired,
//   dispatch: PropTypes.func.isRequired,
//   intl: PropTypes.object.isRequired,
// };

export default withStyles(styles)(Profile);
