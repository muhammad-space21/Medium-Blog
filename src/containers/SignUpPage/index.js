/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

import { signUp } from  '../../redux/modules/signUp/signupAction';

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
import SpinnerSmall from '../../components/spinnerSmall';


class SignUpPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: '',
      secondname: '',
      phone: '',
      password: '',
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handlePhoneChange = (e) => {
    this.setState({ phone: e });
  }


  handleSubmit = (e) => {
    e.preventDefault();
    const {firstname, secondname, phone, password} = this.state;
    this.setState({ submitted: true })
    // clear form
    if (firstname && secondname && phone && password) {
      this.setState({
        firstname: '',
        secondname: '',
        phone: '',
        password: '',
        submitted: false
      })
      console.log(this.state);
    }
    // sign up user
    if (firstname && secondname && phone && password) {
      this.props.signup(firstname, secondname, phone, password);
    } else {
      console.log('not all inputs are entered')
    }
  }

  render() {
    const { firstname, secondname, phone, password, submitted } = this.state;
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
            value={firstname}
            onChange={this.handleChange}
          />
          { 
            submitted && !firstname &&
            <ErrorMessage>Name is missing!</ErrorMessage>
          }
          {
            firstname !== '' && firstname.length < 3 ?
            <ErrorMessage>Name must be more than 2 characters</ErrorMessage>
            : null
          }

          <Input
            type="text"
            name="secondname"
            placeholder="Lastname"
            value={secondname}
            onChange={this.handleChange}
          />
          { 
            submitted && !secondname && 
            <ErrorMessage>Lastname is missing!</ErrorMessage>
          }
          {
            secondname !== '' && secondname.length < 3 ? 
            <ErrorMessage>Lastname must be more than 2 characters</ErrorMessage>
            : null
          }

          <Container>
            <PhoneInput
              type="tel"
              name="phone"
              country="uz"
              value={phone}
              onChange={this.handlePhoneChange}
            />
            { 
              submitted && !phone && 
              <ErrorMessage>Phone number is missing!</ErrorMessage>
            }
            {
              phone !== '' && phone.length < 12 ? 
              <ErrorMessage>Invalid phone number</ErrorMessage>
              : null
            }
          </Container>

          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={this.handleChange}
          />
          { 
            submitted && !password && 
            <ErrorMessage>Password is missing!</ErrorMessage>
          }
          {
            password !== '' && password.length < 6 ? 
            <ErrorMessage>Password must be more than 6 characters</ErrorMessage>
            : null
          }

          <CheckboxContainer>
            <input type="checkbox" />
            <Label htmlfor="checkbox">
              Sign up to receive occasional emails from BiznesRivoj.
              You may unsubscribe at any time.
            </Label>
          </CheckboxContainer>
          {
            this.props.loading ? <ButtonPrimary btnForm disable><SpinnerSmall /></ButtonPrimary>
            : 
            <ButtonPrimary btnForm>Create Account</ButtonPrimary>
          }
          <PrivacyLink to="/privacy-policy">Privacy Policy</PrivacyLink>
        </FormStyled>
      </StyledSignUpPage>
    );
  }
}

SignUpPage.defaultProps = {
  loading: false,
  error: false
}

SignUpPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.bool,
  signup: PropTypes.func.isRequired
}


const mapStateToProps = (state) => ({
  loading: state.signupReducer.loading,
  error: state.signupReducer.error
})


const mapDispatchToProps = (dispatch) => ({
  signup: () => dispatch(signUp())
})


export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);
