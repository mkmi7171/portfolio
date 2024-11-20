import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {useDarkMode} from './DarkModeContext'
import switchSound from '../assets/transition-base.mp3';

export default function Header() {
    const location = "Toronto";
    const [currentTime, setCurrentTime] = useState("");

    const { isDarkMode, toggleDarkMode } = useDarkMode();

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const formattedTime = new Intl.DateTimeFormat('en-GB', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
                timeZoneName: 'short'
            }).format(now);
            setCurrentTime(formattedTime);
        };

        updateTime();
        const timer = setInterval(updateTime, 1000);
        return () => clearInterval(timer);
    }, []);

    const handleToggleTheme = () => {
        const audio = new Audio(switchSound);
        audio.play();
        toggleDarkMode(); 
    };

    return (
        <div className="relative text-extralight">
            <header className="w-full h-16 absolute flex justify-center items-center z-50">
                <nav className="flex w-full h-full items-center px-8 justify-between">

                    <div className='flex items-center gap-20'>
                        <svg viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg">
                            <path
                                id="circlePath"
                                fill="none"
                                strokeWidth="4"
                                d="
                                M 10, 70
                                a 40,40 0 1,1 80,0
                                a 40,40 0 1,1 -80,0"
                            />
                            <text id="text" fontFamily="monospace" fontSize="16" fill="#505050">
                                <textPath id="textPath" href="#circlePath">
                                    Mahsa Karami Mahsa Karami
                                </textPath>
                            </text>
                        </svg>
                        <span className='text-xs uppercase'>{`${location}, ${currentTime}`}</span>
                    </div>

                    <div className="flex text-xs uppercase h-full self-center items-center">
                        <Link to="/"><p>Home</p></Link>
                        <span className="mx-2">/</span>
                        <Link to="/projects">Projects</Link>

                        <div
                            className={`w-5 h-5 rounded-full ${isDarkMode ? 'bg-white' : 'bg-black'} ml-20 cursor-pointer`}
                            onClick={handleToggleTheme}
                        ></div>
                    </div>
                </nav>
            </header>
        </div>
    );
}
