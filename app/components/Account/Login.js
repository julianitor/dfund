import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux'
import { dbLogin } from '../../actions/oauth';
import Messages from '../Messages';

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  handleDbLogin() {
    event.preventDefault();
    this.props.dispatch(dbLogin())
  }

  render() {
    return (
      <div className="login-container container">
        <div className="panel">
          <div className="panel-body">
            <Messages messages={this.props.messages}/>
            <form onSubmit={this.handleDbLogin.bind(this)}>
              <legend>Log In</legend>
              <button type="submit" className="btn btn-success">Log in with Deusche Bank</button>
            </form>
            <div className="hr-title"><span>or</span></div>
            <div className="btn-toolbar text-center">
            </div>
          </div>
        </div>
        <p className="text-center">
          Don't have an account? <Link to="/signup"><strong>Sign up</strong></Link>
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages
  };
};

export default connect(mapStateToProps)(Login);
