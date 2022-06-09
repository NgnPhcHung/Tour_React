import React from 'react';
import styled from 'styled-components';
import Banner from './Banner';
import Logo from '../Logo';
import Bottom from './Bottom';

const Section = styled.section`
    min-height: 100vh;
    width: 100vw;
    background-color: ${(props) => props.theme.body};
    position: relative;
    color: ${(props) => props.theme.text};

    display: flex;
    /* justify-content: center;
    align-items: center; */
    flex-direction: column;
`;

const Container = styled.div`
    width: 75%;
    margin: 2rem auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${(props) => props.theme.text};
`;

const Left = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const MenuItem = styled.ul`
    list-style: none;
    width: 50%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 2fr 3fr;
    grid-gap: 1rem;
    margin-bottom: 1em;
`;

const Item = styled.li`
    width: fit-content;
    cursor: pointer;

    &::after {
        content: ' ';
        display: block;
        width: 0%;
        height: 2px;
        background-color: ${(props) => props.theme.text};
        transition: width 0.3s ease;
    }

    &:hover::after {
        width: 100%;
    }
`;

const Footer = () => {
    const scrollTo = (id) => {
        let element = document.getElementById(id);
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest',
        });
    };
    return (
        <Section>
            <Banner />
            <Container>
                <MenuItem>
                    <Item onClick={() => scrollTo('home')}>Home</Item>
                    <Item onClick={() => scrollTo('hightlight')}>
                        Hightlight
                    </Item>
                    <Item onClick={() => scrollTo('roadmap')}>Roadmap</Item>
                    <Item onClick={() => scrollTo('showcase')}>Showcase</Item>
                    <Item onClick={() => scrollTo('team')}>Team</Item>
                    <Item onClick={() => scrollTo('faq')}>Faq</Item>
                </MenuItem>
            </Container>
            <Bottom />
        </Section>
    );
};

export default Footer;
