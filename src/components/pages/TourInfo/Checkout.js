import styled from 'styled-components';
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { SubmitButton } from '../../../Common/Common';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Pay = styled.a`
    display: flex;
    text-decoration: none;
    align-self: flex-end;
    border-radius: 10px;
    width: 25rem;
    height: fit-content;
    margin-top: 20px;
    bottom: 20px;
    display: inline-block;
    background: ${(props) => props.theme.text};
    color: ${(props) => props.theme.body};
    padding: 20px 40px;
    z-index: 1;
    align-self: center;
    /* overflow: hidden;
    word-wrap: break-word; */
`;

const Title = styled.h4`
    font-size: ${(props) => props.theme.fontxl};
    text-transform: capitalize;
    color: ${(props) => props.theme.body};
    display: flex;
    justify-content: flex-start;
    margin: 1rem auto;
    border-bottom: 2px solid ${(props) => props.theme.body};
    cursor: pointer;
    z-index: 4;
`;
const Checkout = ({ amount }) => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;
    const paySubmit = async () => {
        const json = JSON.stringify({
            UserID: localStorage.getItem('token'),
            OrderTime: today,
            TotalAmount: amount,
            Status: '1',
        });
        const response = await axios.post(
            'http://localhost:3100/order/add',
            json,
            {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Credentials': 'true',
                    'Content-Type': 'application/json',
                },
                withCredentials: false,
            }
        );
        console.log(response?.data.result);
    };

    return (
        <Pay id='checkout'>
            <Title>Checkout</Title>
            {/* <form>
                <h4>Total Values: {amount} VND</h4>
                {/* <Link to={{ pathname: '/paysuccess' }}> */}
            {/* </Link> */}
            {/* </form> */}
            <SubmitButton onClick={paySubmit}> Checkout </SubmitButton>
        </Pay>
    );
};

export default Checkout;
