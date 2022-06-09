import React, { useState } from 'react';
import styled from 'styled-components';
import LoginForm from './LoginForm';
import { motion } from 'framer-motion';
import { AccountContext } from './AccountContext';
import SignupForm from './SignupForm';

const BoxContainer = styled.div`
    width: 20vw;
    min-height: 75vh;
    flex-direction: column;
    border-radius: 19px;
    padding: 2rem 2rem;
    background-color: ${(props) => props.theme.body};
    box-shadow: 0 0 2px ${(props) => `rgba(${props.themebodyRgba})`};
    overflow: hidden;
    position: relative;
    z-index: 100;

    @media (max-width: 72em) {
        width: 20em;
    }
`;

const TopContainer = styled.div`
    width: 100%;
    min-height: 25vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 2em 1.8em;
    padding-bottom: 2em;
    margin-bottom: 0;
`;

const BackDrop = styled(motion.div)`
    width: 120%;
    height: 60vh;
    position: absolute;
    display: flex;
    flex-direction: column;
    border-radius: 50%;
    transform: rotate(60deg);
    top: -40vh;
    left: -5vw;
    background: rgb(89, 101, 252);
    background: linear-gradient(
        110deg,
        rgba(89, 101, 252, 1) 0%,
        rgba(0, 212, 255, 1) 100%
    );
    z-index: 10;
`;

const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 5rem;
    z-index: 20;
`;
const CloseContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    position: absolute;
    justify-content: flex-end;
    align-items: center;
    left: 8rem;
`;
const Close = styled.h2`
    top: 1rem;
    z-index: 20;
    font-size: ${(props) => props.theme.fontxl};
    font-weight: 600;
    line-height: 1.24;
    color: ${(props) => props.theme.body};
    cursor: pointer;

    &:hover {
        color: ${(props) => `rgba(${props.theme.textRgba}, 0.7)`};
    }
`;
const HeaderText = styled.h2`
    font-size: ${(props) => props.theme.fontxl};
    font-weight: 600;
    line-height: 1.24;
    color: ${(props) => props.theme.body};
`;

const SmallText = styled.h5`
    color: ${(props) => props.theme.body};
    font-weight: 500;
    font-size: ${(props) => props.theme.fontsm};
    margin-top: 10px;
`;

const InnerContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const BackDropVariants = {
    expanded: {
        width: '240%',
        height: '150vh',
        borderRadius: '20%',
        transform: 'rorate(60deg)',
    },
    collapsed: {
        width: '160%',
        height: '73vh',
        borderRadius: '50%',
        transform: 'rotate(60%)',
    },
};

const ExpandingTransition = {
    type: 'spring',
    duration: 2.3,
    stiffness: 30,
};

const AccountBox = ({ show, close }) => {
    const [isExpanded, setExpanded] = useState(false);
    const [active, setActive] = useState('signin');

    const playExpandingAnimation = () => {
        setExpanded(true);
        setTimeout(() => {
            setExpanded(false);
        }, ExpandingTransition.duration * 1000 - 1500);
    };

    const switchToSignUp = () => {
        playExpandingAnimation();
        setTimeout(() => {
            setActive('signup');
        }, 400);
    };

    const switchToSignIn = () => {
        playExpandingAnimation();
        setTimeout(() => {
            setActive('signin');
        }, 400);
    };

    const ContextValue = { switchToSignUp, switchToSignIn };

    return (
        <AccountContext.Provider value={ContextValue}>
            <BoxContainer>
                <CloseContainer>
                    <Close onClick={close}>X</Close>
                </CloseContainer>
                <TopContainer>
                    <BackDrop
                        initial={false}
                        animate={isExpanded ? 'expanded' : 'collapsed'}
                        variants={BackDropVariants}
                        transition={ExpandingTransition}
                    />
                    {active === 'signup' && (
                        <HeaderContainer>
                            <HeaderText>Tạo</HeaderText>
                            <HeaderText>Tài khoản mới</HeaderText>
                            <SmallText>Bạn cần đăng kí để tiếp tục</SmallText>
                        </HeaderContainer>
                    )}
                    {active === 'signin' && (
                        <HeaderContainer>
                            <HeaderText>Đăng nhập</HeaderText>
                            <SmallText>Bạn cần đăng nhập để tiếp tục</SmallText>
                        </HeaderContainer>
                    )}
                </TopContainer>
                <InnerContainer>
                    {active === 'signin' && <LoginForm />}
                    {active === 'signup' && <SignupForm />}
                </InnerContainer>
            </BoxContainer>
        </AccountContext.Provider>
    );
};

export default AccountBox;
