import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ImageContainer = styled.div`
    border-radius: 50%;
    cursor: pointer;

    img {
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
    }
`;
const ProfileImg = () => {
    return (
        <ImageContainer>
            <a href='/profileUser'>
                <img
                    src='https://picsum.photos/500/400?random=2'
                    alt='profile'
                />
            </a>
        </ImageContainer>
        // <TestFetch />
    );
};

export default ProfileImg;
