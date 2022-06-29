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
import Order from './Order';
import FeedbackBox from '../../../Modal/FeedbackBox/Feedback';

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
    height: 30rem;
`;

const TourInfor = () => {
    const [datas, setDatas] = useState([]);
    const [loading, setLoad] = useState(false);
    const [showFeedback, setShowFeedback] = useState(false);

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

    const feedback = () => {
        setShowFeedback(!showFeedback);
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
                                                if (
                                                    item.Status === 1 ||
                                                    item.Status === 0
                                                ) {
                                                    console.log('0 or 1');
                                                    deleteOrder(index);
                                                } else if (item.Status === 2) {
                                                    feedback();
                                                    console.log(item.Status);
                                                } else if (item.Status === 3)
                                                    console.log('ehe');
                                            },
                                        }}
                                    >
                                        {showFeedback && (
                                            <FeedbackBox
                                                show={setShowFeedback}
                                                close={feedback}
                                                data={item}
                                            />
                                        )}
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
