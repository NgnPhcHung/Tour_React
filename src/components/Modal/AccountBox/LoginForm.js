import React, { useContext } from 'react';
import ButtonCustom from '../../Button/ButtonCustom';
import { Marginer } from '../../../Common/Marginer';

import { AccountContext } from './AccountContext';
import {
    BoldLinkk,
    BoxContainer,
    CustomizedTextField,
    FormContainer,
    MutedLink,
    useStyles,
} from '../../../Common/Common';

const LoginForm = () => {
    const classes = useStyles();

    const { switchToSignUp } = useContext(AccountContext);

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
            <ButtonCustom>Đăng nhập</ButtonCustom>
        </BoxContainer>
    );
};

export default LoginForm;
