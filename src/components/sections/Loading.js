import styled from 'styled-components';
import React from 'react';

const Loader = styled.div`
    padding-top: 12rem;
    width: 15rem;
    height: 7.5rem;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    justify-content: space-between;
`;

const Text = styled.span`
    font-size: ${(props) => props.theme.fontmd};
    text-transform: uppercase;
    margin: auto;
`;

const Dot = styled.div`
    @keyframes load {
        from {
            transform: scaleX(1.25);
        }
        to {
            transform: translateY(-5rem) scaleX(1);
        }
    }

    font-size: ${(props) => props.theme.fontxl};
    font-weight: 700;
    border-radius: 50%;
    color: ${(props) => props.theme.text};
    animation: load 0.5s alternate infinite;

    &:nth-child(2) {
        animation-delay: 0.16s;
    }

    &:nth-child(3) {
        animation-delay: 0.32s;
    }

    &:nth-child(4) {
        animation-delay: 0.48s;
    }

    &:nth-child(5) {
        animation-delay: 0.64s;
    }

    &:nth-child(6) {
        animation-delay: 0.8s;
    }

    &:nth-child(7) {
        animation-delay: 0.96s;
    }
`;

const Loading = () => {
    return (
        <div>
            <Loader>
                <Dot>L</Dot>
                <Dot>O</Dot>
                <Dot>A</Dot>
                <Dot>D</Dot>
                <Dot>I</Dot>
                <Dot>N</Dot>
                <Dot>G</Dot>
                <Text>Please Wait...</Text>
            </Loader>
        </div>
    );
};

export default Loading;
