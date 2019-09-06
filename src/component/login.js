import React from 'react';
import { connect } from 'react-redux';
import MiddleWare from './../store/Middleware/MiddleWare';
import { Link, Redirect } from 'react-router-dom';
class Login extends React.Component {
  state = {
    username: '',
    password: ''
  };
  handleValue = evt => {
    console.log(evt.target.value);
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };
  submit_login_user = evt => {
    evt.preventDefault();
    this.props.updatedDataLogin(this.state);
  };
  componentWillReceiveProps(updatedProps) {
    console.log('componentWillReceiveProps', updatedProps);
  }
  otherRoute = () => {
    if (this.props.loginUser.username) {
      return <Redirect to='/dashboard' />;
    }
  };
  render() {
    console.log('redux updated login state', this.props.loginUser);
    return (
      <div className='loginUserstyle'>
        <form onSubmit={this.submit_login_user}>
          <Link to='/'>
            <h1>Login User</h1>
          </Link>
          <input
            type='text'
            name='username'
            onChange={this.handleValue}
            placeholder='username'
          />
          <input
            type='password'
            name='password'
            onChange={this.handleValue}
            placeholder='password'
          />
          <button>login</button>
        </form>
        {this.otherRoute()}
      </div>
    );
  }
}
function mapStatetoProps(state) {
  return {
    loginUser: state.login.loggedinUsers
  };
}
function mapDispatchtoProps(dispatch) {
  return {
    updatedDataLogin: data => {
      dispatch(MiddleWare.loginMiddleware(data));
    }
  };
}
export default connect(
  mapStatetoProps,
  mapDispatchtoProps
)(Login);
