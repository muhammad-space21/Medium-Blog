import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

import {
  StyledContainer,
  Heading,
  FormStyled,
  TextWrapper,
  ResendCodeBtn,
  Container,
  Title
} from './styles';

import ButtonPrimary from '../../components/ButtonPrimaryMedium/index';

class ForgotPasswordPage extends React.Component {
  constructor() {
    super();

    this.state = {
      phone: '',
      submitted: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange = (e) => {
    // const { phone } = this.state;
    this.setState({
      [e.target.name]: e.target.value
    });
  }


  handleSubmit = (e) => {
    e.preventDefault();

    const { phone } = this.state;
    this.setState({ submitted: true })
    // clear form
    if (phone) {
      this.setState({
        phone: ''
      })
      console.log(this.state);
    }
  }


  render() {
    const { phone } = this.state; 

    return (
      <StyledContainer>
        <FormStyled onSubmit={this.handleSubmit}>
          <TextWrapper>
            <Heading>Forgot Password ?</Heading>
            <Title>Enter your phone number and reset the password</Title>
          </TextWrapper>
          <Container>
            <PhoneInput
              type="tel"
              name="phone"
              country="uz"
              value={phone}
              onChange={this.handleChange}
            />
          </Container>
          <ButtonPrimary btnForm>Submit</ButtonPrimary>
          <ResendCodeBtn>Resend the code</ResendCodeBtn>
        </FormStyled>
      </StyledContainer>
    );
  }
}


export default ForgotPasswordPage;
