import styled from 'styled-components';

// color variables

const modalColor = 'radial-gradient(98.96% 98.96% at 50% 0%, #232A34 0%, #181E27 100%);';
const darkBlue = '#262E38;'
const lightGrey = '#969FAD;'
const mediumGrey = '#7C8798;'

// app styles

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    background: ${modalColor}
    border-radius: 30px;
    width: 412px;
    height: 416px;
    margin: 30vh auto;
`;

export const StarFrame = styled.div`
    background: ${darkBlue}
    border-radius: 50%;
    width: 48px;
    height: 48px;
    margin-left: 32px;
    margin-top: 32px;
    position: absolute;
`;

export const Star = styled.img`
    width: 16.75px;
    height: 16px;
    margin: auto;
    display: block;
    margin-top: 15px;
`;

export const RatingContainer = styled.div`
    margin: 32px;
    margin-top: 90px;
    height: 100%;
`;

export const Header = styled.h1`
    font-weight: 700;
    font-size: 28px;
    color: white;
`;

export const SubHeader = styled.span`
    font-weight: 400;
    font-size: 15px;
    line-height: 24px;
    color: ${lightGrey}
    margin-top: 15px;
`;

export const ButtonRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 50px;
    margin-top: 24px;
`;
export const Button = styled.button`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: none;
    background: ${darkBlue}
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    text-align: center;
    color: ${mediumGrey}
    cursor: pointer;
`;

export const Submit = styled.button`
    width: 100%;
    height: 45px;
    border-radius: 22.5px;;
    border: none;
    background: #FC7614;
    font-weight: 700;
    font-size: 15px;
    line-height: 19px;
    letter-spacing: 2px;
    color: #FFFFFF;
    margin-top: 32px;
    cursor: pointer;
`;
