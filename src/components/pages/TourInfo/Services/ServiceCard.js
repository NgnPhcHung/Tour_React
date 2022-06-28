import { Checkbox } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { currencyFormat } from '../../../../Handler/currency';

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
        height: 12rem;
    }
    &:hover ${Item} {
        opacity: 1;
        visibility: visible;
        transition-delay: 0.5s;
    }
`;

const ServiceCard = ({ data, change }) => {
    return (
        <Card>
            {data.Slot - data.OrderedSlot > 0 ? (
                <ContentBox>
                    <ServiceName>
                        <h3>
                            <Checkbox
                                // defaultChecked
                                sx={{
                                    '& .MuiSvgIcon-root': {
                                        fontSize: '1.7em',
                                        color: '#fff',
                                    },
                                }}
                                value={data.SID + '!!' + data.Price}
                                onChange={change}
                            />
                            <label htmlFor={data.SID}>{data.ServiceName}</label>
                        </h3>
                    </ServiceName>
                    <Item>
                        <h4>giá:&nbsp; {currencyFormat(data.Price)}</h4>
                        <h4>
                            khả dụng:&nbsp; {data.Slot - data.OrderedSlot} chỗ{' '}
                        </h4>
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
