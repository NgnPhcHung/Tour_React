import React from 'react';
import styled from 'styled-components';

const ListItem = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    padding: 10px;
    margin: 10px 0;
    cursor: pointer;

    &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background: var(--blue);
        transform: scaleX(0);
        transform-origin: right;
        transition: transform 0.5s;
    }
    &:hover::before {
        transform: scaleX(1);
        transform-origin: left;
        transition: transform 0.5s;
    }
`;

const ImageBox = styled.div`
    position: relative;
    min-width: 70px;
    height: 70px;
    background: #fff;
    overflow: hidden;
    border: 6px solid #fff;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
    margin-right: 20px;
    margin-left: 10px;

    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const Content = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    color: ${(props) => `rgba(${props.theme.textRgba}, 0.6)`};

    h5 {
        font-size: ${(props) => props.theme.fontxl};
        font-weight: 600;
        line-height: 1rem;
        text-transform: uppercase;
        transition: 0.5s;
    }
    p {
        padding-top: 1rem;
        opacity: 0.8;
        transition: 0.5s;
    }
`;

const FindCard = ({}) => {
    return (
        <ListItem>
            <ImageBox>
                <img
                    src='https://i.pravatar.cc/100?img=3'
                    alt='search result'
                />
            </ImageBox>
            <Content>
                <h5>Result 1</h5>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. ... Ipsum available, but the majority
                    have suffered alteration in some form
                </p>
            </Content>
        </ListItem>
    );
};

export default FindCard;
