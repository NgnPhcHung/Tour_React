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
    const [authorizeToken, setAuthorizeToken] = useState();

    // useEffect(() => {
    //     Axios.get('http://localhost:3001/user/get')
    //         .then((response) => {
    //             setAccountList(response.data)
    //         })
    // }, [])

    const login = async () => {
        console.log(JSON.stringify({ UserID: username, Password: password }));
        try {
            const response = await axios.post(
                'http://localhost:3100/user/login',
                JSON.stringify({ UserD: username, Password: password }),
                {
                    Headers: { 'Content-Type': 'application/json' },
                    withCredentials: true,
                }
            );
            console.log(JSON.stringify(response?.data));
            setAuthorizeToken(response?.data.result);
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
