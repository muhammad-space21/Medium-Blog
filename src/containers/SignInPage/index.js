import React from 'react';

import axios from 'axios';

import {
  StyledSignUpPage,
  Heading,
  FormStyled,
  TextWrapper,
  Input,
  ForgotPasswordLink
} from './styles';

import ButtonPrimary from '../../components/ButtonPrimaryMedium/index';

class SignInPage extends React.Component {
  constructor() {
    super();

    this.state = {
      phone: '',
      password: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => { 
    this.setState({
      [e.target.name]: e.target.value 
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    axios.post('https://jsonplaceholder.typecode.com/posts', this.state )
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    const { phone, password } = this.state; 

    return (
      <StyledSignUpPage>
        <FormStyled onSubmit={this.handleSubmit}>
          <TextWrapper>
            <Heading>Login to your BiznesRivoj account.</Heading>
          </TextWrapper>
          <Input
            type="contact"
            name="phone"
            placeholder="Email"
            value={phone}
            onChange={this.handleChange}
            required
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={this.handleChange}
            required
          />
          <ButtonPrimary btnForm>Login</ButtonPrimary>
          <ForgotPasswordLink to="/forgot-password">Forgot Password ?</ForgotPasswordLink>
        </FormStyled>
      </StyledSignUpPage>
    );
  }
}

export default SignInPage;
