import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { HashLoader } from 'react-spinners';
import {
    SwipeableList,
    SwipeableListItem,
} from '@sandstreamdev/react-swipeable-list';
import { confirm } from 'react-confirm-box';

import { ToastContainer, toast } from 'react-toastify';

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
const Status = styled.h4`
    color: ${(props) =>
        props.what == 0
            ? `var(--yellow)`
            : props.what == 1
            ? `var(--green)`
            : props.what == 2
            ? `var(--orange)`
            : ''};
    padding-right: 2rem;
    width: 15rem;
`;

const ScrollList = styled.div`
    overflow-y: scroll;
    height: 20rem;
    &::-webkit-scrollbar {
        width: 10px;
        background-color: ${(props) => props.theme.body};
    }
    &::-webkit-scrollbar-thumb {
        background-color: ${(props) => props.theme.text};
        background-image: -webkit-linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.2) 25%,
            transparent 25%,
            transparent 50%,
            rgba(255, 255, 255, 0.2) 50%,
            rgba(255, 255, 255, 0.2) 75%,
            transparent 75%,
            transparent
        );
        border-radius: 10px;
    }
`;

const Order = ({ data }) => {
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

    function currencyFormat(x) {
        x = x.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
        return x;
    }
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
                <Status>{data.OrderedSlot}</Status>
                <Name>{currencyFormat(tourValue)}</Name>
                <Status what={data.Status}>
                    {data.Status == 0
                        ? 'Pending'
                        : data.Status == 1
                        ? 'Approve'
                        : data.Status == 3
                        ? 'Waiting'
                        : 'Cancel'}
                </Status>
                <Name>{moment(data.OrderTime).utc().format('DD-MM-YYYY')}</Name>
            </CardContainer>
        </div>
    );
};

const TourInfor = () => {
    const [datas, setDatas] = useState([]);
    const [loading, setLoad] = useState(false);

    var userID = localStorage.getItem('token').trim();
    userID = userID.replace(/['"]+/g, '');
    const getOrder = async () => {
        const response = await axios.get(
            `http://localhost:3100/order/byuserid/${userID}`
        );

        for (let i = 0; i < response?.data.results.length; i++) {
            let oid = response.data.results[i].OID;
            const res = await axios.get(
                `http://localhost:3100/order/details/${oid}`
            );
            // console.log(res?.data.results[0]);
            datas.push(res?.data.results[0]);
        }

        setLoad(true);
    };

    const deleteOrder = async (index) => {
        const result = await confirm('Are you sure?');
        if (result) {
            // console.log(datas.filter((_, i) => i === index)[0]);
            const delOrd = await axios.delete(
                `http://localhost:3100/order/delete/${
                    datas.filter((_, i) => i === index)[0].OID
                }`
            );

            const getTour = await axios.get(
                `http://localhost:3100/tour/details/${
                    datas.filter((_, i) => i === index)[0].TourID
                }`
            );
            console.log(datas.filter((_, i) => i === index)[0]);
            const tourRes = getTour?.data.results[0];
            const jsonTour = JSON.stringify({
                TourID: tourRes.TourID,
                BeginDate: moment(tourRes.BeginDate).utc().format('YYYY-MM-DD'),
                EndDate: moment(tourRes.EndDate).utc().format('YYYY-MM-DD'),
                Descriptions: tourRes.Descriptions,
                Image: tourRes.Image,
                Location: tourRes.Location,
                OrderedSlot:
                    parseInt(tourRes.OrderedSlot) -
                    parseInt(
                        datas.filter((_, i) => i === index)[0].OrderedSlot
                    ),
                Price: tourRes.Price,
                Slot: tourRes.Slot,
                Status: tourRes.Status,
                TourName: tourRes.TourName,
            });
            const updateTour = await axios.put(
                'http://localhost:3100/tour/update',
                jsonTour,
                {
                    headers: {
                        // 'Access-Control-Allow-Origin': '*',
                        // 'Access-Control-Allow-Credentials': 'true',
                        'Content-Type': 'application/json',
                    },
                    withCredentials: false,
                }
            );

            // console.log(delOrd);
            if (delOrd.data.code == 200 && updateTour.data.code == 200) {
                setDatas((datas) => datas.filter((_, i) => i !== index));
                toast.success('🦄 Wow so easy!', {
                    position: 'bottom-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
            return;
        }
        console.log('You click No!');
    };
    useEffect(() => {
        getOrder();
    }, []);

    return (
        <Container>
            <CardContainer>
                <Title>
                    Tên Tour
                    <p></p>
                </Title>
                <Name>Giá Tour</Name>
                <Status>Chỗ</Status>
                <Name>Tổng</Name>
                <Status>Trạng thái</Status>
                <Name>Ngày đặt</Name>
            </CardContainer>
            <ScrollList>
                {loading ? (
                    datas.map((item, index) => {
                        return (
                            <li key={index} style={{ listStyleType: 'none' }}>
                                <SwipeableList>
                                    <SwipeableListItem
                                        swipeRight={{
                                            content: <></>,
                                            action: () => {
                                                deleteOrder(index);
                                            },
                                        }}
                                    >
                                        <Order data={item} />
                                    </SwipeableListItem>
                                </SwipeableList>
                            </li>
                        );
                    })
                ) : (
                    <Load>
                        <HashLoader />
                    </Load>
                )}
            </ScrollList>
        </Container>
    );
};

export default TourInfor;
