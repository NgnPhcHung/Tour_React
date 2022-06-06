import React, { useLayoutEffect, useRef } from 'react';
import { useWindowScroll } from 'react-use';
import styled from 'styled-components';

const Up = styled.div`
    z-index: 30;
    width: 3rem;
    height: 3rem;
    box-sizing: border-box;
    margin: 0 auto;
    padding: 0;
    color: ${(props) => props.theme.text};
    background-color: ${(props) => props.theme.body};
    font-size: ${(props) => props.theme.fontxl};
    position: fixed;
    right: 1rem;
    bottom: 1rem;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    transform: all 0.2s ease;
    &:hover {
        transform: scale(1.2);
    }
    &::active {
        transform: scale(0.9);
    }
`;
const ScrollToTop = () => {
    const ref = useRef(null);
    const { y } = useWindowScroll();

    const scrollTo = () => {
        let element = document.getElementById('home');
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest',
        });
    };

    useLayoutEffect(() => {
        if (y > 200) {
            ref.current.style.display = 'flex';
        } else {
            ref.current.style.display = 'none';
        }
        return () => {};
    }, [y]);

    return (
        <Up onClick={scrollTo} ref={ref}>
            &#x2191;
        </Up>
    );
};

export default ScrollToTop;
