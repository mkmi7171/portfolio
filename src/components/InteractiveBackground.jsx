import React, { useEffect, useRef } from 'react';


const InteractiveBackground = () => {
    const interactiveRef = useRef(null);
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    useEffect(() => {
        // Function to move the interactive element smoothly
        const move = () => {
            if (interactiveRef.current) {
                curX += (tgX - curX) / 20;
                curY += (tgY - curY) / 20;
                interactiveRef.current.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
            }
            requestAnimationFrame(move);
        };

        // Event listener for mouse move
        const handleMouseMove = (event) => {
            tgX = event.clientX;
            tgY = event.clientY;
        };

        window.addEventListener('mousemove', handleMouseMove);
        move(); // Start the movement animation loop

        // Cleanup event listener on component unmount
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="gradient-bg">
            <div className="gradients-container">
                <div className="g1"></div>
                <div className="g2"></div>
                <div className="g3"></div>
                <div className="g4"></div>
                <div className="g5"></div>
                <div className="interactive" ></div>
            </div>
            <div className="text-container">Moving Gradient Background</div>
        </div>
    );
};

export default InteractiveBackground;
