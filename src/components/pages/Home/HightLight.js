import React, { useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';
import Carousel from '../../sections/Carousel';
import ConfettiComponent from '../../sections/ConfettiComponent';
import Showcase from './Showcase';

const Section = styled.div`
    position: relative;
    min-height: 100vh;
    width: 100vw;
    display: flex;
    overflow: hidden;
    justify-content: flex-start;
    align-items: center;

    @media (max-width: 64em) {
        height: 100vh;
        padding-bottom: 5em;
        background-color: ${(props) => props.theme.text};
    }
    @media (max-width: 48em) {
        /* min-height: 100vh;
        padding-bottom: 0;
        padding-right: -100em; */
        display: flex;
        flex-direction: column;
        justify-content: center;
    align-items: center;
    }
`;

const TitleContainer = styled.div`
    display: flex;
    position: absolute;
    left: 24%;
    z-index: 2;
    top: 1rem;

    @media (max-width: 64em) {
        justify-content: center;
        align-items: center;
        margin-bottom: 0;
        left: 0;
        right: 0;

        h1 {
            font-size: ${(props) => props.theme.fontxxxl};
            font-family: 'Pacifico';
            font-weight: 300;
            text-shadow: 1px 3px 3px ${(props) => props.theme.text};
            color: ${(props) => props.theme.body};
        }
    }

    @media (max-width: 48em) {
        font-size: ${(props) => props.theme.fontsm};
    }
`;
const Title1 = styled.h1`
    font-size: ${(props) => props.theme.fontxxxl};
    font-family: 'Pacifico';
    font-weight: 300;
    text-shadow: 1px 3px 3px ${(props) => props.theme.text};
    color: ${(props) => props.theme.body};
`;
const Title2 = styled.h1`
    font-size: ${(props) => props.theme.fontxxxl};
    font-family: 'Pacifico';
    font-weight: 300;
    text-shadow: 1px 3px 3px ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
`;

const Left = styled.div`
    width: 33rem;
    background-color: ${(props) => props.theme.text};
    color: ${(props) => props.theme.body};
    font-size: ${(props) => props.theme.lg};

    min-height: 100vh;
    z-index: 1;

    position: absolute;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
        font-size: calc(0.5rem + 1vw);
        line-height: 1.5;
        font-weight: 300;
        width: 80%;
        margin: 0 auto;
    }

    @media (max-width: 64em) {
        width: 100vw;
        height: 45vh;
        top: -10em;
    }
`;

const Right = styled.div`
    position: absolute;
    left: 50rem;
    min-height: 100vh;
    width: 35vw;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    h1 {
        width: 5rem;
        margin: 0 rem;
    }

    @media (max-width: 64em) {
        z-index: 3;
        width: 100rem;
        height: auto;
        left: 10em;
        top: 0;
        padding-left: 0;
        position: static;
        padding-top: 20em;
    }
    @media (max-width: 48em) {
        /* left: 0; */
        margin-left: 25rem;

    }
`;

const HightLight = () => {
    return (
        <Section id='hightlight'>
            <ConfettiComponent />
            <TitleContainer>
                <Title1>Hight</Title1>
                <Title2>Light</Title2>
            </TitleContainer>
            <Left>
                <p>
                    Một Đà Lạt mộng mơ rực rỡ sắc hoa quanh năm, một thành phố
                    biển Đà Nẵng đáng sống nhất Việt Nam, một cố đô Huế lãng
                    mạn, một thủ đô Hà Nội cổ kính và cả những bãi biển đẹp nức
                    lòng du khách chính là những tour du lịch trong nước đang
                    “hot” nhất hiện nay và sẵn sàng chào đón khách du lịch trong
                    và ngoài nước.
                </p>
            </Left>
            <Right>
                <Carousel />
            </Right>
        </Section>
    );
};
export default HightLight;
