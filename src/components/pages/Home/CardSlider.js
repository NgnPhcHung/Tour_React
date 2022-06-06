import React from 'react';
import styled from 'styled-components';
import ContentSlide from '../../sections/Slider';

const Section = styled.div`
    background: ${(props) => props.theme.text};
    height: 120vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    flex: 50%; /* or - flex: 0 50% - or - flex-basis: 50% - */
    /*demo*/
    box-shadow: 0 0 0 1px black;
    margin-bottom: 10px;
`;

const Item = styled.div`
    width: 100%;
    margin-top: 2em;
    margin-bottom: auto;

    &:not(:first-child) {
        padding-bottom: 20em;
    }
    &:not(:last-child) {
        padding-bottom: 20em;
    }
`;
const CardSlider = () => {
    return (
        <Section id='showcase'>
            <Item>
                <ContentSlide title='Đang diễn ra' />
            </Item>
            <Item>
                <ContentSlide title='Sắp diễn ra' />
            </Item>
        </Section>
    );
};

export default CardSlider;
