import ParticlesBg from 'particles-bg';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ProfileTab from './UserTab/ProfileTab';
import TourInfor from './Tour/TourInfor';
import ProfileCard from './UserTab/ProfileCard';

const Section = styled.div`
    height: 95vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 5rem;
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
