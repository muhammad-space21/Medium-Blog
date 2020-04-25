import React from './node_modules/react';
import axios from './node_modules/axios';
import PhoneInput from 'react-phone-input-2';
import './node_modules/react-phone-input-2/lib/style.css';

import {
  StyledSignUpPage,
  Heading,
  FormStyled,
  TextWrapper,
  Input,
  ForgotPasswordLink,
  Container
} from './styles';

import ButtonPrimary from '../../components/ButtonPrimaryMedium/index';

class LoginPage extends React.Component {
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
          <Container>
            <PhoneInput
              type="tel"
              name="phone"
              country="uz"
              value={phone}
              onChange={this.handleChange}
            />
          </Container>
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

export default LoginPage;
