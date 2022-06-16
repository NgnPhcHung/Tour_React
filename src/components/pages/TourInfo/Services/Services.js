import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ServiceCard from './ServiceCard';

const MenuItem = styled.ul`
    background-color: ${(props) => props.theme.body};

    margin-top: 2rem;
`;

const Title = styled.h4`
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

const ServicesContent = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center; ;
`;

const Services = () => {
    const [datas, setDatas] = useState([]);

    const getServicesData = async () => {
        try {
            const response = await axios.get(
                'http://localhost:3100/order/list'
            );
            console.log(response?.data);
            setDatas(response?.data.results);
        } catch (err) {
            if (err.response?.status == 400) {
                console.log('tour are not correct');
            }
        }
    };

    useEffect(() => {
        getServicesData();
    }, []);
    return (
        <MenuItem>
            <Title>Dịch vụ đi kèm</Title>
            <ServicesContent>
                {datas.map((item, index) => {
                    return (
                        <ServiceCard
                            id={item.SID}
                            name={item.ServiceName}
                            price={item.Price}
                            slot={item.Slot - item.OrderedSlot}
                        />
                    );
                })}
            </ServicesContent>
        </MenuItem>
    );
};

export default Services;
