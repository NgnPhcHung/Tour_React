import styled from 'styled-components';
import React from 'react';

const Pay = styled.a`
    display: flex;
    text-decoration: none;
    align-self: flex-end;
    border-radius: 10px;
    width: 25rem;
    height: 20rem;
    margin-top: 20px;
    position: sticky;
    bottom: 20px;
    display: inline-block;
    background: ${(props) => props.theme.text};
    color: ${(props) => props.theme.body};
    padding: 20px 40px;
    z-index: 10;
    opacity: 0.7;
`;

const Title = styled.h4`
    font-size: ${(props) => props.theme.fontxl};
    text-transform: capitalize;
    color: ${(props) => props.theme.body};
    display: flex;
    justify-content: flex-start;
    margin: 1rem auto;
    border-bottom: 2px solid ${(props) => props.theme.body};
`;
const Checkout = () => {
    return (
        <Pay>
            <Title>Checkout</Title>
        </Pay>
    );
};

export default Checkout;
