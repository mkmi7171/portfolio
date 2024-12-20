import React, { useEffect, useRef } from 'react';
import { useDarkMode } from './DarkModeContext';

const InteractiveBackground = ({ colors }) => {
    const {isDarkMode} = useDarkMode()
    const interactiveRef = useRef(null);
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    useEffect(() => {
        const interBubble = interactiveRef.current;

        function move() {
            curX += (tgX - curX) / 20;
            curY += (tgY - curY) / 20;
            if (interBubble) {
                interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
            }
            requestAnimationFrame(move);
        }

        const handleMouseMove = (event) => {
            tgX = event.clientX;
            tgY = event.clientY;
        };

        window.addEventListener('mousemove', handleMouseMove);
        move();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
            <div className="gradient-bg h-screen" style={{
                '--color1': colors[0],
                '--color2': colors[1],
                '--color-interactive': isDarkMode ? '#191818' : colors[2],
            }}>
                <svg xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <filter id="goo">
                            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
                            <feBlend in="SourceGraphic" in2="goo" />
                        </filter>
                    </defs>
                </svg>
                <div className="gradients-container h-full">
                    <div className="g1"></div>
                    <div className="g2"></div>
                    <div className="g3"></div>
                    <div className="g4"></div>
                    <div className="g5"></div>
                    <div ref={interactiveRef} className="interactive"></div>
                </div>
            </div>
    );
};

export default InteractiveBackground;
