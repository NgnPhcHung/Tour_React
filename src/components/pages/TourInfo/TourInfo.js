import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Checkout from './Checkout';
import Services from './Services/Services';
import TourBanner from './TourBanner';
import axios from 'axios';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link, useLocation, useParams } from 'react-router-dom';
import moment from 'moment';

const Section = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 5rem;
`;
const ContentContainer = styled.div`
    border-radius: 10px;

    width: 90vw;
    height: fit-content;
    padding-bottom: 1rem;
    box-shadow: 2px 12px 20px -3px ${(props) => `rgba(${props.theme.textRgba}, 0.6)`};
`;
const Desription = styled.div`
    color: ${(props) => props.theme.text};
    top: 1rem;
    padding: 0 5rem;
    margin-top: 1.2rem;
    margin-left: 1rem;
    h3 {
        padding-bottom: 0.5rem;
        text-decoration: underline;
        font-weight: 700;
        font-size: ${(props) => props.theme.fontxl};
    }

    @media (max-width: 64em) {
        display: inline-block;
        padding: 0 0.5rem;
        p {
            font-size: ${(props) => props.theme.fontsm};
        }
    }
    @media (max-width: 48em) {
        h3 {
            font-size: ${(props) => props.theme.fontlg};
        }
    }
`;
const DesriptionMenu = styled.ul`
    list-style: none;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 2rem;
    margin-bottom: 0.2em;
`;

const DesriptionItem = styled.li`
    width: fit-content;
`;
const TourInfo = () => {
    const { tourID } = useParams();

    const [tourName, setTourName] = useState('');
    const [tourDes, setTourDes] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [slot, setSlot] = useState('');

    const getTourDetail = async () => {
        const response = await axios.get(
            `http://localhost:3100/tour/details/${tourID}`
        );
        const res = response?.data.results[0];
        setTourName(res.TourName);
        setTourDes(res.Descriptions);
        setPrice(res.Price);
        setImage(res.Image);
        var start = moment(res.BeginDate).utc().format('DD-MM-YYYY');
        var end = moment(res.EndDate).utc().format('DD-MM-YYYY');
        setFrom(start);
        setTo(end);
        setSlot(res.Slot - res.OrderedSlot);
    };

    useEffect(() => {
        getTourDetail();
    }, []);

    return (
        <Section>
            <ContentContainer>
                <TourBanner name={tourName} des={tourDes} imgSrc={image} />
                <Desription>
                    <h3>Thông tin chi tiết:</h3>
                    <DesriptionMenu>
                        <DesriptionItem>Bắt đầu: {from}</DesriptionItem>
                        <DesriptionItem>Kết thúc: {to}</DesriptionItem>
                        <DesriptionItem>Giá: {price} VNĐ</DesriptionItem>
                        <DesriptionItem>Chỗ còn trống: {slot}</DesriptionItem>
                    </DesriptionMenu>
                </Desription>
            </ContentContainer>
            <Services />
            <Checkout amount  = {price}/>
        </Section>
    );
};

export default TourInfo;
