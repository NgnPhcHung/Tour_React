import React from 'react';
import styled from 'styled-components';
import ReactDom from 'react-dom';
import AccountBox from './AccountBox';

const LoginContainer = styled.div`
    position: fixed;
    z-index: 50;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    backdrop-filter: blur(4px);
    overflow: hidden;
    background-color: ${(props) => `rgba(${props.theme.textRgba}, 0.6)`};
`;

const Login = ({ show, close }) => {
    return ReactDom.createPortal(
        <LoginContainer>
            <AccountBox show={show} close={close} />
        </LoginContainer>,
        document.getElementById('login')
    );
};

export default Login;
