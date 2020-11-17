import React from 'react';
import {connect} from 'react-redux';
import './sign-up.styles.scss';
import FormInput from './../form-input/form-input';
import CustomButton from './../custom-button/custom-button.component';
import {signUpStart} from '../../redux/user/user.action';

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert('passwords dont match');
      return;
    }
    const {signUpStart} = this.props;
    signUpStart({displayName, email, password});
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2>I do not have an account</h2>
        <span>Sing up with email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            name="displayName"
            label="Display name"
            type="text"
            value={displayName}
            onChange={this.handleChange}
            required
          />
          <FormInput
            name="email"
            label="Email"
            type="email"
            value={email}
            onChange={this.handleChange}
            required
          />
          <FormInput
            name="password"
            label="Password"
            type="password"
            value={password}
            onChange={this.handleChange}
            required
          />
          <FormInput
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={this.handleChange}
            required
          />

          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  signUpStart: (userInfo) => dispatch(signUpStart(userInfo)),
})

export default connect(null, mapDispatchToProps)(SignUp);
