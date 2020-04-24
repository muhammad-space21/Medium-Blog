/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

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
  ErrorMessage
} from './styles';

import ButtonPrimary from '../../components/ButtonPrimaryMedium/index';

const numberRegex = RegExp(/(?:\+\([9]{2}[8]\)[0-9]{2}[0-9]{3}-[0-9]{2}-[0-9]{2})/);


class SignUpPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        firstname: '',
        lastname: '',
        phoneNumber: '',
        password: '',
        errorFirstname: '',
        errorLastname: '',
        errorPhoneNumber: '',
        errorPassword: ''
      },
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  validate() {
    const { user } = this.state;
    let errorFirstname = '';
    let errorLastname = '';
    let errorPhoneNumber = '';
    let errorPassword = '';

    if (!user.firstname) {
      errorFirstname = 'Name is missing!';
    } else if (user.firstname.length < 3) {
      errorFirstname = 'Name cannot be less than 3 characters!';
    }

    if (!user.lastname) {
      errorLastname = 'Lastname is missing!';
    } else if (user.lastname.length < 3) {
      errorLastname = 'Lastname cannot be less than 3 characters!';
    }

    if (user.phonenumber !== numberRegex) {
      errorPhoneNumber = 'Invalid phonenumber!';
    }
    // if (user.phoneNumber.length < 12) {
    //   errorPhoneNumber = 'Invalid phonenumber!';
    // } else (!user.phoneNumber.includes('+')) {
    //   errorPhoneNumber = 'Incorrect phone number, (+) is missing';
    // }

    if (!user.password) {
      errorPassword = 'Password is missing!';
    } else if (user.password.length < 6) {
      errorPassword = 'Password cannot be less than 6 characters!';
    }

    if (errorPhoneNumber || errorFirstname || errorLastname || errorPassword) {
      this.setState({
        user: {
          ...user,
          errorFirstname,
          errorLastname,
          errorPhoneNumber,
          errorPassword
        }
      });
      return false;
    }

    return true;
  }


  handleSubmit(e) {
    e.preventDefault();
    const { user } = this.state;
    const isValid = this.validate();
    if (isValid) {
      console.log(user);
      // clear form
      this.setState({
        user: {
          firstname: '',
          lastname: '',
          phoneNumber: '',
          password: '',
          errorFirstname: '',
          errorLastname: '',
          errorPhoneNumber: '',
          errorPassword: ''
        },
        submitted: true
      });
    }
    // if (user.firstname && user.lastname && user.phoneNumber && user.password) {
    //   this.props.register(user);
    // }
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
          <Input
            type="tel"
            name="phoneNumber"
            placeholder="Phone number"
            value={user.phoneNumber}
            onChange={this.handleChange}
          />
          <ErrorMessage>{user.errorPhoneNumber}</ErrorMessage>
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
