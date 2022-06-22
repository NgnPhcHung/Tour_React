import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { css } from '@emotion/react';
import { ClimbingBoxLoader, HashLoader, ScaleLoader } from 'react-spinners';

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

const Load = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Name = styled.h4`
    max-width: 15rem;
    width: 20rem;
    padding-right: 2rem;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90%;
    justify-content: space-between;

    font-weight: 300;
    font-size: ${(props) => props.theme.fontmd};
`;

const CardContainer = styled.div`
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
`;

const Order = (ordID) => {
    const override = css`
        display: block;
        margin: 0 auto;
        border-color: red;
    `;

    const [ord, setOrder] = useState({});
    const [ordDetail, setOrdDetail] = useState({});
    const [ordDate, setOrdDate] = useState('');
    const [tour, setTour] = useState();
    const [tourName, setTourName] = useState('');
    const [tourPrice, setTourPrice] = useState();
    const [ordSlot, setOrdSLot] = useState();
    const id = ordID.ordID;

    const [loading, setLoading] = useState(false);

    const getOrder = async () => {
        const response = await axios.get(
            `http://localhost:3100/order/byid/${id}`
        );
        setLoading(true);
        setOrder(response?.data.results[0]);
        setTourName(tour.tourName);
    };

    const OrderDetail = async () => {
        const response = await axios.get(
            `http://localhost:3100/order/ordDetail/${id}`
        );

        const tour = await axios.get(
            `http://localhost:3100/tour/details/${response?.data.results[0].TourID}`
        );

        if (response?.status == 200) {
            setTour(tour?.data.results[0]);
            getOrder();
        }
    };

    useEffect(() => {
        OrderDetail();
        setOrdDate(moment(ord.OrderTime).utc().format('DD-MM-YYYY'));
    }, []);

    return (
        <div>
            {loading ? (
                <CardContainer>
                    <Title>
                        {tour.TourName}
                        <p>{ord.Address}</p>
                    </Title>
                    <Name>{ord.Level}</Name>
                    <Name>{ord.Gender}</Name>
                    <Name>{ord.Email}</Name>
                    <Name>{ord.Phone}</Name>
                    <Name>
                        {moment(ord.OrderTime).utc().format('DD-MM-YYYY')}
                    </Name>
                </CardContainer>
            ) : (
                <Load>
                    <HashLoader />
                </Load>
            )}
        </div>
    );
};

const TourInfor = () => {
    const [datas, setDatas] = useState([]);
    var userID = localStorage.getItem('token').trim();
    userID = userID.replace(/['"]+/g, '');
    const getOrder = async () => {
        const response = await axios.get(
            `http://localhost:3100/order/byCus/${userID}`
        );
        // console.log(response?.data.results);
        setDatas(response?.data.results);
    };
    useEffect(() => {
        getOrder();
    }, []);

    async function fetch1(id) {
        const response = await axios.get(
            `http://localhost:3100/order/ordDetail/${id}`
        );
        return response?.data.results != null;
    }

    return (
        <Container>
            <CardContainer>
                <Title>
                    Tour Name
                    <p></p>
                </Title>
                <Name>Level</Name>
                <Name>Gender</Name>
                <Name>Email</Name>
                <Name>Phone</Name>
                <Name>Order Date</Name>
            </CardContainer>
            {datas.map((item, index) => {
                if (fetch1(item.OID)) return <Order ordID={item.OID} />;
            })}
        </Container>
    );
};

export default TourInfor;
