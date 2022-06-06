import React, { Component, useState } from 'react';
import styled from 'styled-components';
import Button from '../../../../Common/Button';
import {
    BoxContainer,
    CustomizedTextField,
    FormContainer,
    useStyles,
} from '../../../../Common/Common';
import { Marginer } from '../../../../Common/Marginer';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';

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
            : `var(--blue)`};
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

const RadioContainer = styled.div`
    margin: 0.5em 0;
    display: inline-flex;
    justify-content: flex-start;
    align-items: center;

    p {
        font-size: ${(props) => props.theme.fontsm};
        padding-right: 2rem;
        padding-left: 0.2rem;
    }
`;
const ProfileCard = ({ level }) => {
    const [edit, setEdit] = useState(false);

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
                        <FormContainer>
                            <CustomizedTextField
                                label='Họ và tên'
                                type='text'
                                required
                                fullWidth
                                variant='outlined'
                                id='custom-css-outlined-input'
                                name='name'
                            />
                            <Marginer direction='vertical' margin='0.2rem' />
                            <CustomizedTextField
                                label='Ngày đẻ'
                                type='date'
                                required
                                fullWidth
                                variant='outlined'
                                id='custom-css-outlined-input'
                                name='dateOfBirth'
                            />
                            <Marginer direction='vertical' margin='0.2rem' />
                            <CustomizedTextField
                                label='Email'
                                type='Email'
                                required
                                fullWidth
                                variant='outlined'
                                id='custom-css-outlined-input'
                                name='email'
                            />
                            <Marginer direction='vertical' margin='0.2rem' />
                            <CustomizedTextField
                                label='Phone'
                                type='number'
                                required
                                fullWidth
                                variant='outlined'
                                id='custom-css-outlined-input'
                                name='phone'
                            />
                            <div>
                                <RadioContainer>
                                    <input
                                        type='radio'
                                        id='genderChoice1'
                                        name='gender'
                                        value='male'
                                    />
                                    <p for='genderChoice1'>Nam</p>
                                </RadioContainer>

                                <RadioContainer>
                                    <input
                                        type='radio'
                                        id='genderChoice2'
                                        name='gender'
                                        value='female'
                                    />
                                    <p for='genderChoice2'>Nữ</p>
                                </RadioContainer>

                                <RadioContainer>
                                    <input
                                        type='radio'
                                        id='genderChoice3'
                                        name='gender'
                                        value='other'
                                    />
                                    <p for='genderChoice2'>Khác</p>
                                </RadioContainer>
                            </div>
                            <Marginer direction='vertical' margin='0.2rem' />
                            <CustomizedTextField
                                label='Password'
                                type='password'
                                required
                                fullWidth
                                variant='outlined'
                                id='custom-css-outlined-input'
                                name='password'
                            />
                            <Marginer direction='vertical' margin='1rem' />
                            <Button text='Chỉnh sửa' />
                        </FormContainer>
                    ) : (
                        <FormContainer>
                            <LabelContainer>
                                <label>Name:</label>
                                <label>Hưng đẹp zai</label>
                            </LabelContainer>
                            <LabelContainer>
                                <label>Name:</label>
                                <label>Đó là sự thật</label>
                            </LabelContainer>
                            <LabelContainer>
                                <label>Name:</label>
                                <label>Sự thật là Hưng đz pro vjp</label>
                            </LabelContainer>
                            <LabelContainer>
                                <label>Name:</label>
                                <label>Hưng dô địch</label>
                            </LabelContainer>
                            <LabelContainer>
                                <label>Name:</label>
                                <label>Hưng đẹp zai</label>
                            </LabelContainer>
                            <LabelContainer>
                                <label>Name:</label>
                                <label>Hưng đẹp zai</label>
                            </LabelContainer>
                        </FormContainer>
                    )}
                </BoxContainer>
            </Bottom>
        </Container>
    );
};

export default ProfileCard;
