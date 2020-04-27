import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

import { login } from '../../redux/modules/login/loginActions';
import { logout } from '../../redux/modules/logOut/logoutActions';

import {
  StyledSignUpPage,
  Heading,
  FormStyled,
  TextWrapper,
  Input,
  ForgotPasswordLink,
  Container,
  ErrorMessage
} from './styles';

import ButtonPrimary from '../../components/ButtonPrimaryMedium/index';

class LoginPage extends React.Component {
  constructor() {
    super();

    this.state = {
      phone: '',
      password: '',
      submitted: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
  };


  handleChange = (e) => {
    this.setState({ [ e.target.name]: e.target.value });
  }


  handlePhoneChange = (e) => {
    this.setState({ phone: e });
  }


  handleSubmit = (e) => {
    e.preventDefault();

    const { phone, password } = this.state;
    this.setState({ submitted: true })
    // clear form
    if (phone && password) {
      this.setState({
        phone: '',
        password: '',
        submitted: false
      })
      console.log(this.state);
    }
    if (phone && password) {
      this.props.login(phone, password);
    } else {
      console.log('not all inputs are entered')
    }
  }


  render() {
    const { phone, password, submitted } = this.state; 

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
              onChange={this.handlePhoneChange}
            />
          </Container>
            { 
              submitted && !phone && 
              <ErrorMessage>Phone number is missing!</ErrorMessage>
            }
            {
              phone !== '' && phone.length < 12 ? 
              <ErrorMessage>Invalid phone number</ErrorMessage>
              : null
            }
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
          <ButtonPrimary btnForm>Login</ButtonPrimary>
          <ForgotPasswordLink to="/forgot-password">Forgot Password ?</ForgotPasswordLink>
        </FormStyled>
      </StyledSignUpPage>
    );
  }
}

LoginPage.defaultProps = {
  loading: false,
  error: false,
  token: '',
  alert: {}
}

LoginPage.propTypes = {
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  error: PropTypes.bool,
  token: PropTypes.string,
  alert: PropTypes.object
}

const mapDispatchToProps = (dispatch) => ({
  login: () => dispatch(login()),
  logout: () => dispatch(logout())
})

const mapStateToProps = (state) => ({
  loading: state.loginReducer.loading,
  error: state.loginReducer.error,
  token: state.loginReducer.token,
  alert: state.loginReducer.alert
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
