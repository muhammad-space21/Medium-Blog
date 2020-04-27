/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import {
  StyledContainer,
  Heading,
  FormStyled,
  TextWrapper,
  Title,
  Input,
  HelpLink,
  ErrorMessage
} from './styles';

import ButtonPrimary from '../../components/ButtonPrimaryMedium/index';
import SpinnerSmall from '../../components/spinnerSmall';


class ResetPasswordPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      code: '',
      new_password: '',
      confirm_password: '',
      submitted: false,
      loading: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  passwordMatch() {
    const { confirm_password, new_password } = this.state;

    if (confirm_password !== new_password) {
      return false
    } else {
      return true
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const valid = this.passwordMatch();
    const { code, new_password, confirm_password } = this.state;
    this.setState({ submitted: true })
    // clear form
    if (valid && code && new_password && confirm_password) {
      this.setState({
        code: '',
        new_password: '',
        confirm_password: '',
        submitted: false,
        loading: true
      })
      console.log(this.state);
    }
    if (code && new_password && confirm_password) {
      // this.props.signUp(user);
    } else {
      console.log('not all inputs are entered')
    }
  }

  render() {
    const { code, new_password, confirm_password, submitted, loading } = this.state;
    return (
      <StyledContainer>
        <FormStyled onSubmit={this.handleSubmit}>
          <TextWrapper>
            <Heading>Reset Password</Heading>
            <Title>Please enter the code sent to your phone number</Title>
          </TextWrapper>

          <Input
            type="text"
            name="code"
            placeholder="Code"
            value={code}
            onChange={this.handleChange}
          />
          { 
            submitted && !code &&
            <ErrorMessage>Code is required!</ErrorMessage>
          }

          <Input
            type="password"
            name="new_password"
            placeholder="New Password"
            value={new_password}
            onChange={this.handleChange}
          />
          { 
            submitted && !new_password && 
            <ErrorMessage>New password is required!</ErrorMessage>
          }
          {
            new_password !== '' && new_password.length < 6 ? 
            <ErrorMessage>New password must be more than 6 characters</ErrorMessage>
            : null
          }

          <Input
            type="password"
            name="confirm_password"
            placeholder="Confirm Password"
            value={confirm_password}
            onChange={this.handleChange}
          />
          { 
            submitted && !confirm_password && 
            <ErrorMessage>Confirm the password!</ErrorMessage>
          }
          {/* {
            new_password !== '' && new_password !== confirm_password ? 
            <ErrorMessage>Passwords should match</ErrorMessage>
            : null
          } */}
          {
            loading ? <ButtonPrimary btnForm disable><SpinnerSmall /></ButtonPrimary>
            : 
            <ButtonPrimary btnForm>Submit</ButtonPrimary>
          }
          <HelpLink to="/help">Something is wrong, need help ?</HelpLink>
        </FormStyled>
      </StyledContainer>
    );
  }
}


export default ResetPasswordPage;
