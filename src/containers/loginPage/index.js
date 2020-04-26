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
      user: {
        phone: '',
        password: ''
      },
      submitted: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange = (e) => {
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [e.target.name]: e.target.value
      }
    });
  }


  handleSubmit = (e) => {
    e.preventDefault();

    const { user } = this.state;
    this.setState({ submitted: true })
    // clear form
    if (user.phone && user.password) {
      this.setState({
        user: {
          phone: '',
          password: ''
        }
      })
      console.log(user);
    }
    if (user.phone && user.password) {
      this.props.login(user.phone, user.password);
    } else {
      console.log('not all inputs are entered')
    }
  }


  render() {
    const { user, submitted } = this.state; 

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
              value={user.phone}
              onChange={this.handleChange}
            />
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
          {
            submitted && user.password.length < 6 ? 
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
