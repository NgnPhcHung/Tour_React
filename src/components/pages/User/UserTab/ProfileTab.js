import React, { useState } from 'react';
import styled from 'styled-components';

const ListGroup = styled.ul`
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
    border-bottom: ${(props) => props.theme.text} solid 2px;

    li {
        margin: 0 1rem;
        padding: 0.5rem 1rem 0.5rem 1rem;
        cursor: pointer;
    }

    .list-item {
        background: white;
        margin: 0 1rem;
        border: ${(props) => props.theme.text} solid 2px;
        border-bottom: 0;
        border-top-left-radius: 0.5rem;
        border-top-right-radius: 0.5rem;
        position: relative;
        top: 2px;
    }
`;

const Container = styled.div`
    width: 60%;
    .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: left;
        margin: 1rem 1rem;
        padding: 0;
    }
`;

const ProfileTab = ({ children }) => {
    const [activeTab, setActiveTab] = useState(children[0].props.label);
    const handleClick = (e, newActiveTab) => {
        e.preventDefault();
        setActiveTab(newActiveTab);
    };
    return (
        <Container>
            <ListGroup>
                {children.map((tab) => {
                    const label = tab.props.label;
                    return (
                        <li
                            className={label === activeTab ? 'list-item' : ''}
                            key={label}
                            onClick={(e) => handleClick(e, label)}
                        >
                            {label}
                        </li>
                    );
                })}
            </ListGroup>
            <div className=''>
                {children.map((item) => {
                    const label = item.props.label;
                    if (label === activeTab)
                        return (
                            <div key={label} className='content'>
                                {item.props.children}
                            </div>
                        );
                    else return '';
                })}
            </div>
        </Container>
    );
};

export default ProfileTab;
