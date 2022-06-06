import ParticlesBg from 'particles-bg';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ProfileTab from '../ProfileTab';
import TourInfor from '../TourInfor';
import ProfileCard from './ProfileCard';

const Section = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Profile = () => {
    return (
        <Section>
            <ProfileTab>
                <div label='Thông tin'>
                    <ProfileCard level={2} />
                </div>
                <div label='Tour'>
                    <TourInfor />
                </div>
            </ProfileTab>
        </Section>
    );
};

export default Profile;
