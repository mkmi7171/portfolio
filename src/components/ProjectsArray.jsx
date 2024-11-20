import OstiganCard from "../assets/ostiganThumb.png";
import Ostigan1 from '../assets/projectsPic/ostigan1.png'
import Ostigan2 from '../assets/projectsPic/ostigan2.png'
import Ostigan3 from '../assets/projectsPic/ostigan3.png'
import Ostigan4 from '../assets/projectsPic/ostigan4.png'
import Ostigan5 from '../assets/projectsPic/ostigan5.png'
import Mehrayan1 from '../assets/projectsPic/mehrayan1.png'
import Mehrayan2 from '../assets/projectsPic/mehrayan2.png'
import Mehrayan3 from '../assets/projectsPic/mehrayan3.png'
import Mehrayan4 from '../assets/projectsPic/mehrayan4.png'
import Mehrayan5 from '../assets/projectsPic/mehrayan5.png'
import Agro1 from '../assets/projectsPic/agro1.png'
import Agro2 from '../assets/projectsPic/agro2.png'
import Agro3 from '../assets/projectsPic/agro3.png'
import Agro4 from '../assets/projectsPic/agro4.png'
import Agro5 from '../assets/projectsPic/agro5.png'
import Atc1 from '../assets/projectsPic/atc1.png'
import Atc2 from '../assets/projectsPic/atc2.png'
import Atc3 from '../assets/projectsPic/atc3.png'
import Atc4 from '../assets/projectsPic/atc4.png'
import Atc5 from '../assets/projectsPic/atc5.png'
import One1 from '../assets/projectsPic/one1.png'
import One2 from '../assets/projectsPic/one2.png'
import One3 from '../assets/projectsPic/one3.png'
import One4 from '../assets/projectsPic/one4.png'
import One5 from '../assets/projectsPic/one5.png'
import MehrayanCard from '../assets/mehrayanThumb.png'
import AtcCard from '../assets/atcThumb.png'
import OneandintlCard from '../assets/oneandintlThumb.png'
import AgrotaminCard from '../assets/agroThumb.jpeg'
import MahsaCard from '../assets/mahsa.jpeg'
import Portfolio from '../assets/projectsPic/portfolio.png'

export const projects = [
    {
        color: '#e6fff9',
        image: OstiganCard,
        title: "Ostigan",
        id: 1,
        description: `Ostigan is a comprehensive digital marketplace application available for both Android and iOS platforms. Its features include: <ul class="list">
        <li>Sell gift cards across various regions and currencies.</li>
        <li>Facilitate international transactions.</li>
        <li>Wallet with options for withdrawal, deposit, and transfer.</li>
        <li>In-app ticketing system </li>
        <li>Push notifications</li>
        <li>Multi-level authentication system</li>
        <li>Fingerprint login option </li>
        <li>Secure authorization</li>
    </ul> `,
        detailedPics: [
            { src: Ostigan5, alt: 'Ostigan feature 5' },
            { src: Ostigan1, alt: 'Ostigan feature 1' },
            { src: Ostigan2, alt: 'Ostigan feature 2' },
            { src: Ostigan3, alt: 'Ostigan feature 3' },
            { src: Ostigan4, alt: 'Ostigan feature 4' }
        ],
        detailInfo: 
            {
                role: 'mobile application developer',
                techs: 'React Native, Typescript, Redux, React Navigation, React Query, Firebase, JWT',
                year: '2023-2024'
            }
        
    },
    {
        color: '#fdeee7',
        image: AtcCard,
        title: "ATC",
        id: 2,
        description: 'ATC Holding is a parent company that encompasses several subsidiary holdings. The website was designed to represent the company and cater to its internal operational needs',
        detailedPics: [
            { src: Atc1, alt: 'ATC feature 1' },
            { src: Atc2, alt: 'ATC feature 2' },
            { src: Atc3, alt: 'ATC feature 3' },
            { src: Atc4, alt: 'ATC feature 4' },
            { src: Atc5, alt: 'ATC feature 5' },
        ],
        detailInfo: 
            {
                role: 'Frontend Developer',
                techs: 'Next.js, Javascript',
                year: '2022'
            }
        
    },
    {
        color: '#fcf5e9',
        image: AgrotaminCard,
        title: "Agrotamin",
        id: 3,
        description:'AgroTamin is a leading grain trading company and one of the top grain importers. The website showcases their operations, highlights their expertise in grain trading, and provides detailed information about their storage facilities',
        detailedPics: [
            { src: Agro1, alt: 'Agrotamin feature 1' },
            { src: Agro2, alt: 'Agrotamin feature 2' },
            { src: Agro3, alt: 'Agrotamin feature 3' },
            { src: Agro4, alt: 'Agrotamin feature 4' },
            { src: Agro5, alt: 'Agrotamin feature 5' },
        ],
        detailInfo: 
            {
                role: 'Frontend Developer',
                techs: 'Next.js, Javascript',
                year: '2022'
            }
        
    },
    {
        color: '#ebebfa',
        image: MehrayanCard,
        title: "Mehrayan",
        id: 4,
        description:'Mehrayan is a technology firm that collaborates with designers and developers to create software, web and mobile applications for its business growth. One of their flagship products is Ostigan. The website reflects their mission and showcases their expertise.',
        detailedPics: [
            { src: Mehrayan1, alt: 'Mehrayan feature 1' },
            { src: Mehrayan2, alt: 'Mehrayan feature 2' },
            { src: Mehrayan3, alt: 'Mehrayan feature 3' },
            { src: Mehrayan4, alt: 'Mehrayan feature 4' },
            { src: Mehrayan5, alt: 'Mehrayan feature 5' },
        ],
        detailInfo: 
            {
                role: 'Frontend developer',
                techs: 'React.js, Javascript',
                year: '2023'
            }
        
    },
    {
        color: '#f5f3f0',
        image: MahsaCard,
        title: "Portfolio",
        id: 5,
        description: 'This website is my personal portfolio. You are exploring it right now!',
        detailedPics: [
            { src: Portfolio, alt: 'Portfolio feature 1' },
        ],
        detailInfo: 
            {
                role: 'Frontend developer',
                techs: 'React.js',
                year: '2024'
            }
        
    },
    {
        color: '#fff9e6',
        image: OneandintlCard,
        title: "oneandintl",
        id: 6,
        description:'One and Intel is a  well known trading company specializing in the importation of agricultural products, oils, and grains across multiple countries. The website highlights their import regions, the range of products they trade, and showcases their potential in the global market.',
        detailedPics: [
            { src: One1, alt: 'oneandintl feature 1' },
            { src: One2, alt: 'oneandintl feature 2' },
            { src: One3, alt: 'oneandintl feature 3' },
            { src: One4, alt: 'oneandintl feature 4' },
            { src: One5, alt: 'oneandintl feature 5' },
        ],
        detailInfo: 
            {
                role: 'Frontend developer',
                techs: 'React.js, Javascript',
                year: '2022'
            }
        
    }
];
