import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
    padding-top: 10rem;
    width: 100vw;
    height: 25rem;
    position: relative;
    border-top: 2px solid ${(props) => props.theme.text};
    border-top: 2px solid ${(props) => props.theme.text};

    background-color: ${(props) => `rgba(${props.theme.textRgba}, 0.9)`};
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: capitalize;
    overflow: hidden;

    @media (max-width: 48em) {
        height: 15rem;
        flex-direction: column;
    }
`;
const ImgContainer = styled.div`
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    display: flex;
    justify-content: center;

    align-items: center;
    opacity: 0.2;

    img {
        width: 100%;
        height: 100%;
    }

    @media (max-width: 48em) {
        img {
            width: 100%;
            height: 100vh;
        }
    }
`;

const Title = styled.h1`
    font-size: ${(props) => props.theme.fontxxxl};
    color: ${(props) => props.theme.body};
    padding: 1rem 2rem;
    z-index: 10;
    width: 35%;
    left: 0;
    text-transform: capitalize;

    @media (max-width: 64em) {
        top: 0;
        font-size: ${(props) => props.theme.fontxxl};
        text-align: center;
        width: 40%;
    }

    @media (max-width: 48em) {
        font-size: ${(props) => props.theme.fontxl};
        width: 100%;
        padding: 2rem 0;
    }
`;

const BtnContainer = styled.div`
    width: 35%;
    display: flex;
    justify-content: flex-end;

    @media (max-width: 48em) {
        width: 100%;
        justify-content: center;
    }
`;

const JoinNow = styled.button`
    display: inline-block;
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    outline: none;
    border: none;
    font-weight: 600;
    font-size: ${(props) => props.theme.fontsm};
    padding: 1.5rem 3rem;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.2s ease;
    position: relative;
    &:hover {
        transform: scale(0.9);
    }

    &::after {
        content: ' ';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0);
        border: 2px solid ${(props) => props.theme.body};
        width: 100%;
        height: 100%;
        border-radius: 50px;
        transition: all 0.2s ease;
    }

    &:hover::after {
        transform: translate(-50%, -50%) scale(1);
        padding: 0.3rem;
    }
`;
const Banner = () => {
    return (
        <Section>
            <ImgContainer>
                <img
                    src='https://gonatour.vn/vnt_upload/news/04_2020/du_lich_mien_bac_gonatour.jpg'
                    alt='banner-img'
                />
            </ImgContainer>
            <Title>
                Tham gia tour <br /> với chúng tôi
            </Title>
            <BtnContainer>
                <JoinNow>Tham Gia</JoinNow>
            </BtnContainer>
        </Section>
    );
};

export default Banner;
