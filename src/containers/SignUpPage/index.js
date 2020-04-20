import React from 'react';

import axios from 'axios'; 

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
  constructor () {
    super();

    this.state = {
      fullName: '',
      phoneNumber: '',
			password: '',
			email: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange = ( e ) => { 
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

  render () {
    const { fullName, phoneNumber, password, email } = this.state;
  	return (
      <StyledSignUpPage>
        <FormStyled onSubmit={this.handleSubmit}>
          <TextWrapper>
            <Heading>Join to BiznesRivoj.</Heading>
            <Title>Sign up to get newly updates from BiznesRivoj.</Title>
            <Title>Already have an account ? <SignInLink to='login'>Sign in</SignInLink></Title>
          </TextWrapper>
          <Input
          	type="name"
            name='fullName'
            placeholder="Fullname"
          	value={fullName}
            onChange={this.handleChange}
            required
          />
					<Input
          	type="email"
            name='email'
            placeholder="Email"
          	value={email}
            onChange={this.handleChange}
            required
          />
          <Input 
            type='contact'
            name='phoneNumber'
            placeholder="Phone number"
            value={phoneNumber}
            onChange={this.handleChange}
            required
          />
          <Input
            type="password"
            name='password'
            placeholder="Password"
            value={password}
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
					<PrivacyLink to='/privacy-policy'>Privacy Policy</PrivacyLink>
        </FormStyled>
      </StyledSignUpPage>
    );
  };
};


export default  SignUpPage;