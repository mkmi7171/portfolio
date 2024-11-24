import { useAnimate, motion } from "framer-motion";
import React, { useRef, useState } from "react";
import pic1 from '../assets/smallPics/1.png'
import pic2 from '../assets/smallPics/2.png'
import pic3 from '../assets/smallPics/3.png'
import pic4 from '../assets/smallPics/4.png'
import pic5 from '../assets/smallPics/5.png'
import pic6 from '../assets/smallPics/6.png'
import pic7 from '../assets/smallPics/7.png'
import pic8 from '../assets/smallPics/8.png'
import pic9 from '../assets/smallPics/9.png'
import pic10 from '../assets/smallPics/10.png'

export const ImageTrail = () => {
    const [isTextAnimationComplete, setTextAnimationComplete] = useState(false);

    const containerVariants = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                when: "afterChildren", 
            },
        },
    };

    const letterVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                damping: 20,
                stiffness: 90,
            },
        },
    };

    return (
        <MouseImageTrail
            renderImageBuffer={60}
            rotationRange={1}
            images={[
                pic1,
                pic2,
                pic3,
                pic4,
                pic5,
                pic6,
                pic7,
                pic8,
                pic9,
                pic10
            ]}
            ready={isTextAnimationComplete}
        >
            <div className="flex h-[65vh] items-center px-8 justify-between">
                <p className="text-xs font-safiro-reg-i">last projects</p>
                <div className="gap-8 flex flex-col justify-center items-center p-3">
                    <motion.h1
                        className="text-6xl char uppercase leading-[0.9]"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        onAnimationComplete={() => setTextAnimationComplete(true)} // Set ready after animation
                    >
                        {Array.from("Projects ").map((char, index) => (
                            <motion.div
                                key={index}
                                variants={letterVariants}
                                className="font-safiro-reg-i"
                                style={{ display: 'inline-block' }}
                            >
                                {char}
                            </motion.div>
                        ))}
                    </motion.h1>
                    <p className="w-1/2 tracking-tighter leading-5 font-safiro-reg font-light">
                        Following are some of my recent projects in frontend and mobile application development. Scroll down to explore more!
                    </p>
                </div>
                <p className="text-xs font-safiro-reg-i">scroll</p>
            </div>
        </MouseImageTrail>
    );
};

const MouseImageTrail = ({
    children,
    images,
    renderImageBuffer,
    rotationRange,
    ready, 
}) => {
    const [scope, animate] = useAnimate();
    const lastRenderPosition = useRef({ x: 0, y: 0 });
    const imageRenderCount = useRef(0);
    const movementCounter = useRef(0);

    const handleMouseMove = (e) => {
        if (!ready) return; 

        const { clientX, clientY } = e;
        const distance = calculateDistance(
            clientX,
            clientY,
            lastRenderPosition.current.x,
            lastRenderPosition.current.y
        );

        if (distance >= renderImageBuffer) {
            movementCounter.current += 1;

            if (movementCounter.current >= 3) {
                lastRenderPosition.current.x = clientX;
                lastRenderPosition.current.y = clientY;

                renderNextImage();
                movementCounter.current = 0;
            }
        }
    };

    const calculateDistance = (x1, y1, x2, y2) => {
        const deltaX = x2 - x1;
        const deltaY = y2 - y1;
        return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    };

    const renderNextImage = () => {
        const imageIndex = imageRenderCount.current % images.length;
        const selector = `[data-mouse-move-index="${imageIndex}"]`;

        const el = document.querySelector(selector);

        el.style.top = `${lastRenderPosition.current.y}px`;
        el.style.left = `${lastRenderPosition.current.x}px`;
        el.style.zIndex = imageRenderCount.current.toString();

        const rotation = Math.random() * rotationRange;

        animate(
            selector,
            {
                opacity: [0, 1],
                transform: [
                    `translate(-50%, -25%) scale(0.5) ${imageIndex % 2
                        ? `rotate(${rotation}deg)`
                        : `rotate(-${rotation}deg)`
                    }`,
                    `translate(-50%, -50%) scale(1) ${imageIndex % 2
                        ? `rotate(-${rotation}deg)`
                        : `rotate(${rotation}deg)`
                    }`,
                ],
            },
            { type: "spring", damping: 15, stiffness: 200 }
        );

        animate(
            selector,
            {
                opacity: [1, 0],
                scale: [1, 0.3],
            },
            { ease: "linear", duration: 0.3, delay: 0.3 }
        );

        imageRenderCount.current = imageRenderCount.current + 1;
    };

    return (
        <div
            ref={scope}
            className="relative overflow-hidden"
            onMouseMove={handleMouseMove}
        >
            {children}

            {images.map((img, index) => (
                <img
                    className="pointer-events-none absolute left-0 top-0 h-24 w-auto rounded-xl object-cover opacity-0"
                    src={img}
                    alt={`Mouse move image ${index}`}
                    key={index}
                    data-mouse-move-index={index}
                />
            ))}
        </div>
    );
};
