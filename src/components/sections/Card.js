import moment from 'moment';
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

    label {
        text-decoration: none;
        color: inherit;
        cursor: pointer;
    }

    label:hover {
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

const CardContainer = styled.div`
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
        padding-right: 3em;
    }

    &:last-of-type {
        text-align: right;
    }

    &:first-child label {
        padding-left: 0rem;
    }

    label {
        display: block;
        color: rgba(0, 0, 0, 0.5);
        margin-bottom: 0.5em;
        font-size: ${(props) => props.theme.fontxs};
        margin-right: 0.5em;
        padding-left: 1.5rem;
    }

    span {
        font-weight: 700;
        font-size: ${(props) => props.theme.fontsm};
    }
`;
const Card = ({ data }) => {
    return (
        <Section>
            <Link
                to={{
                    pathname: `/tour/tourInfo/${data.TourID}`,
                }}
            >
                <CardContainer>
                    <Header>
                        <img alt='cover' src={data.Image} />
                    </Header>
                    <Content>
                        <div className='header'>
                            <label>
                                <h3 className='title'>{data.TourName}</h3>
                            </label>
                        </div>
                        <div className='info'>
                            <InforSection>
                                <label>From &amp; To</label>
                                <span>
                                    {moment(data.BeginDate)
                                        .utc()
                                        .format('DD-MM-YYYY')}{' '}
                                    ⇁ <br />
                                    {moment(data.EndDate)
                                        .utc()
                                        .format('DD-MM-YYYY')}
                                </span>
                            </InforSection>
                            <InforSection>
                                <label>Slot</label>
                                <span>{data.Slot}</span>
                            </InforSection>
                            <InforSection>
                                <label>Valid</label>
                                <span>{data.Slot - data.OrderedSlot}</span>
                            </InforSection>
                            <InforSection>
                                <label>Amount</label>
                                <span>{data.Price}</span>
                            </InforSection>
                        </div>
                    </Content>
                </CardContainer>
            </Link>
        </Section>
    );
};

export default Card;
