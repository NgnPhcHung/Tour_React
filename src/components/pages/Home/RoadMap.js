import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';
import DrawSvg from '../../sections/DrawSvg';

const Section = styled.section`
    min-height: 100vh;
    width: 100vw;
    background-color: ${(props) => props.theme.body};
    position: relative;
`;

const Title = styled.h2`
    font-size: ${(props) => props.theme.fontxxl};
    text-transform: capitalize;
    color: ${(props) => props.theme.text};
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem auto;
    border-bottom: 2px solid ${(props) => props.theme.text};
    width: fit-content;
`;

const Container = styled.div`
    width: 70%;
    height: 200vh;
    background-color: ${(props) => props.theme.body};
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`;

const SvgContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Items = styled.ul`
    list-style: none;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    /* background-color: lightblue; */

    & > *:nth-of-type(2n + 1) {
        justify-content: start;
        div {
            border-radius: 40px 0 40px 0;
            text-align: right;
        }
        p {
            border-radius: 40px 0 40px 0;
        }
    }
    & > *:nth-of-type(2n) {
        justify-content: end;
        div {
            border-radius: 0 40px 0 40px;
            text-align: left;
        }
        p {
            border-radius: 0 40px 0 40px;
        }
    }
`;
const Item = styled.li`
    width: 100%;
    height: 100%;
    display: flex;
`;

const ItemContainer = styled.div`
    width: 40%;
    height: fit-content;
    padding: 1rem;
    border: 3px solid ${(props) => props.theme.text};
`;

const Box = styled.p`
    height: fit-content;
    background-color: ${(props) => props.theme.carouselColor};
    color: ${(props) => props.theme.text};
    padding: 1rem;
    position: relative;
    border: 1px solid ${(props) => props.theme.text};
`;
const Subtitle = styled.span`
    font-size: ${(props) => props.theme.fontxl};
    display: block;
    text-transform: capitalize;
    color: ${(props) => props.theme.text};
`;
const Text = styled.span`
    display: block;
    font-size: ${(props) => props.theme.fontsm};
    display: block;
    text-transform: capitalize;
    color: ${(props) => props.theme.text};

    font-weight: 400;
    margin: 0.5rem 0;
`;

const RoadMapItem = ({ title, subtext, addToRefs }) => {
    return (
        <Item ref={addToRefs}>
            <ItemContainer>
                <Box>
                    <Subtitle>{title}</Subtitle>
                    <Text>{subtext}</Text>
                </Box>
            </ItemContainer>
        </Item>
    );
};

const RoadMap = () => {
    const revealRef = useRef([]);
    revealRef.current = [];
    gsap.registerPlugin(ScrollTrigger);
    const addToRefs = (el) => {
        if (el && !revealRef.current.includes(el)) {
            revealRef.current.push(el);
        }
    };

    useLayoutEffect(() => {
        let tl = gsap.timeline();
        revealRef.current.forEach((el, index) => {
            tl.fromTo(
                el.childNodes[0],
                { y: '0' },
                {
                    y: '-30%',
                    scrollTrigger: {
                        id: `section-${index + 1}`,
                        trigger: el,
                        start: 'top center+= 200px',
                        end: 'bottom center',
                        scrub: true,
                        // markers: true,
                    },
                }
            );
        });

        return () => {};
    }, []);

    return (
        <Section id='roadmap'>
            <Title>Journey</Title>
            <Container>
                <SvgContainer>
                    <DrawSvg />
                </SvgContainer>
                <Items>
                    <Item>&nbsp;</Item>
                    <RoadMapItem
                        addToRefs={addToRefs}
                        title='Đến với chúng tôi'
                        subtext='Nơi cung cấp cho bạn những chuyến du lịch tuyệt vời'
                    />
                    <RoadMapItem
                        addToRefs={addToRefs}
                        title='Tìm và lựa chọn'
                        subtext='Chúng tôi đưa ra nhiều chuyến đi để bạn lựa chọn'
                    />
                    <RoadMapItem
                        addToRefs={addToRefs}
                        title='Chờ đợi'
                        subtext='Bạn chỉ cần chờ đợi tới ngày khởi khành'
                    />
                    <RoadMapItem
                        addToRefs={addToRefs}
                        title='Tận hưởng chuyến đi'
                        subtext='Chúc bạn có chuyến đi vui vẻ'
                    />
                    <RoadMapItem
                        addToRefs={addToRefs}
                        title='Đánh giá'
                        subtext='Đừng quên quay lại và đánh giá trải nghiệm của bạn'
                    />
                </Items>
            </Container>
        </Section>
    );
};

export default RoadMap;
