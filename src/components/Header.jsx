import React, { useState } from 'react'
import Logo from '../assets/logo.png'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)


    const getTransform = (index, isOpen) => {
        if (isOpen) {
            switch (index) {
                case 1:
                    return 'translateY(-10px)';
                case 3:
                    return 'translateX(-10px)';
                case 5:
                    return 'translateX(10px)';
                case 7:
                    return 'translateY(10px)';
                default:
                    return '';
            }
        }
        return '';
    };

    const getOpacity = (index, isOpen) => {
        if (isOpen && [1, 3, 5, 7].includes(index)) {
            return 0;
        }
        return 1;
    };

    return (
        <header className=' w-full h-16 fixed flex justify-center items-center z-30 top-10'>
            <nav className='flex w-1/2 h-full justify-center border items-center justify-between menu px-4'>
                <img src={Logo} alt='logo' className='w-16' />
                <button className=" relative" onClick={() => setIsOpen(!isOpen)}>
                    <div className="grid grid-cols-3 grid-rows-3 gap-1 w-8 h-8">
                        {Array(9)
                            .fill(0)
                            .map((_, i) => (
                                <div
                                    key={i}
                                    className={`w-2 h-2 rounded-full border transition-transform duration-300`}
                                    style={{
                                        transform: getTransform(i, isOpen),
                                        opacity: getOpacity(i, isOpen),
                                        transition: 'transform 0.3s, opacity 0.3s'
                                    }}
                                ></div>
                            ))}
                    </div>
                </button>
            </nav>

        </header>
    )
}
