import React, { useContext, useEffect, useState } from 'react';
import ButtonCustom from '../../Button/ButtonCustom';
import { Marginer } from '../../../Common/Marginer';
import axios from 'axios';
import { AccountContext } from './AccountContext';
import {
    BoldLinkk,
    BoxContainer,
    CustomizedTextField,
    FormContainer,
    MutedLink,
} from '../../../Common/Common';

const LoginForm = () => {
    const { switchToSignUp } = useContext(AccountContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const login = async () => {
        try {
            const json = JSON.stringify({
                UserID: username,
                Password: password,
            });
            const response = await axios.post(
                'http://localhost:3100/user/login',
                json,
                {
                    headers: {
                        // Overwrite Axios's automatically set Content-Type
                        'Content-Type': 'application/json',
                    },
                }
            );

            if (response?.data.code == 404)
                alert('Tên đăng nhập hoặc tài khoản không đúng');
            else if (response?.data.code == 200) {
                localStorage.setItem('token', JSON.stringify(username));
                window.location.reload();
            }
        } catch (err) {
            if (err.response?.status == 400) {
                console.log('username or password are not correct');
            }
        }
    };

    return (
        <BoxContainer>
            <FormContainer>
                <CustomizedTextField
                    label='Username'
                    type='Email'
                    required
                    fullWidth
                    variant='outlined'
                    id='custom-css-outlined-input'
                    name='userName'
                    onChange={(e) => setUsername(e.target.value)}
                />
                <Marginer direction='vertical' margin={10} />
                <CustomizedTextField
                    label='Password'
                    type='password'
                    required
                    fullWidth
                    variant='outlined'
                    id='custom-css-outlined-input'
                    name='password'
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Marginer direction='vertical' margin={10} />
            </FormContainer>
            <Marginer direction='vertical' margin={10} />
            <MutedLink href='#'>Quên mật khẩu</MutedLink>
            <Marginer direction='vertical' margin='1rem' />
            <MutedLink href='#'>
                Không có tài khoản?
                <BoldLinkk onClick={switchToSignUp}>
                    Tạo tài khoản mới
                </BoldLinkk>
            </MutedLink>
            <Marginer direction='vertical' margin='1rem' />
            <ButtonCustom click={login}>Đăng nhập</ButtonCustom>
        </BoxContainer>
    );
};

export default LoginForm;
