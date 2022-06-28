import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ContentSlide from '../../sections/Slider';
import axios from 'axios';
import { HashLoader } from 'react-spinners';

const Section = styled.div`
    background: ${(props) => props.theme.text};
    height: 120vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    flex: 50%; /* or - flex: 0 50% - or - flex-basis: 50% - */
    /*demo*/
    box-shadow: 0 0 0 1px black;
    margin-bottom: 10px;
`;

const Item = styled.div`
    width: 100%;
    margin-top: 2em;
    margin-bottom: auto;

    &:not(:first-child) {
        padding-bottom: 20em;
    }
    &:not(:last-child) {
        padding-bottom: 20em;
    }
`;

const Load = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CardSlider = () => {
    const [datas, setDatas] = useState([]);
    const [data1, setData1] = useState([]);
    const [data2, setData2] = useState([]);

    const [loading, setLoading] = useState(false);

    const getTourData = async () => {
        const data = await axios
            .get('http://localhost:3100/tour/list/100')
            .then((response) => {
                setDatas({ ...response.data.results });
                for (let i = 0; i < response.data.results.length; i++) {
                    if (response.data.results[i].Status == 2) {
                        // setData1({ data1: data1, ...response.data.results[i] });
                        data1.push(response.data.results[i]);
                    } else if (response.data.results[i].Status == 3) {
                        data2.push(response.data.results[i]);
                        // setData2({ data2: data2, ...response.data.results[i] });
                    }
                }
                setLoading(true);
            });
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            getTourData();
        }, 4000);
        return () => clearTimeout(timer);
    }, []);
    return (
        <Section id='showcase'>
            {loading ? (
                <div>
                    <Item>
                        <ContentSlide title='Đang diễn ra' data={data1} />
                    </Item>
                    <Item>
                        <ContentSlide title='Sắp diễn ra' data={data2} />
                    </Item>
                </div>
            ) : (
                <Load>
                    <HashLoader color='#ffffff' />
                </Load>
            )}
        </Section>
    );
};

export default CardSlider;
