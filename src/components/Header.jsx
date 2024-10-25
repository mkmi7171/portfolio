import React, { useState } from 'react'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const MenuArray = [
        { name: 'Home', destination: "Home" },
        { name: 'Expertise', title: "Expertise" },
        { name: 'Work', title: "Work" },
        { name: 'contact', title: "contact" },
    ];

    const getTransform = (index, isOpen) => {
        if (isOpen) {
            switch (index) {
                case 0:
                    return 'translate(-10px, -10px) ';
                case 2:
                    return 'translate(10px, -10px) ';
                case 6:
                    return 'translate(-10px, 10px) ';
                case 8:
                    return 'translate(10px, 10px) ';
                default:
                    return '';
            }
        }
        return ''; // Default state, no transformation when not open
    };

    return (
        <header className=' w-full h-16 absolute flex justify-center items-center z-30'>
            <nav className='hidden md:flex w-1/2 h-full justify-center items-center justify-between'>
                {MenuArray.map((item, index) => (
                    <li className='text-whiteText flex flex-col items-end'>
                        <span className='text-xs'>0{index + 1}</span>
                        <p>{item.name}</p>
                    </li>
                ))}
            </nav>
            <button className="md:hidden border relative" onClick={() => setIsOpen(!isOpen)}>
                <div className="grid grid-cols-3 grid-rows-3 gap-1 w-8 h-8">
                    {Array(9)
                        .fill(0)
                        .map((_, i) => (
                            <div
                                key={i}
                                className={`w-2 h-2 rounded-full border transition-transform duration-300 ${i === 6 && 'bg-rose-600'}`}
                                style={{
                                    transform: getTransform(i, isOpen), // Apply transform based on index and open state
                                }}
                            ></div>
                        ))}
                </div>
            </button>
            {isOpen && (
                <div className="border flex flex-col items-center md:hidden">
                    <ul className="space-y-4">
                        {MenuArray.map((item, index) => (
                            <li key={index} className="text-whiteText">
                                <p>{item.name}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    )
}
