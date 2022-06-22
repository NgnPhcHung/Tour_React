import React, { useContext, useState, useEffect } from 'react';
import ButtonCustom from '../../Button/ButtonCustom';
import { Marginer } from '../../../Common/Marginer';
import Axios from 'axios';
import { AccountContext } from './AccountContext';
import {
    BoldLinkk,
    BoxContainer,
    CustomizedTextField,
    FormContainer,
    MutedLink,
    useStyles,
} from '../../../Common/Common';
import axios from 'axios';

const SignupForm = (props) => {
    const { switchToSignIn } = useContext(AccountContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRepassword] = useState('');
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');

    const register = async () => {
        const json = JSON.stringify({
            TypeID: 'T2',
            UserName: name,
            Phone: phone,
            Email: email,
            Password: password,
            Status: 1,
            Level: 1,
        });
        const response = axios.post('http://localhost:3100/acc/add', json, {
            headers: {
                // Overwrite Axios's automatically set Content-Type
                'Content-Type': 'application/json',
            },
        });
        response.then((value) => {
            if (value.status == 200) {
                switchToSignIn();
            }
        });
    };

    const loginSubmit = () => {
        if (
            email.length >= 0 ||
            password.length >= 0 ||
            repassword.length >= 0 ||
            phone.length >= 0 ||
            name.length >= 0
        ) {
            if (repassword != password) {
                alert('Mật khẩu và xác nhận mật khẩu không khớp');
            } else {
                register();
            }
        } else {
            alert('Thông tin không được để trống');
        }
    };

    return (
        <BoxContainer>
            <FormContainer>
                <CustomizedTextField
                    label='Full Name'
                    type='text'
                    required
                    fullWidth
                    variant='outlined'
                    id='custom-css-outlined-input'
                    name='name'
                    onChange={(e) => setName(e.target.value)}
                />
                <Marginer direction='vertical' margin={5} />
                <CustomizedTextField
                    label='Email'
                    type='email'
                    required
                    fullWidth
                    variant='outlined'
                    id='custom-css-outlined-input'
                    name='email'
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Marginer direction='vertical' margin={5} />
                <CustomizedTextField
                    label='Phone'
                    type='number'
                    required
                    fullWidth
                    variant='outlined'
                    id='custom-css-outlined-input'
                    name='phone'
                    onChange={(e) => setPhone(e.target.value)}
                />
                <Marginer direction='vertical' margin={5} />
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
                <Marginer direction='vertical' margin={5} />
                <CustomizedTextField
                    label='Re-Password'
                    type='password'
                    required
                    fullWidth
                    variant='outlined'
                    id='custom-css-outlined-input'
                    name='password'
                    onChange={(e) => setRepassword(e.target.value)}
                />
            </FormContainer>
            <Marginer direction='vertical' margin={10} />
            <MutedLink href='#'>
                Đã có tài khoản rồi?
                <BoldLinkk onClick={switchToSignIn}>Đăng nhập</BoldLinkk>
            </MutedLink>
            <Marginer direction='vertical' margin='1rem' />
            <ButtonCustom click={loginSubmit}>
                Đăng kí
                {/* <i onClick={switchToSignIn}>Đăng kí</i> */}
            </ButtonCustom>
        </BoxContainer>
    );
};

export default SignupForm;
