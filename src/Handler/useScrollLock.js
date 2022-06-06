import React from 'react';
export const useScrollLock = () => {
    const lockScroll = React.useCallback(() => {
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = '17px';
    }, []);

    const unlockScroll = React.useCallback(() => {
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
    }, []);

    React.useLayoutEffect(() => {
        const scrollBarCompensation =
            window.innerWidth - document.body.offsetWidth;
        document.body.style.setProperty(
            '--scrollbar-compensation',
            `${scrollBarCompensation}px`
        );
    }, []);

    return {
        lockScroll,
        unlockScroll,
    };
};
