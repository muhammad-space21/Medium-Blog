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


class ResetPasswordPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        code: '',
        new_password: '',
        confirm_password: ''
      },
      submitted: false
    };

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
    if (user.code && user.new_password && user.confirm_password) {
      this.setState({
        user: {
          code: '',
          new_password: '',
          confirm_password: ''
        },
        submitted: false
      })
      console.log(user);
    }
    if (user.code && user.new_password && user.confirm_password) {
      // this.props.signUp(user);
    } else {
      console.log('not all inputs are entered')
    }
  }

  render() {
    const { user, submitted } = this.state;
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
            value={user.code}
            onChange={this.handleChange}
          />
          { 
            submitted && !user.code &&
            <ErrorMessage>Code is required!</ErrorMessage>
          }

          <Input
            type="password"
            name="new_password"
            placeholder="New Password"
            value={user.new_password}
            onChange={this.handleChange}
          />
          { 
            submitted && !user.new_password && 
            <ErrorMessage>New password is required!</ErrorMessage>
          }
          {
            submitted && user.new_password.length < 6 ? 
            <ErrorMessage>New password must be more than 6 characters</ErrorMessage>
            : null
          }

          <Input
            type="password"
            name="confirm_password"
            placeholder="Confirm Password"
            value={user.confirm_password}
            onChange={this.handleChange}
          />
          { 
            submitted && !user.confirm_password && 
            <ErrorMessage>Confirm the password!</ErrorMessage>
          }
          {
            submitted && user.new_password !== user.confirm_password ? 
            <ErrorMessage>Passwords don't match</ErrorMessage>
            : null
          }

          <ButtonPrimary btnForm>Submit</ButtonPrimary>
          <HelpLink to="/help">Something is wrong, need help ?</HelpLink>
        </FormStyled>
      </StyledContainer>
    );
  }
}


export default ResetPasswordPage;
