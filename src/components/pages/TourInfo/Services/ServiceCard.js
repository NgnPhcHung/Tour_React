import React from 'react';
import styled from 'styled-components';

const ServiceName = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    position: relative;
    font-weight: 600;
    letter-spacing: 1px;
    color: ${(props) => props.theme.body};
    margin: 0;

    input[type='checkbox']:not(:checked),
    input[type='checkbox']:checked {
        position: absolute;
        left: 0;
        opacity: 0.01;
    }
    input[type='checkbox']:not(:checked) + label,
    input[type='checkbox']:checked + label {
        position: relative;
        padding-left: 2.3em;
        font-size: 1.05em;
        line-height: 1.7;
        cursor: pointer;
    }

    input[type='checkbox']:not(:checked) + label:before,
    input[type='checkbox']:checked + label:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 1.4em;
        height: 1.4em;
        border: 1px solid ${(props) => props.theme.text};
        background: ${(props) => props.theme.body};
        border-radius: 0.2em;
        box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1),
            0 0 0 rgba(203, 34, 237, 0.2);
        transition: all 0.275s;
    }

    input[type='checkbox']:not(:checked) + label:after,
    input[type='checkbox']:checked + label:after {
        content: '✓';
        position: absolute;
        top: 0.525em;
        left: 0.18em;
        font-size: 1.375em;
        color: var(--green);
        line-height: 0;
        transition: all 0.2s;
    }

    input[type='checkbox']:not(:checked) + label:after {
        opacity: 0;
        transform: scale(0) rotate(45deg);
    }

    input[type='checkbox']:checked + label:after {
        opacity: 1;
        transform: scale(1) rotate(0);
    }
`;

const Item = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 8px 20px;
    transition: 0.5s;
    color: ${(props) => props.theme.body};
    opacity: 0;
    visibility: hidden;
    padding-top: 2rem;
    padding-bottom: 0;
    text-transform: uppercase;
`;

const ContentBox = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 5rem;
    text-align: center;
    transition: 1s;
    z-index: 10;
`;

const Card = styled.div`
    position: relative;
    width: 15rem;
    height: 20rem;
    background: ${(props) => `rgba(${props.theme.textRgba}, 0.9)`};
    border-radius: 20px;
    overflow: hidden;
    margin: 1rem;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--blue);
        clip-path: circle(10rem at 80% 20%);
        transition: 0.5s ease-in-out;
    }

    &:hover::before {
        clip-path: circle(15rem at 80% -20%);
    }

    &::after {
        position: absolute;
        top: 30%;
        left: -20%;
        font-size: ${(props) => props.theme.fontxl};
        font-weight: 800;
        font-style: italic;
        color: rgba(255, 255, 25, 0.05);
    }
    img {
        position: absolute;
        left: 0;
    }
    &:hover ${ContentBox} {
        height: 10rem;
    }
    &:hover ${Item} {
        opacity: 1;
        visibility: visible;
        transition-delay: 0.5s;
    }
`;

const ServiceCard = ({ id, price, slot }) => {
    price = parseInt(price);
    return (
        <Card>
            {price > 0 ? (
                <ContentBox>
                    <ServiceName>
                        <h3>
                            <input type='checkbox' id={id} />
                            <label for={id}>Tay Vịn</label>
                        </h3>
                    </ServiceName>
                    <Item>
                        <h4>giá:&nbsp; {price.toFixed(3)} vnđ</h4>
                        <h4>khả dụng:&nbsp; {slot} chỗ </h4>
                    </Item>
                </ContentBox>
            ) : (
                <img
                    src='https://eventimg.auction.co.kr/md/auction/08A7AD0E8F/soldout_col3.png?ver=0.2'
                    alt='soldout'
                />
            )}
        </Card>
    );
};

export default ServiceCard;
