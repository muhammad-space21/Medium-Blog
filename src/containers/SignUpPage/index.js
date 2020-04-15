import React from 'react';

import axios from 'axios'; 

import { 
    StyledSignUpPage,
    Heading, 
    FormStyled, 
    ImageWrapper,
    TextWrapper,
    Title,
    Input 
} from './styles';

import ButtonPrimary from '../../components/button-primary/button-primary';

import ImageWoman from '../../assets/images/girl_laptop.svg';
import ImageMan from '../../assets/images/man_with_ipad.svg';
import ImageObject from '../../assets/images/Leaves_object.svg';


class SignUpPage extends React.Component {
    constructor () {
        super();

        this.state = {
            full_name: '',
            phone_number: '',
            password: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange = e => {
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
        const { full_name, phone_number, password } = this.state;
        return (
            <StyledSignUpPage>
                    <FormStyled onSubmit={this.handleSubmit}>
                        <TextWrapper>
                            <Heading>Join to Medium.</Heading>
                            <Title>Sign up to get newly updates from Medium.</Title>
                            <Title>Already have an account ? <span>Sign in</span></Title>
                        </TextWrapper>
                        <Input
                            type="text"
                            name='full_name'
                            placeholder="Fullname"
                            value={full_name}
                            onChange={this.handleChange}
                            required
                            />
                        <Input 
                            type='contact'
                            name='phone_number'
                            placeholder="Phone number"
                            value={phone_number}
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
                            <ButtonPrimary >Submit</ButtonPrimary>
                    </FormStyled>
                <ImageWrapper>
                    <img src={ImageWoman} alt='illustration' />
                    <img src={ImageMan} alt='illustration' />
                    <img src={ImageObject} alt='illustration' />
                </ImageWrapper>
            </StyledSignUpPage>
        );
    };
};


export default  SignUpPage;