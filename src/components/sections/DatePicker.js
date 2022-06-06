import styled from 'styled-components';
import React, { useEffect, useRef, useState } from 'react';
import Search from './Search';
import useClickOutside from '../../Handler/useClickOutside';

const Section = styled.section`
    min-height: 1vh;
    width: 100vw;
    height: fit-content;
    position: relative;
    background-color: ${(props) => props.theme.body};
`;
const Button = styled.button`
    background-color: ${(props) => props.theme.body};
    width: 100%;
    font-size: ${(props) => props.theme.fontsm};
    padding: 1rem 2.3rem;
    font-weight: 900;
    cursor: pointer;
    color: #ff7779;
    &:hover {
        background-color: #ff7779;
        color: ${(props) => props.theme.body};
    }
`;

const DatePicker = () => {
    const [showSearch, setShowSearch] = useState(false);
    const ref = useRef(null);

    useClickOutside(ref, () => {
        setShowSearch(false);
    });

    return (
        <Section ref={ref}>
            {showSearch && <Search />}
            <Button onClick={() => setShowSearch(!showSearch)}>
                {showSearch ? 'Ẩn' : 'Đặt lịch'}
            </Button>
        </Section>
    );
};

export default DatePicker;
