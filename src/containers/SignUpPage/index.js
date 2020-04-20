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
  SignInLink
} from './styles';

import ButtonPrimary from '../../components/ButtonPrimaryMedium/index';

class SignUpPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        fullName: '',
        phoneNumber: '',
        password: '',
        email: ''
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

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const { user } = this.state;
    // if (user.firstName && user.lastName && user.username && user.password) {
    //     this.props.register(user);
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
            name="fullName"
            placeholder="Fullname"
            value={user.fullName}
            onChange={this.handleChange}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={this.handleChange}
            required
          />
          <Input
            type="contact"
            name="phoneNumber"
            placeholder="Phone number"
            value={user.phoneNumber}
            onChange={this.handleChange}
            required
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={this.handleChange}
            required
          />
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
