import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import styles from './SignupForm.css';

const SignupForm = ({ dataSet }) => {
  const flex = dataSet.position === 'top' ? { display: 'flex', flexDirection: 'row' } : { display: 'flex', flexDirection: 'column' };
  const width = dataSet.position === 'top' ? { width: '48.5%' } : { width: '100%' };
  const legalColor = dataSet.position === 'top' ? { color: 'white' } : { color: '#3d464d' };
  const lineColor = dataSet.position === 'top' ? { background: 'rgba(255, 255, 255, 0.5)' } : { background: 'rgba(0, 0, 0, 0.5)' };
  const orColor = dataSet.position === 'top' ? { color: 'rgba(255, 255, 255, 0.8)' } : { color: 'rgba(0, 0, 0, 0.8)' };
  return (
    <div className={styles.signupForm}>
      <form action="#">
        <div style={flex}>
          <div className={styles.formGroup} style={width}>
            <label className="sr-only" htmlFor="inputEmail">Email</label>
            <input type="email" className="form-control" id="inputEmail" placeholder="Email" />
          </div>
          <div className={styles.formGroup} style={width}>
            <label className="sr-only" htmlFor="inputPassword">Password</label>
            <input type="password" className="form-control" id="inputPassword" placeholder="Password" />
          </div>
        </div>
        <div>
          <p className={styles.legal} style={legalColor}>
            By clicking Sign up, I agree to the
            <a> Terms of Service</a> and <a>Privacy Policy</a>.
          </p>
          <button
            type="button" name="register" className={`btn click_tracking ${styles.buttonPricingPremium} ${styles.buttonColor}`}
            data-label="home_CTA" data-action="Sign up now" lang="en"
          >
            Sign Up for Free
          </button>
        </div>
        <div className={styles.orDivider}>
          <span className={styles.line} style={lineColor} />
          <span className={styles.text} style={orColor}>or</span>
          <span className={styles.line} style={lineColor} />
        </div>
        <div>
          <p>
            <a className={`btn btn-block ${styles.btnSocial} ${styles.btnGoogle}`}>
              <span className="fa fa-google" />Sign in with Google
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

SignupForm.propTypes = {
  dataSet: React.PropTypes.object,
};

export default withStyles(styles)(SignupForm);
