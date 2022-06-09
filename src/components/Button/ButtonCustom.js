import React from 'react';

import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import styles from 'react-awesome-button/src/styles/themes/theme-blue';
import styled from 'styled-components';
import './styleButton.css';

const Custom = styled(AwesomeButton)``;

const ButtonCustom = ({ text, children, click }) => {
    return (
        <Custom>
            <i onClick={click}>{children}</i>
        </Custom>
    );
};

export default ButtonCustom;
