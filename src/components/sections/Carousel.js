import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay, Mousewheel } from 'swiper';

import StarRoundedIcon from '@mui/icons-material/StarRounded';

const Container = styled.div`
    width: 50em;
    height: 70em;
    position: relative;

    .swiper {
        width: 100%;
        height: 100%;
    }
    .swiper-slide {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media (max-width: 48em) {
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        right: 13rem;
    }
`;

const Item = styled.div`
    /* width: calc(45rem - 2vw); */
    width: 60em;
    padding: 1rem 0;
    color: ${(props) => props.theme.body};
    margin: 2rem 1rem;
    position: relative;
    z-index: 5;
    backdrop-filter: blur(4px);

    border: 2px solid ${(props) => props.theme.text};
    border-radius: 15px;

    @media (max-width: 64em) {
        width: calc(100vw - 5em);
        color: ${(props) => props.theme.body};
        border: 2px solid ${(props) => props.theme.body};
        left: 0;
        right: 5em;
    }

    @media (max-width: 48em) {
        right: 0;

        &:hover {
            img {
                transform: translateY(-2rem) scale(1.2);
            }
        }
    }
`;

const ImageContainer = styled.div`
    width: 40em;
    margin: 0 auto;
    align-items: center;
    padding: 1rem;
    cursor: pointer;
    position: relative;
    img {
        width: 40em;
        transition: all 0.3s ease;
    }

    &:hover {
        img {
            transform: translateY(-2em) scaleX(1.2) scaleY(1.2);
        }
    }

    @media (max-width: 64em) {
        width: 40em;
        height: 20em;

        img {
            width: 40em;
            height: 20em;
        }
    }

    @media (max-width: 48em) {
        img {
            /* width: 70vw; */
            width: calc(100vw - 7em);
            height: 20em;
        }
    }
`;

const Name = styled.h2`
    font-size: ${(props) => props.theme.fontlg};
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    color: ${(props) => props.theme.text};
    margin-top: 1rem;

    @media (max-width: 70em) {
        color: ${(props) => props.theme.body};
    }

    @media (max-width: 48em) {
        top: -10em;
    }
`;
const Vote = styled.h2`
    font-size: ${(props) => props.theme.fontmd};
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: capitalize;
    color: ${(props) => props.theme.text};
    margin-top: 1rem;
    font-weight: 400;

    @media (max-width: 64em) {
        color: ${(props) => props.theme.body};
    }
`;

const theData = [
    {
        name: 'cu hang osnn',
        vote: 4.1,
        imgsrc: 'https://i.pinimg.com/600x315/67/60/11/6760119abd653651ee2a360fd2a02090.jpg',
    },

    {
        name: 'Hoả diệm sơn',
        vote: 3.9,
        imgsrc: 'https://i.ytimg.com/vi/RF_vArzyHHQ/maxresdefault.jpg',
    },
];

const CarouselComponent = ({ img, name = ' ', vote = ' ' }) => {
    return (
        <Item>
            <ImageContainer>
                <img src={img} alt={name} />
            </ImageContainer>
            <Name> {name} </Name>
            <Vote>
                {vote} <StarRoundedIcon />{' '}
            </Vote>
        </Item>
    );
};

const Carousel = () => {
    return (
        <Container>
            <Swiper
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: true,
                }}
                navigation={false}
                scrollbar={{
                    draggable: true,
                }}
                direction={'horizontal'}
                slidesPerView={1}
                spaceBetween={30}
                mousewheel={true}
                modules={[Mousewheel, Pagination, Autoplay, Navigation]}
                className='mySwiper'
            >
                {theData.map((item, index) => {
                    return (
                        <SwiperSlide>
                            <CarouselComponent
                                img={item.imgsrc}
                                name={item.name}
                                vote={item.vote}
                            />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </Container>
    );
};

export default Carousel;
