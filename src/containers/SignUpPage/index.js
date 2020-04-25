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


class SignUpPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        firstname: '',
        lastname: '',
        phone: '',
        password: ''
      },
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    // const { name, value } = event.target;
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [e.target.name]: e.target.value
      }
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    const { user } = this.state;
    console.log(user);
    if(user) {
      this.setState({
        firstname: '',
        lastname: '',
        phone: '',
        password: ''
      })
    }
    if (user.firstname && user.lastname && user.phone && user.password) {
      this.props.signUp(user);
    }
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
          { 
            submitted && !user.firstname &&
            <ErrorMessage>Name is missing!</ErrorMessage>
          }

          <Input
            type="text"
            name="lastname"
            placeholder="Lastname"
            value={user.lastname}
            onChange={this.handleChange}
          />
          { 
            submitted && !user.lastname && 
            <ErrorMessage>Lastname is missing!</ErrorMessage>
          }

          <Container>
            <PhoneInput
              type="tel"
              name="phone"
              country="uz"
              value={user.phone}
              onChange={this.handleChange}
            />
            { 
              submitted && !user.phone && 
              <ErrorMessage>Phone number is missing!</ErrorMessage>
            }
          </Container>

          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={this.handleChange}
          />
          { 
            submitted && !user.password && 
            <ErrorMessage>Password is missing!</ErrorMessage>
          }

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

SignUpPage.defaultProps = {
  loading: false,
  error: false,
  token: '',
  alert: {},
  signUp: () => {}
}

SignUpPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.bool,
  token: PropTypes.string,
  alert: PropTypes.object,
  signUp: PropTypes.func
}


const mapStateToProps = (state) => ({
  loading: state.signupReducer.loading,
  error: state.signupReducer.error,
  token: state.signupReducer.token,
  alert: state.signupReducer.alert
})


const mapDispatchToProps = (dispatch) => ({
  signup: () => dispatch(signUp())
})


export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);
