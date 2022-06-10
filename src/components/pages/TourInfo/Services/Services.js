import React from 'react';
import styled from 'styled-components';
import ServiceCard from './ServiceCard';

const MenuItem = styled.ul`
    background-color: ${(props) => props.theme.body};

    margin-top: 2rem;
`;

const Item = styled.li`
    width: fit-content;
    cursor: pointer;

    &::after {
        content: ' ';
        display: block;
        width: 0%;
        height: 2px;

        transition: width 0.3s ease;
    }

    &:hover::after {
        width: 100%;
    }
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
    return (
        <MenuItem>
            <Title>Dịch vụ đi kèm</Title>
            <ServicesContent>
                <ServiceCard id='c1' price='50.000' slot='10' />
                <ServiceCard id='c2' price='50.000' slot='10' />
                <ServiceCard id='c3' price='0' slot='10' />
                <ServiceCard id='c4' price='50.000' slot='10' />
                <ServiceCard id='c5' price='0' slot='10' />
                <ServiceCard id='c6' price='50.000' slot='10' />
                <ServiceCard id='c7' price='50.000' slot='10' />
            </ServicesContent>
        </MenuItem>
    );
};

export default Services;
