import React from 'react';

import styled from 'styled-components';

import { Container } from 'react-bootstrap';

import HashtagIcon from '../../assets/icons/hashtag.copped.jfif';


const Hashtag = styled.div`
    width: fit-content;
    height: 42px;
    background-color: #F2F2F2;
    border-radius: 20px;
    text-align: center;
    font-size: 19px;
    color: #696969;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-right: 10px;
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left: 4px;
    margin-right: 4px;


    &:hover {
        cursor: pointer;
    }

`;
const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    text-align: center;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 40px;
`;
const Sqr = styled.div`
    background-color: black;
    width: 30px;
    height: 30px;
    border-radius: 50px;
    margin-left: 5px;
    margin-right: 6px;
    /* box-shadow: 2px, 2px, 2px black; */

    img {
        width: 18px;
        height: 18px;
        margin-bottom: 5px;
    }
`;

const Hashtags = () => (
    <>
    <Container>

        <Wrapper>
            <Hashtag><Sqr><img src={HashtagIcon} alt='hashtag' /></Sqr>Future</Hashtag>
            <Hashtag><Sqr><img src={HashtagIcon} alt='hashtag' /></Sqr>OneZero</Hashtag>
            <Hashtag><Sqr><img src={HashtagIcon} alt='hashtag' /></Sqr>Technology</Hashtag>
            <Hashtag><Sqr><img src={HashtagIcon} alt='hashtag' /></Sqr>Elemental</Hashtag>
            <Hashtag><Sqr><img src={HashtagIcon} alt='hashtag' /></Sqr>Health</Hashtag>
            <Hashtag><Sqr><img src={HashtagIcon} alt='hashtag' /></Sqr>Science</Hashtag>
            <Hashtag><Sqr><img src={HashtagIcon} alt='hashtag' /></Sqr>GEN</Hashtag>
            <Hashtag><Sqr><img src={HashtagIcon} alt='hashtag' /></Sqr>Business</Hashtag>

            <Hashtag><Sqr><img src={HashtagIcon} alt='hashtag' /></Sqr>Market</Hashtag>
            <Hashtag><Sqr><img src={HashtagIcon} alt='hashtag' /></Sqr>Work</Hashtag>
            <Hashtag><Sqr><img src={HashtagIcon} alt='hashtag' /></Sqr>Culture</Hashtag>
            <Hashtag><Sqr><img src={HashtagIcon} alt='hashtag' /></Sqr>ZORA</Hashtag>
            <Hashtag><Sqr><img src={HashtagIcon} alt='hashtag' /></Sqr>Tenderly</Hashtag>
            <Hashtag><Sqr><img src={HashtagIcon} alt='hashtag' /></Sqr>Heated</Hashtag>
            <Hashtag><Sqr><img src={HashtagIcon} alt='hashtag' /></Sqr>Programming</Hashtag>

            <Hashtag><Sqr><img src={HashtagIcon} alt='hashtag' /></Sqr>Design</Hashtag>
            <Hashtag><Sqr><img src={HashtagIcon} alt='hashtag' /></Sqr>LGBTQIA</Hashtag>
            <Hashtag><Sqr><img src={HashtagIcon} alt='hashtag' /></Sqr>Neuroscience</Hashtag>
            <Hashtag><Sqr><img src={HashtagIcon} alt='hashtag' /></Sqr>Modus</Hashtag>
            <Hashtag><Sqr><img src={HashtagIcon} alt='hashtag' /></Sqr>Politics</Hashtag>
            <Hashtag><Sqr><img src={HashtagIcon} alt='hashtag' /></Sqr>Relationships</Hashtag>
            <Hashtag><Sqr><img src={HashtagIcon} alt='hashtag' /></Sqr>Human Parts</Hashtag>

            <Hashtag><Sqr><img src={HashtagIcon} alt='hashtag' /></Sqr>Self</Hashtag>
            <Hashtag><Sqr><img src={HashtagIcon} alt='hashtag' /></Sqr>Startups</Hashtag>
            <Hashtag><Sqr><img src={HashtagIcon} alt='hashtag' /></Sqr>Cryptocurrency</Hashtag>
            <Hashtag><Sqr><img src={HashtagIcon} alt='hashtag' /></Sqr>Forge</Hashtag>
            <Hashtag><Sqr><img src={HashtagIcon} alt='hashtag' /></Sqr>Data Science</Hashtag>
            <Hashtag><Sqr><img src={HashtagIcon} alt='hashtag' /></Sqr>Productivity</Hashtag>   

            <Hashtag><Sqr><img src={HashtagIcon} alt='hashtag' /></Sqr>Artificial Intelligence</Hashtag>
            <Hashtag><Sqr><img src={HashtagIcon} alt='hashtag' /></Sqr>Election2020</Hashtag>             

        </Wrapper>
    </Container>
    </>
);


export default Hashtags;