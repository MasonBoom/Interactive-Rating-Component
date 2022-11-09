import React from 'react';
import { 
    Main, 
    Header,
    SubHeader,
} from '../app.styles';
import {
    MainImg,
    RatingScore,
} from './confirmation.styles';
import confirmation from '../assets/confirmation.svg'

function Confirmation({ rating }) {
    return (
        <Main>
            <MainImg src={confirmation} alt='confirmation image' />
            <RatingScore>You selected {rating} out of 5</RatingScore>
            <Header className='confirmation' >Thank you!</Header>
            <SubHeader className='confirmation' >
                We appreciate you taking the time to give a rating. 
                If you ever need more support, don't hesitate to 
                get in touch!
            </SubHeader>
        </Main>
    );
}

export default Confirmation;
