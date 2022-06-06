import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import PeopleIcon from '@mui/icons-material/People';
import { DateRange } from 'react-date-range';

const SearchContainer = styled.div`
    position: absolute;
    z-index: 50;
    top: 3rem;
    align-items: center;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    background-color: ${(props) => props.theme.body};
`;

const PeopleTitle = styled.h2`
    width: 559px;
    padding: 10px;
    font-size: ${(props) => props.theme.fontmd};
    display: flex;
    align-items: center;
    justify-content: space-between;
    left: 0;
    top: 380;

    @media (max-width: 480px) {
        .rdr-calendar-range {
            width: 320px;
        }
        .rdr-calendar-range-part {
            width: 100%;
        }
    }
`;

const GuestPicker = styled.input.attrs({
    type: 'number',
    min: '1',
    defaultValue: '2',
})`
    border: none;
    &:focus {
        outline: none;
    }
`;
const ButtonSearch = styled.button`
    background-color: #ff7779;
    width: 100%;
    font-size: ${(props) => props.theme.fontsm};
    padding: 0.9rem 2.3rem;
    font-weight: 900;
    cursor: pointer;
    color: ${(props) => props.theme.body};

    &:hover {
        background-color: ${(props) => props.theme.body};
        color: #ff7779;
    }
`;

const Search = () => {
    const [start, setStartDate] = useState(new Date());
    const [end, setEndDate] = useState(new Date());

    const [matches, setMatches] = useState(
        window.matchMedia('(max-width: 48em)').matches
    );

    useEffect(() => {
        const handler = (e) => this.setState({ matches: e.matches });

        return () => {
            window
                .matchMedia('(max-width: 48em)')
                .addEventListener('change', handler);
        };
    }, [matches]);

    const selectionRange = {
        startDate: start,
        endDate: end,
        key: 'selection',
    };

    function handleSelect(ranges) {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    return (
        <SearchContainer>
            {matches ? (
                <DateRange
                    editableDateInputs={true}
                    onChange={handleSelect}
                    moveRangeOnFirstSelection={false}
                    ranges={[selectionRange]}
                />
            ) : (
                <DateRangePicker
                    ranges={[selectionRange]}
                    onChange={handleSelect}
                />
            )}

            <PeopleTitle>
                Number of Guest <PeopleIcon />
                <GuestPicker />
            </PeopleTitle>
            <ButtonSearch
                onClick={() => {
                    const newS = start.toString().split(' ');
                    const newE = end.toString().split(' ');

                    console.log(
                        'from :',
                        newS[0] +
                            '-' +
                            newS[1] +
                            '-' +
                            newS[2] +
                            '-' +
                            newS[3] +
                            ' timezone ' +
                            newS[5]
                    );
                    console.log(
                        'to :',
                        newS[0] +
                            '-' +
                            newE[1] +
                            '-' +
                            newE[2] +
                            '-' +
                            newE[3] +
                            ' timezone ' +
                            newE[5]
                    );
                }}
            >
                Tìm
            </ButtonSearch>
        </SearchContainer>
    );
};

export default Search;
