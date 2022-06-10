import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
    * {
        transition: 300ms;
    }

    ul {
        list-style-type: none;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    p {
        font-weight: 400;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    a:hover {
        color: #6abcea;
    }

    @media (max-width: 48em) {
        padding: 0;
        margin: 0;
    }
`;

const Header = styled.div`
    padding: 0;
    margin: 0;
    height: 7em;
    width: 100%;
    display: block;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`;

const CardContainer = styled.a`
    background: ${(props) => props.theme.body};
    width: 100%;
    display: inline-block;
    margin: 0;
    right: 0;

    &:hover {
        transform: scale(1.03);
    }

    @media (max-width: 48em) {
        width: 95%;
        max-width: 95%;
        margin: 1em;
        display: block;
    }
`;
const Content = styled.div`
    padding: 1em 1em 2em 1em;
    margin: 0;

    .header,
    .infor {
        display: table;
        width: 100%;
    }
    .title {
        font-size: ${(props) => props.theme.fontxl};
        margin: 0;
        display: table-cell;
    }
`;
const InforSection = styled.div`
    display: table-cell;
    text-transform: uppercase;
    text-align: center;

    &:first-of-type {
        text-align: left;
        padding-right: 2em;
    }

    &:last-of-type {
        text-align: right;
    }

    label {
        display: block;
        color: rgba(0, 0, 0, 0.5);
        margin-bottom: 0.5em;
        font-size: ${(props) => props.theme.fontxs};
        margin-right: 0.5em;
    }

    span {
        font-weight: 700;
        font-size: ${(props) => props.theme.fontsm};
    }
`;
const Card = () => {
    return (
        <Section>
            <CardContainer href='/tour/tourInfo'>
                <Header>
                    <img
                        alt='cover'
                        src='https://picsum.photos/500/400?random=1'
                    />
                </Header>
                <Content>
                    <div className='header'>
                        <a>
                            <h3 className='title'>Du lịch tắm biển mùa đông</h3>
                        </a>
                    </div>
                    <div className='info'>
                        <InforSection>
                            <label>From &amp; To</label>
                            <span>
                                Sun 8 Sept - <br /> Tues 10 Sept
                            </span>
                        </InforSection>
                        <InforSection>
                            <label>Slot</label>
                            <span>35</span>
                        </InforSection>
                        <InforSection>
                            <label>Valid</label>
                            <span>18</span>
                        </InforSection>
                        <InforSection>
                            <label>Amount</label>
                            <span>300.000</span>
                        </InforSection>
                    </div>
                </Content>
            </CardContainer>
        </Section>
    );
};

export default Card;
