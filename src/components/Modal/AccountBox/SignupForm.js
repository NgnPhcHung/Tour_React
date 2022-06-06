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

const SignupForm = (props) => {
    const classes = useStyles();
    const { switchToSignIn } = useContext(AccountContext);

    return (
        <BoxContainer>
            <FormContainer>
                <CustomizedTextField
                    label='Email'
                    type='email'
                    required
                    fullWidth
                    variant='outlined'
                    id='custom-css-outlined-input'
                    name='email'
                    className={classes.textField}
                />
                <CustomizedTextField
                    label='Password'
                    type='password'
                    required
                    fullWidth
                    variant='outlined'
                    id='custom-css-outlined-input'
                    name='password'
                    className={classes.textField}
                />
                <CustomizedTextField
                    label='Re-Password'
                    type='password'
                    required
                    fullWidth
                    variant='outlined'
                    id='custom-css-outlined-input'
                    name='password'
                    className={classes.textField}
                />
                <CustomizedTextField
                    label='Phone'
                    type='number'
                    required
                    fullWidth
                    variant='outlined'
                    id='custom-css-outlined-input'
                    name='phone'
                    className={classes.textField}
                />
            </FormContainer>
            <Marginer direction='vertical' margin={10} />
            <MutedLink href='#'>
                Đã có tài khoản rồi?
                <BoldLinkk onClick={switchToSignIn}>Đăng nhập</BoldLinkk>
            </MutedLink>
            <Marginer direction='vertical' margin='1rem' />
            <ButtonCustom>Đăng kí</ButtonCustom>
        </BoxContainer>
    );
};

export default SignupForm;
