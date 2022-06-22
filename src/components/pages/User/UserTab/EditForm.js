import React, { useEffect, useState } from 'react';
import Button from '../../../../Common/Button';
import { CustomizedTextField, FormContainer } from '../../../../Common/Common';
import { Marginer } from '../../../../Common/Marginer';
import styled from 'styled-components';
import moment from 'moment';
import axios from 'axios';

const RadioContainer = styled.label`
    font-size: ${(props) => props.theme.fontsm};
    padding-right: 2rem;
    padding-left: 0.2rem;
    cursor: pointer;
`;

const EditForm = ({ data }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [gender, setGender] = useState('');
    const [address, setAddress] = useState('');

    const edit = async () => {
        if (name && email && phone && password && gender && address) {
            const json = JSON.stringify({
                UserID: localStorage.getItem('token').replace(/['"]+/g, ''),
                UserName: name,
                Email: email,
                Phone: phone,
                Password: password,
                DateOfBirth: moment(dateOfBirth).utc().format('YYYY-MM-DD'),
                Gender: gender,
                Address: address,
                TypeID: 'T2',
            });
            const response = await axios.put(
                'http://localhost:3100/acc/update',
                json,
                {
                    headers: {
                        // Overwrite Axios's automatically set Content-Type
                        'Content-Type': 'application/json',
                    },
                }
            );
            console.log(response);
        } else {
            alert('Thông tin không được để trống');
        }
    };

    useEffect(() => {
        setEmail(data.Email);
        setPhone(data.Phone);
        setName(data.UserName);
        setDateOfBirth(data.DateOfBirth);
        setGender(data.gender);
        setAddress(data.Address);
    }, []);

    return (
        <FormContainer>
            <CustomizedTextField
                label='Họ và tên'
                type='text'
                required
                fullWidth
                variant='outlined'
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <Marginer direction='vertical' margin='0.2rem' />
            <CustomizedTextField
                label='Ngày đẻ'
                type='date'
                required
                fullWidth
                variant='outlined'
                value={moment(dateOfBirth).utc().format('YYYY-MM-DD')}
                onChange={(e) => setDateOfBirth(e.target.value)}
            />
            <Marginer direction='vertical' margin='0.2rem' />
            <CustomizedTextField
                label='Email'
                type='Email'
                required
                fullWidth
                variant='outlined'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <Marginer direction='vertical' margin='0.2rem' />
            <CustomizedTextField
                label='Phone'
                type='number'
                required
                fullWidth
                variant='outlined'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />
            <Marginer direction='vertical' margin='0.2rem' />
            <CustomizedTextField
                label='Address'
                type='text'
                required
                fullWidth
                variant='outlined'
                value={address}
                onChange={(e) => setAddress(e.target.value)}
            />
            <div>
                <Marginer direction='vertical' margin='0.2rem' />
                <RadioContainer htmlFor='male'>
                    <input
                        type='radio'
                        id='male'
                        name='gender'
                        value='male'
                        onChange={(e) => setGender(e.target.value)}
                    />
                    Nam
                </RadioContainer>

                <RadioContainer htmlFor='female'>
                    <input
                        type='radio'
                        id='female'
                        name='gender'
                        value='female'
                        onChange={(e) => setGender(e.target.value)}
                    />
                    Nữ
                </RadioContainer>

                <RadioContainer htmlFor='other'>
                    <input
                        type='radio'
                        id='other'
                        name='gender'
                        value='other'
                        onChange={(e) => setGender(e.target.value)}
                    />
                    Khác
                </RadioContainer>
            </div>
            <Marginer direction='vertical' margin='0.2rem' />
            <CustomizedTextField
                label='Password'
                type='password'
                required
                fullWidth
                variant='outlined'
                name='password'
                onChange={(e) => setPassword(e.target.value)}
            />
            <Marginer direction='vertical' margin='0.5rem' />
            <Button text='Chỉnh sửa' onClick={edit} />
        </FormContainer>
    );
};

export default EditForm;
