import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    color: ${(props) => props.theme.text};
    position: relative;
    padding: 2rem 5rem;

    @media (max-width: 64em) {
        padding: 2rem 2rem;
    }
    @media (max-width: 64em) {
        padding: 0.5rem 1rem;
    }
`;

const TourName = styled.h3`
    font-size: ${(props) => props.theme.fontxl};
    font-weight: 700;
`;
const TourLoc = styled.h5`
    font-size: ${(props) => props.theme.fontmd};
    font-weight: 500;
`;
const ImageContainer = styled.div`
    height: 25rem;
    align-items: center;
    justify-content: center;
    padding-top: 1rem;
    position: relative;
    width: 100%;
    cursor: pointer;
    img {
        border-radius: 10px;
        width: 100%;
        height: 25em;
    }

    @media (max-width: 64em) {
        img {
            width: calc(100vw - 20em);
            left: 0;
        }
    }
    @media (max-width: 48em) {
        img {
            width: 100%;
            left: 0;
        }
    }
`;

const DarkOverlay = styled.div`
    position: absolute;
    border-radius: 10px;
    top: 1rem;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    background-color: ${(props) => `rgba(${props.theme.textRgba}, 0.6)`};

    @keyframes darkOverlay {
        0% {
            opacity: 1;
        }
    }

    &:hover {
        animation: darkOverlay 0.3s both;
        opacity: 0;
    }
`;
const TourBanner = ({ name, des, imgSrc }) => {
    return (
        <Container>
            <TourName>{name}</TourName>
            <TourLoc>{des}</TourLoc>
            <ImageContainer>
                <DarkOverlay />
                <img src={imgSrc} alt='banner img' />
            </ImageContainer>
        </Container>
    );
};

export default TourBanner;
