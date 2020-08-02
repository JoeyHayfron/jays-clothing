import React from 'react';

import './sign-up.styles.scss';
import FormInput from './../form-input/form-input';
import CustomButton from './../custom-button/custom-button.component';

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };
  handleSubmit;

  render() {
    return (
      <div>
        <h2>I do not have an account</h2>
        <span>Sing up with email and password</span>
        <form>
          <FormInput
            name="name"
            label="Display Name"
            type="text"
            value={this.state.name}
            required
          />
          <FormInput
            name="email"
            label="Email"
            type="email"
            value={this.state.email}
            required
          />
          <FormInput
            name="password"
            label="Password"
            type="password"
            value={this.state.password}
            required
          />
          <FormInput
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            value={this.state.confirmPassword}
            required
          />

          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
