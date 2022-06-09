import React from 'react';
import styled from 'styled-components';
import Logo from '../Logo';

const BottomContainer = styled.div`
    width: 75%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Bottom = () => {
    return (
        <BottomContainer>
            <Logo />
            <span>&copy;{new Date().getFullYear()} Hân hạnh chào đón bạn</span>
            <span>Make with &#10084; by Hungdeptrai </span>
        </BottomContainer>
    );
};

export default Bottom;
