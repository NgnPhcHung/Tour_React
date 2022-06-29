import axios from 'axios';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { currencyFormat } from '../../../../Handler/currency';

const CardContainer = styled.ul`
    width: 95%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    padding: 1rem 0.5rem;
    cursor: pointer;
    background-color: ${(props) => `rgba(${props.theme.textRgba}, 0.2)`};
    &:hover {
        box-shadow: 0px 25px 15px -3px rgba(0, 0, 0, 0.1);
    }
    li {
        list-style-type: none;
    }
`;

const Name = styled.h4`
    max-width: 15rem;
    width: 20rem;
    padding-right: 2rem;
`;

const Title = styled.h3`
    font-size: ${(props) => props.theme.fontmd};
    font-weight: 700;
    width: 35rem;
    color: ${(props) => `rgba(${props.theme.textRgba}, 0.8)`};
    margin-left: 1rem;
    p {
        margin-top: 0.5rem;
        opacity: 0.6;
        font-size: ${(props) => props.theme.fontsm};
    }
`;

const Status = styled.h4`
    color: ${(props) =>
        props.what == 0
            ? `var(--yellow)`
            : props.what === 1
            ? `var(--green)`
            : props.what === 2
            ? `var(--blue)`
            : props.what === 3
            ? `var(--red)`
            : ''};
    padding-right: 2rem;
    width: 15rem;
`;

const Order = ({ data }) => {
    // console.log(data.Status);
    const [tourData, setTour] = useState([]);
    const [tourValue, setTourValue] = useState(0);
    const getTour = async () => {
        //calculate money
        const response = await axios.get(
            `http://localhost:3100/order/details/${data.OID}`
        );

        setTourValue(parseInt(response?.data.results[0].Amount));

        const res = await axios.get(
            `http://localhost:3100/tour/details/${data.TourID}`
        );
        // tourData.push(res?.data.results[0]);
        setTour(res?.data.results[0]);
    };

    useEffect(() => {
        getTour();
    }, []);

    // console.log(tourData);
    const price = tourData.Price;

    if (typeof price === 'number') {
        currencyFormat(price);
    }
    return (
        <div>
            <CardContainer>
                <Title>
                    {tourData.TourName}
                    <p>{tourData.Address}</p>
                </Title>
                <Name>
                    {typeof price === 'number' ? currencyFormat(price) : ''}
                </Name>
                <Status what='10'>{data.OrderedSlot}</Status>
                <Name>{currencyFormat(tourValue)}</Name>
                <Status what={data.Status}>
                    {data.Status == 0
                        ? 'Chờ duyệt'
                        : data.Status == 1
                        ? 'Chờ tour'
                        : data.Status == 2
                        ? 'Hoàn thành'
                        : 'Đã huỷ'}
                </Status>
                <Name>{moment(data.OrderTime).utc().format('DD-MM-YYYY')}</Name>
            </CardContainer>
        </div>
    );
};

export default Order;
