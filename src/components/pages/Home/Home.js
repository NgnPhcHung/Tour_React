import React from 'react';
import styled from 'styled-components';
import CoverVideo from '../../sections/CoverVideo';

const Section = styled.section`
    min-height: ${(props) => `calc(100vh - ${props.theme.navHeight})`};
    width: 100vw;
    position: relative;
    background-color: ${(props) => props.theme.body};
`;

const Home = () => {
    return (
        <Section id='home'>
            <CoverVideo />
        </Section>
    );
};

export default Home;
