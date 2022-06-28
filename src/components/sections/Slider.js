import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styled from 'styled-components';
import Card from './Card';
import { setDate } from 'date-fns';

const Section = styled.div`
    color: ${(props) => props.theme.text};
    padding: 1rem;
    justify-content: center;
    align-items: center;
    position: relative;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    .swiper {
        position: absolute;
        width: 80vw;
        top: 10vh;
        left: 10vw;
    }

    .swiper-slide {
        background: ${(props) => props.theme.body};
        cursor: move;
        cursor: grab;
    }

    .swiper-slide img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .swiper-button-next,
    .swiper-button-prev {
        position: absolute;
        bottom: 0;
        z-index: 5;
        width: 45px;
        height: 45px;
        color: ${(props) => props.theme.text};
        background-color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.7)`};
        border-radius: 50%;
        font-weight: 600;
        transform: translateY(-50%);
        transition: 0.2s ease-in-out 0s;
    }

    .swiper-button-next {
        &:hover {
            transform: translateY(-2em) scaleX(1.2) scaleY(1.2);
        }
    }
    .swiper-button-prev {
        &:hover {
            transform: translateY(-2em) scaleX(1.2) scaleY(1.2);
        }
    }

    @media (max-width: 48em) {
        .swiper-button-next,
        .swiper-button-prev {
            display: none;
        }
    }
`;

const Title = styled.h2`
    font-size: ${(props) => props.theme.fontxxxl};
    font-weight: 600;
    color: ${(props) => props.theme.body};
    position: absolute;
    left: 2.5em;

    @media (max-width: 64em) {
        font-size: ${(props) => props.theme.fontxxl};
    }
    @media (max-width: 48em) {
        font-size: ${(props) => props.theme.fontxl};
    }
`;

const ContentSlide = ({ title, data }) => {
    // console.log(data);
    return (
        <Section>
            <Title>{title}</Title>
            <div className='swiper_wrap'>
                <Swiper
                    spaceBetween={30}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    breakpoints={{
                        1280: {
                            slidesPerView: 3,
                        },
                        720: {
                            slidesPerView: 2,
                        },
                        480: {
                            slidesPerView: 1,
                        },
                    }}
                    className='mySwiper'
                >
                    {data.map((item, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <Card data={item} />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </Section>
    );
};

export default ContentSlide;
