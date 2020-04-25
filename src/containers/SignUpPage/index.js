/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';


import {
  StyledSignUpPage,
  Heading,
  FormStyled,
  TextWrapper,
  Title,
  Input,
  CheckboxContainer,
  Label,
  PrivacyLink,
  SignInLink,
  ErrorMessage,
  Container
} from './styles';

import ButtonPrimary from '../../components/ButtonPrimaryMedium/index';


class SignUpPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        firstname: '',
        lastname: '',
        phone: '',
        password: '',
        errorFirstname: '',
        errorLastname: '',
        errorPhone: '',
        errorPassword: ''
      },
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [name]: value
      }
    });
  }


  render() {
    const { user, submitted } = this.state;
    return (
      <StyledSignUpPage>
        <FormStyled onSubmit={this.handleSubmit}>
          <TextWrapper>
            <Heading>Join to BiznesRivoj.</Heading>
            <Title>Sign up to get newly updates from BiznesRivoj.</Title>
            <Title>
              Already have an account ?
              <SignInLink to="login">
                Sign in
              </SignInLink>
            </Title>
          </TextWrapper>

          <Input
            type="text"
            name="firstname"
            placeholder="Firstname"
            value={user.firstname}
            onChange={this.handleChange}
          />
          <ErrorMessage>{user.errorFirstname}</ErrorMessage>

          <Input
            type="text"
            name="lastname"
            placeholder="Lastname"
            value={user.lastname}
            onChange={this.handleChange}
          />
          <ErrorMessage>{user.errorLastname}</ErrorMessage>

          <Container>
            <PhoneInput
              type="tel"
              name="phone"
              country="uz"
              value={user.phone}
              onChange={this.handleChange}
            />
            <ErrorMessage>{user.errorPhone}</ErrorMessage>
          </Container>

          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={this.handleChange}
          />
          <ErrorMessage>{user.errorPassword}</ErrorMessage>

          <CheckboxContainer>
            <input type="checkbox" />
            <Label htmlfor="checkbox">
              Sign up to receive occasional emails from BiznesRivoj.
              You may unsubscribe at any time.
            </Label>
          </CheckboxContainer>

          <ButtonPrimary btnForm>Create Account</ButtonPrimary>
          <PrivacyLink to="/privacy-policy">Privacy Policy</PrivacyLink>
        </FormStyled>
      </StyledSignUpPage>
    );
  }
}

export default SignUpPage;
