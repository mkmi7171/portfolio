import { useEffect, useRef, useState } from 'react';
import hoverEffect from 'hover-effect';
import displacementImage from '../assets/displacement/1.jpg';

export default function ProjectCard({ color, title, index, image, image2 }) {
    const titleRef = useRef(null);
    const imageRef = useRef(null);
    const hoverEffectInstance = useRef(null);
    const [isHovered, setIsHovered] = useState(false);


    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'gradient 3s ease-in-out forwards 1s';
                }
            });
        }, { threshold: 0.5 });

        if (titleRef.current) {
            observer.observe(titleRef.current);
        }

        return () => {
            if (titleRef.current) observer.unobserve(titleRef.current);
        };
    }, []);

    useEffect(() => {
        if (imageRef.current && !hoverEffectInstance.current) {
            hoverEffectInstance.current = new hoverEffect({
                parent: imageRef.current,
                image1: image,
                image2: image2,
                displacementImage: displacementImage,
                intensity: 0.3,
            });
        }
    }, [image, image2]);


    return (
        <div data-index={`0${index + 1}`} className={`w-9/12 h-2/3 flex justify-center items-center projectCard before:content-[0${index + 1}] relative`}>
            <div className='h-[80%] w-[36%] img-box overflow-hidden relative' ref={imageRef} onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}></div>

            <div className="w-[30%] border h-full flex flex-col justify-center items-center">
                <h4
                    className='text-4xl font-extrabold'
                    ref={titleRef}
                    style={{
                        background: `linear-gradient(-45deg, ${color}, #fff)`,
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        color: 'white',
                        backgroundSize: '400% 400%',
                        animation: '',
                    }}
                >
                    {`${title} Project`}
                </h4>
                <p className="text-whiteText before:w-24 before:h-[1px] before:bg-[#C4C4C4] hover:before:w-48 transition before:absolute relative before:bottom-0" style={{ color }}>
                    more details
                </p>
            </div>
        </div>
    );
}
