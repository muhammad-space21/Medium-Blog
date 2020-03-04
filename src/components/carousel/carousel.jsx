import  React from 'react';

import { Carousel } from 'react-bootstrap';

import styled from 'styled-components';



const CarouselStyled = styled(Carousel)`
    width: 700px;
    height: 500px;
    background-color: #CEFCE9; 
`;
const ItemStyled = styled(Carousel.Item)`
    /* width: 100%;
    height: 100%; */
    /* display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content:  center; */
    margin-top: 200px;
`;

const P = styled.div`
    font-size: 14px;
    /* padding-right: 100px;
    padding-left: 100px;
    margin-top: -200px; */
    /* display: flex;
    flex-flow: column nowrap; */
    /* align-items: center; */
    /* justify-content: center; */

`;

class CarouselMain extends React.Component {

    render() {
        return (
            <CarouselStyled>
            <Carousel>
            <ItemStyled>
            <Carousel.Item>
                <P>
                In a web full of pseudo thought-leaders, 
                Medium is the one place that 
                I can reliably come to and be better informed in 
                the easiest way possible of the things that matter to me.
                </P>
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            </ItemStyled>
            </Carousel>
            </CarouselStyled>
        );
    };
};

export default CarouselMain;


