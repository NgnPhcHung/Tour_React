import styled from 'styled-components';
import React from 'react';
import { SubmitButton } from '../../../Common/Common';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PeopleIcon from '@mui/icons-material/People';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import moment from 'moment';
import { currencyFormat } from '../../../Handler/currency';

const Pay = styled.div`
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

const PeopleTitle = styled.h2`
    width: 559px;
    font-size: ${(props) => props.theme.fontmd};
    display: flex;
    align-items: center;

    left: 0;
    top: 380;

    @media (max-width: 480px) {
        .rdr-calendar-range {
            width: 320px;
        }
        .rdr-calendar-range-part {
            width: 100%;
        }
    }
`;

const GuestPicker = styled.input.attrs({
    type: 'number',
    min: '0',
    defaultValue: '0',
})`
    border: none;
    margin-left: 1rem;
    &:focus {
        outline: none;
    }
`;

const Title = styled.h4`
    font-size: ${(props) => props.theme.fontxl};
    text-transform: capitalize;
    color: ${(props) => props.theme.body};
    display: flex;
    justify-content: flex-start;
    margin: 1rem auto;
    border-bottom: 2px solid ${(props) => props.theme.body};
    z-index: 4;
`;

const Checkout = ({ tour, amount, service }) => {
    const [guess, setGuess] = useState(1);
    const [ser, setSer] = useState([]);
    const [level, setLevel] = useState();
    const [totalAmount, setTotalAmount] = useState(0);
    const [total, setTotal] = useState(0);
    const [percent, setPercent] = useState(0);
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;

    const discount = () => {
        switch (level) {
            case '1':
                return setPercent(0);
            case '2':
                return setPercent(20);
            case '3':
                return setPercent(30);
            case '4':
                return setPercent(40);
            case '5':
                return setPercent(50);
            default:
                break;
        }
    };

    const guessChange = (e) => {
        setGuess(e.target.value);
        // total = parseInt(amount) * parseInt(e.target.value);
        setTotal(parseInt(amount) * parseInt(e.target.value));
        setTotalAmount(
            convertlevel(level, parseInt(amount) * parseInt(e.target.value))
        );
    };
    function eliminateDuplicates(arr) {
        var i,
            len = arr.length,
            out = [],
            obj = {};

        for (i = 0; i < len; i++) {
            obj[arr[i]] = 0;
        }
        for (i in obj) {
            out.push(i);
        }
        return out;
    }

    function convertlevel(lev, value) {
        discount();
        console.log(lev + '----' + value);
        switch (level) {
            case 1:
                return parseInt(value);
            case 2:
                return parseInt(value) - 0.2 * parseInt(value);
            case 3:
                return parseInt(value) - 0.3 * parseInt(value);
            case 4:
                return parseInt(value) - 0.4 * parseInt(value);
            case 5:
                return parseInt(value) - 0.5 * parseInt(value);
            default:
                break;
        }
    }

    const setDiscount = async () => {
        const userID = localStorage.getItem('token').replace(/['"]+/g, '');
        const userLevel = await axios.get(
            `http://localhost:3100/acc/details/${userID}`
        );
        setLevel(userLevel?.data.results[0].Level);
        setTotalAmount(convertlevel(userLevel?.data.results[0].Level, amount));
    };

    const paySubmit = async () => {
        const userID = localStorage.getItem('token').replace(/['"]+/g, '');
        if (guess > 0) {
            for (let i = 0; i < service.length; i++) {
                const json = JSON.stringify({
                    TourID: tour,
                    UserID: userID,
                    SID: service[i].split('!!')[0],
                    OrderedSlot: guess,
                    OrderTime: today,
                    TotalAmount: amount,
                    Amount: totalAmount,
                });
                const response = await axios.post(
                    'http://localhost:3100/order/add',
                    json,
                    {
                        headers: {
                            // 'Access-Control-Allow-Origin': '*',
                            // 'Access-Control-Allow-Credentials': 'true',
                            'Content-Type': 'application/json',
                        },
                        withCredentials: false,
                    }
                );
                const getTour = await axios.get(
                    `http://localhost:3100/tour/details/${tour}`
                );
                const tourRes = getTour?.data.results[0];
                const jsonTour = JSON.stringify({
                    TourID: tourRes.TourID,
                    BeginDate: moment(tourRes.BeginDate)
                        .utc()
                        .format('YYYY-MM-DD'),
                    EndDate: moment(tourRes.EndDate).utc().format('YYYY-MM-DD'),
                    Descriptions: tourRes.Descriptions,
                    Image: tourRes.Image,
                    Location: tourRes.Location,
                    OrderedSlot:
                        parseInt(tourRes.OrderedSlot) + parseInt(guess),
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
                if (
                    response?.data.code == 200 &&
                    updateTour?.data.code == 200
                ) {
                    notify('🚌 Đặt tour thành công');
                }
            }
        } else {
            notify_V2('Đặt tour thất bại ❌');
        }
    };

    const notify = (message) =>
        toast.success(message, {
            position: 'bottom-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
        });
    const notify_V2 = (message) =>
        toast.error(message, {
            position: 'bottom-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
        });

    useEffect(() => {
        setDiscount();

        var current = [];
        setTotal(amount);
        if (current !== service) {
            var temp = total;
            for (let i = 0; i < service.length; i++) {
                temp += parseInt(service[i].split('!!')[1]);
                ser.push(service[i].split('!!')[0]);
                eliminateDuplicates(ser);
            }
            setTotal(temp);
        }
    }, []);
    return (
        <Pay id='checkout'>
            {localStorage.getItem('token') !== null ? (
                <div>
                    <Title>Checkout</Title>

                    <ToastContainer
                        position='bottom-right'
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss={false}
                        draggable
                        pauseOnHover={false}
                    />

                    <form>
                        <h4>Thành tiền: {currencyFormat(total)}</h4>
                        <h4>Phầm trăm giảm: {level * 10} %</h4>
                        <h4>Tổng: {currencyFormat(totalAmount)}</h4>
                        <Link to={{ pathname: '/paysuccess' }}></Link>
                        <br />
                        <PeopleTitle>
                            Số người tham gia <PeopleIcon />
                            <GuestPicker onChange={(e) => guessChange(e)} />
                        </PeopleTitle>
                    </form>
                    <SubmitButton onClick={paySubmit}>Thanh toán</SubmitButton>
                </div>
            ) : (
                <Title>Đăng nhập để tiếp tục</Title>
            )}
        </Pay>
    );
};

export default Checkout;
