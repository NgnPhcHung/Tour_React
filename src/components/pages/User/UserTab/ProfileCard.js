import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { BoxContainer, FormContainer } from '../../../../Common/Common';
import { Marginer } from '../../../../Common/Marginer';

import axios from 'axios';
import moment from 'moment';
import EditForm from './EditForm';

const Container = styled.div`
    width: 50vw;
    height: 85vh;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    margin-top: 2rem;
    box-shadow: ${(props) => `rgba(${props.theme.textRgba}, 0.6)`} 0px 3px 8px;
`;

const Top = styled.div`
    height: 15%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    background: ${(props) =>
        props.level == 1
            ? `var(--green)`
            : props.level == 2
            ? props.theme.text
            : props.level == 3
            ? `var(--blue)`
            : `var(--orange)`};
    position: relative;

    img {
        position: absolute;
        width: 7rem;
        height: 7rem;
        border-radius: 50%;
        top: 2rem;
        border: 5px solid ${(props) => props.theme.body};
    }
`;
const Bottom = styled.div`
    width: 70%;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    padding-left: 15%;
    justify-content: center;
    align-items: center;
`;

const Edit = styled.div`
    align-self: end;
    text-decoration: underline;
    cursor: pointer;
    padding-bottom: 2rem;
`;

const LabelContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 1rem;
`;

const ProfileCard = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [gender, setGender] = useState('');
    const [edit, setEdit] = useState(false);
    const [level, setLevel] = useState('');
    const [status, setStatus] = useState('');
    const [address, setAddress] = useState('');
    const [res, setRes] = useState();

    var userID = localStorage.getItem('token').trim();
    userID = userID.replace(/['"]+/g, '');

    const updateLevel = async (datas) => {
        let re;
        const upLevel = await axios.get(
            `http://localhost:3100/order/byuserid/${userID}`
        );
        if (
            upLevel.data.results.length > 3 &&
            upLevel.data.results.length < 5
        ) {
            re = 2;
        } else if (
            upLevel.data.results.length >= 5 &&
            upLevel.data.results.length < 8
        ) {
            re = 3;
        } else if (
            upLevel.data.results.length >= 8 &&
            upLevel.data.results.length < 10
        ) {
            re = 4;
        } else if (upLevel.data.results.length >= 10) {
            re = 5;
        } else {
            re = 1;
        }

        const json = JSON.stringify({
            UserID: userID,
            UserName: datas.UserName,
            Email: datas.Email,
            Phone: datas.Phone,
            Password: datas.Phone,
            DateOfBirth: moment(datas.DateOfBirth).utc().format('YYYY-MM-DD'),
            Gender: datas.Gender,
            Address: datas.Address,
            TypeID: 'T2',
            Status: datas.Status,
            Level: re,
        });
        await axios.put('http://localhost:3100/acc/update', json, {
            headers: {
                // 'Access-Control-Allow-Origin': '*',
                // 'Access-Control-Allow-Credentials': 'true',
                'Content-Type': 'application/json',
            },
            withCredentials: false,
        });
        return re;
    };
    const getsUserInfor = async () => {
        const response = axios.get(
            `http://localhost:3100/acc/details/${userID}`
        );
        response.then((value) => {
            const datas = value.data.results[0];
            setRes(datas);
            var dob = moment(datas.DateOfBirth).utc().format('DD-MM-YYYY');
            setEmail(datas.Email);
            setName(datas.UserName);
            setDateOfBirth(dob);
            setPhone(datas.Phone);
            setGender(datas.Gender);
            setLevel(setStatus(updateLevel(datas)));
            setAddress(datas.Address);
            setStatus(datas.Status);
        });
    };
    useEffect(() => {
        getsUserInfor();
    }, []);
    return (
        <Container>
            <Top level={level}>
                <img
                    src='https://picsum.photos/500/400?random=2'
                    alt='profile'
                />
            </Top>
            <Bottom>
                <Edit>
                    <h4
                        onClick={(e) => {
                            setEdit(!edit);
                        }}
                    >
                        Edit
                    </h4>
                </Edit>
                <BoxContainer>
                    {edit ? (
                        <EditForm data={res} />
                    ) : (
                        <FormContainer>
                            <Marginer direction='vertical' margin='3rem' />
                            <LabelContainer>
                                <label>Họ và tên:</label>
                                <label>{name}</label>
                            </LabelContainer>
                            <LabelContainer>
                                <label>Ngày sinh:</label>
                                <label>{dateOfBirth}</label>
                            </LabelContainer>
                            <LabelContainer>
                                <label>Email:</label>
                                <label>{email}</label>
                            </LabelContainer>
                            <LabelContainer>
                                <label>Số điện thoại:</label>
                                <label>{phone}</label>
                            </LabelContainer>
                            <LabelContainer>
                                <label>Địa chỉ:</label>
                                <label>{address}</label>
                            </LabelContainer>
                            <LabelContainer>
                                <label>Giới tính:</label>
                                <label>{gender}</label>
                            </LabelContainer>
                        </FormContainer>
                    )}
                </BoxContainer>
            </Bottom>
        </Container>
    );
};

export default ProfileCard;
