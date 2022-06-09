import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import useClickOutside from '../../Handler/useClickOutside';
import Button from '../../Common/Button';
import Logo from '../sections/Logo';
import Login from '../Modal/AccountBox';
import { useScrollLock } from '../../Handler/useScrollLock';
import ProfileImg from '../sections/ProfileImg';

const Section = styled.section`
    width: 100vw;
    background-color: ${(props) => props.theme.body};
    z-index: 50;
`;
const NavBar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 85%;
    height: ${(props) => props.theme.navHeight};
    margin: 0 auto;

    .mobile {
        display: none;
    }

    @media (max-width: 64em) {
        .desktop {
            display: none;
        }
        .mobile {
            display: inline-block;
        }
    }
`;

const Menu = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;

    @media (max-width: 64em) {
        transform: ${(props) =>
            props.click ? 'translateY(0)' : 'translateY(100%)'};
        transition: all 0.3s ease;

        position: fixed;
        top: calc(${(props) => props.theme.navHeight} + 0.8rem);
        left: 0;
        right: 0;
        bottom: 0;
        width: 100vw;
        height: ${(props) => `calc(100vh - ${props.theme.navHeight})`};
        z-index: 50;
        background-color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.8)`};

        backdrop-filter: blur(5px);

        flex-direction: column;
        justify-content: center;
    }
`;

const MenuItem = styled.li`
    margin: 0 1rem;
    color: ${(props) => props.theme.text};
    cursor: pointer;

    &::after {
        content: ' ';
        display: block;
        width: 0%;
        height: 2px;
        background-color: ${(props) => props.theme.text};
        transition: width 0.3s ease;
    }

    &:hover::after {
        width: 100%;
    }
    @media (max-width: 64em) {
        margin: 1rem 0;

        &::after {
            display: none;
        }
    }
`;

const HamburgerBtn = styled.span`
    width: ${(props) => (props.click ? '2rem' : '1.5rem')};
    height: 2px;
    background: ${(props) => props.theme.text};

    position: absolute;
    top: 2rem;
    left: 50%;
    transform: ${(props) =>
        props.click
            ? 'translateX(-50%) rotate(90deg)'
            : 'translateX(-50%) rotate(0)'};

    display: none;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    transition: all 0.3s ease;

    @media (max-width: 64em) {
        display: flex; //1024px
    }

    &::after,
    &::before {
        content: ' ';
        width: ${(props) => (props.click ? '1rem' : '1.5rem')};
        height: 2px;
        right: ${(props) => (props.click ? '-2px' : '0')};
        background: ${(props) => props.theme.text};
        position: absolute;
        transition: all 0.3s ease;
    }
    &::after {
        top: ${(props) => (props.click ? '0.3rem' : '0.5rem')};
        transform: ${(props) => (props.click ? 'rotate(-40deg)' : 'rotate(0)')};
    }
    &::before {
        bottom: ${(props) => (props.click ? '0.3rem' : '0.5rem')};
        transform: ${(props) => (props.click ? 'rotate(40deg)' : 'rotate(0)')};
    }
`;

const Navigation = ({ isHide }) => {
    const [showLogin, setShowLogin] = useState(false);
    const [logged, setLogged] = useState(true);
    const ref = useRef(null);
    const [click, setClick] = useState(false);
    const scrollRef = useRef(null);
    const { lockScroll, unlockScroll } = useScrollLock();
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const element = scrollRef.current;
        const mq = window.matchMedia('(max-width: 40em)');

        if (mq.matches) {
            gsap.to(element, {
                position: 'fixed',
                top: '0',
                left: '0',
                right: '0',
                padding: '1rem 2.5rem',
                borderRadius: '0 0 50px 50px',
                border: '2px solid ',

                duration: '1',
                ease: 'power1.out',

                scrollTrigger: {
                    trigger: element,
                    start: 'bottom+=200 top',
                    end: '+=100',
                    scrub: true,
                },
            });
        } else {
            gsap.to(element, {
                position: 'fixed',
                top: '0',
                left: '0',
                right: '0',
                padding: '0 2rem',
                borderRadius: '20px',
                border: '3px solid black',
                zIndex: '10',
                duration: '1',
                ease: 'power1.out',

                scrollTrigger: {
                    trigger: element,
                    start: 'bottom+=300 top',
                    end: '+=250',
                    scrub: true,
                },
            });
        }
    }, []);

    useClickOutside(ref, () => {
        setShowLogin(false);
    });

    const Toggle = () => {
        setShowLogin(!showLogin);
    };

    showLogin ? lockScroll() : unlockScroll();

    const scrollTo = (id) => {
        let element = document.getElementById(id);
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest',
        });
        setClick(!click);
    };

    return (
        <Section ref={scrollRef}>
            <NavBar>
                <Logo />
                <HamburgerBtn click={click} onClick={() => setClick(!click)}>
                    &nbsp;
                </HamburgerBtn>
                <Menu click={click}>
                    <MenuItem onClick={() => scrollTo('home')}>Home</MenuItem>
                    <MenuItem onClick={() => scrollTo('hightlight')}>
                        HightLight
                    </MenuItem>
                    <MenuItem onClick={() => scrollTo('showcase')}>
                        Showcase
                    </MenuItem>
                    <MenuItem onClick={() => scrollTo('roadmap')}>
                        RoadMap
                    </MenuItem>
                    <MenuItem onClick={() => scrollTo('faq')}>Faq</MenuItem>
                    <div className='mobile'>
                        {logged ? (
                            <ProfileImg />
                        ) : (
                            <Button
                                text='Trở thành thành viên'
                                onClick={() => {
                                    setShowLogin(!showLogin);
                                    setClick(!click);
                                }}
                            />
                        )}
                        {showLogin && <Login show={showLogin} close={Toggle} />}
                    </div>
                </Menu>
                <div className='desktop'>
                    {logged ? (
                        <ProfileImg />
                    ) : (
                        <Button
                            text='Trở thành thành viên'
                            onClick={() => {
                                setClick(!click);
                                setShowLogin(!showLogin);
                            }}
                        />
                    )}
                    {showLogin && <Login show={showLogin} close={Toggle} />}
                </div>
            </NavBar>
        </Section>
    );
};

export default Navigation;
