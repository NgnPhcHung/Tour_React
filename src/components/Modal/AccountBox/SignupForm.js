import React, { useContext, useState, useEffect } from 'react';
import ButtonCustom from '../../Button/ButtonCustom';
import { Marginer } from '../../../Common/Marginer';
import Axios from 'axios'
import { AccountContext } from './AccountContext';
import {
    BoldLinkk,
    BoxContainer,
    CustomizedTextField,
    FormContainer,
    MutedLink,
    useStyles,
} from '../../../Common/Common';

const SignupForm = (props) => {
    const { switchToSignIn } = useContext(AccountContext);
    const [usename, setUsername] = useState('');
    const [passWord, setPassword] = useState('');
    const [phone, setPhone] = useState('')
    const [name, setName] = useState('')

    const register = () => {
        Axios.post('http://localhost:3001/user/singup', {
            name: name,
            username: usename,
            password: passWord,
            phone: phone,
        }).then(() => {
            alert('sucess');
        });
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
                    onChange={(e) => setUsername(e.target.value)}
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
            </FormContainer>
            <Marginer direction='vertical' margin={10} />
            <MutedLink href='#'>
                Đã có tài khoản rồi?
                <BoldLinkk onClick={switchToSignIn}>Đăng nhập</BoldLinkk>
            </MutedLink>
            <Marginer direction='vertical' margin='1rem' />
            <ButtonCustom click={register}><i onClick={switchToSignIn}>Đăng kí</i></ButtonCustom>
        </BoxContainer>
    );
};

export default SignupForm;
