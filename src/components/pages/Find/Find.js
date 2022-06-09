import React from 'react';
import styled from 'styled-components';
import FindCard from './FindCard';

const Container = styled.div`
    padding-top: 5rem;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${(props) => props.theme.body};
    padding-bottom: 5rem;
`;

const ListContainer = styled.div`
    position: relative;
    min-width: 90vw;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 2px 12px 20px -3px ${(props) => `rgba(${props.theme.textRgba}, 0.6)`};

    &::before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: calc(100% - 75px);
        height: 100%;
        background: ${(props) => props.theme.body};
    }
    h3 {
        position: relative;
        color: ${(props) => `rgba(${props.theme.textRgba}, 0.6)`};
        font-size: 1.5rem;
        margin-bottom: 20px;
        padding-left: 70px;
    }
`;

const HeaderContainer = styled.div`
    height: 5rem;
    align-self: flex-start;
    padding-left: 3rem;
    h5 {
        font-size: ${(props) => props.theme.fontxl};
        color: ${(props) => props.theme.text};
    }
`;

const Find = ({ text }) => {
    return (
        <Container>
            <HeaderContainer>
                <h5>Kết quả trả về:</h5>
            </HeaderContainer>
            <ListContainer>
                <FindCard />
                <FindCard />
                <FindCard />
                <FindCard />
                <FindCard />
                <FindCard />
            </ListContainer>
        </Container>
    );
};

export default Find;
