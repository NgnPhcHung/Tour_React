import React from 'react';
import styled from 'styled-components';
import GIF from '../../assets/Video/travel.mp4';
import TypeWriterText from './TypeWriterText';

const VideoContainer = styled.div`
    width: 100%;
    height: 150%;
    position: relative;
    video {
        width: 100%;
        height: 100vh;
        object-fit: cover;
    }
`;
const Title = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: 2vw;
`;
const Box = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const DarkOverlay = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    background-color: ${(props) => `rgba(${props.theme.textRgba}, 0.6)`};
`;

const CoverVideo = () => {
    return (
        <VideoContainer>
            <DarkOverlay />
            <Box>
                <Title>
                    <div>
                        <TypeWriterText />
                    </div>
                </Title>
            </Box>

            <video src={GIF} type='video/mp4' autoPlay muted loop />
        </VideoContainer>
    );
};

export default CoverVideo;
