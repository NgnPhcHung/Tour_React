import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Checkout from './Checkout';
import TourBanner from './TourBanner';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import ServiceCard from './Services/ServiceCard';
import { currencyFormat } from '../../../Handler/currency';

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

const ServicesContent = styled.form`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center; ;
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
    const [datas, setDatas] = useState([]);

    const [service, setService] = useState([]);
    const getTourDetail = async () => {
        const response = await axios.get(
            `http://localhost:3100/tour/details/${tourID}`
        );
        const res = response?.data.results[0];
        console.log(res);
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

    const getServicesData = async () => {
        try {
            const response = await axios.get(
                'http://localhost:3100/service/list'
            );
            setDatas(response?.data.results);
        } catch (err) {
            if (err.response?.status == 400) {
                console.log('tour are not correct');
            }
        }
    };

    const handleChange = (e) => {
        let checkedValue = e.target.value;

        let isCheck = e.target.checked;
        if (isCheck) {
            service.push(checkedValue);
            setService(eliminateDuplicates(service));
            // console.log(service);
        } else {
            removeElement(service, e.target.value);
            // console.log(service);
        }
    };
    function eliminateDuplicates(arr) {
        var i,
            len = arr.length,
            out = [],
            obj = {};

        for (i = 0; i < len; i++) {
            obj[arr[i]] = 0;
        }
        for (i in obj) {
            out.push(i);
        }
        return out;
    }
    function removeElement(array, elem) {
        var index = array.indexOf(elem);
        if (index > -1) {
            array.splice(index, 1);
        }
    }
    useEffect(() => {
        getTourDetail();
        getServicesData();
    }, []);

    return (
        <Section id='tourInfor'>
            <ContentContainer>
                <TourBanner name={tourName} des={tourDes} imgSrc={image} />
                <Desription>
                    <h3>Thông tin chi tiết:</h3>
                    <DesriptionMenu>
                        <DesriptionItem>Bắt đầu: {from}</DesriptionItem>
                        <DesriptionItem>Kết thúc: {to}</DesriptionItem>
                        <DesriptionItem>
                            Giá: {currencyFormat(price)} VNĐ
                        </DesriptionItem>
                        <DesriptionItem>Chỗ còn trống: {slot}</DesriptionItem>
                    </DesriptionMenu>
                </Desription>
            </ContentContainer>
            <ServicesContent>
                {datas.map((item, index) => {
                    return (
                        <ServiceCard
                            key={item.SID}
                            data={item}
                            change={handleChange}
                        />
                    );
                })}
            </ServicesContent>
            <Checkout tour={tourID} amount={price} service={service} />
        </Section>
    );
};

export default TourInfo;
