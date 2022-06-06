import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';
import Accordion from '../../sections/Accordion';

const Section = styled.section`
    min-height: 100vh;
    width: 100vw;
    background-color: ${(props) => props.theme.text};
    position: relative;
    color: ${(props) => props.theme.body};

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Title = styled.h2`
    font-size: ${(props) => props.theme.fontxxl};
    text-transform: uppercase;
    color: ${(props) => props.theme.body};
    margin: 1rem auto;
    border-bottom: 2px solid ${(props) => props.theme.body};
    width: fit-content;

    @media (max-width: 64em) {
        font-size: ${(props) => props.theme.fontxl};
    }
`;

const Container = styled.div`
    width: 75%;
    margin: 2rem auto;
    display: flex;
    justify-content: space-between;
    align-content: center;

    @media (max-width: 64em) {
        width: 80%;
    }

    @media (max-width: 64em) {
        width: 90%;
        flex-direction: column;
    }
`;

const Box = styled.div`
    width: 45%;

    @media (max-width: 64em) {
        width: 90%;
        align-self: center;
    }
`;

const Faq = () => {
    const ref = useRef(null);
    gsap.registerPlugin(ScrollTrigger);
    useLayoutEffect(() => {
        let element = ref.current;
        ScrollTrigger.create({
            trigger: element,
            start: 'top top',
            end: 'bottom top',
            pin: true,
            pinSpacing: false,
            scrub: true,
        });
        return () => {
            ScrollTrigger.kill();
        };
    }, []);
    return (
        <Section ref={ref} id='faq'>
            <Title>Faq</Title>
            <Container>
                <Box>
                    <Accordion title='Chất lượng tour du lịch nước ngoài của công ty có đảm bảo không?'>
                        Có, rất là đảm bảo
                    </Accordion>
                    <Accordion title='Tôi muốn đặt tour của công ty du lịch thì phải đặt trước bao lâu?'>
                        Bao lâu tuỳ bạn hỏi tôi làm gì?
                    </Accordion>
                    <Accordion title='Giá công bố là giá sau khi đã tính tất cả các phí phải không?'>
                        Ai biết
                    </Accordion>
                </Box>
                <Box>
                    <Accordion title='Đặt tour tại đây tôi được lợi/tiền/quà tặng gì không?'>
                        Được tour
                    </Accordion>
                    <Accordion title='Việc thay đổi hay hủy tour có dễ dàng không? Có tốn phí không?'>
                        Bạn cứ thử huỷ xem coi có tốn phí hay không
                    </Accordion>
                    <Accordion title='Chúng tôi có thể đặt cọc trước 50% số tiền cần thanh toán cho khách sạn được không?'>
                        100% cũng được luôn bạn ei
                    </Accordion>
                </Box>
            </Container>
        </Section>
    );
};

export default Faq;
