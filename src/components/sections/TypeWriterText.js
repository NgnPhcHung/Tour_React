import React from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import Typewriter from 'typewriter-effect';
import Button from '../../Common/Button';
import { dark } from '../../styles/Themes';

const Title = styled.h2`
    font-size: ${(props) => props.theme.fontxxl};
    text-transform: capitalize;
    width: 70%;
    color: ${(props) => props.theme.body};
    align-self: flex-start;

    span {
        text-transform: uppercase;
        font-family: 'Itim', cursive;
    }
    .text-1 {
        color: blue;
    }
    .text-2 {
        color: orange;
    }
    .text-3 {
        color: red;
    }

    @media (max-width: 70em) {
        font-size: ${(props) => props.theme.fontxl};
    }
    @media (max-width: 48em) {
        align-self: center;
        text-align: center;
    }
    @media (max-width: 40em) {
        width: 85%;
    }
`;

const SubTitle = styled.h3`
    font-size: ${(props) => props.theme.fontlg};
    text-transform: capitalize;
    color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.8)`};
    font-weight: 600;
    margin-bottom: 1rem;
    width: 80%;
    align-self: flex-start;

    @media (max-width: 48em) {
        align-self: center;
        text-align: center;
    }
    @media (max-width: 40em) {
        font-size: ${(props) => props.theme.fontmd};
    }
`;

const ButtonContainer = styled.div`
    width: 80%;
    align-self: flex-start;

    @media (max-width: 48em) {
        align-self: center;
        text-align: center;

        button {
            margin: 0 auto;
        }
    }
`;

const TypeWriterText = () => {
    return (
        <>
            <Title>
                Chào mừng bạn đến với chúng tôi
                <Typewriter
                    options={{
                        autoStart: true,
                        loop: true,
                    }}
                    onInit={(typewriter) => {
                        typewriter
                            .typeString(
                                '<span class= "text-1">Muốn đi xa thì không đi gần</span>'
                            )
                            .pauseFor(2000)
                            .deleteAll()
                            .typeString(
                                '<span class= "text-2">Muốn đi nhanh hãy vặn hết ga</span>'
                            )
                            .pauseFor(2000)
                            .deleteAll()
                            .typeString(
                                '<span class= "text-3">Bạn đâu, tôi đó, đôi khi không</span>'
                            )
                            .pauseFor(2000)
                            .deleteAll()
                            .start();
                    }}
                />
            </Title>
            <SubTitle>Chúc bạn khám phá vui vẻ</SubTitle>

            <ButtonContainer>
                <ThemeProvider theme={dark}>
                    <Button text='Explore' link='#About' />
                </ThemeProvider>
            </ButtonContainer>
        </>
    );
};

export default TypeWriterText;
