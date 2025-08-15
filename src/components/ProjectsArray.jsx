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
import HHFThumb from '../assets/hhfThumb.jpg'
import HHF1 from '../assets/projectsPic/hhf1.png'
import HHF2 from '../assets/projectsPic/hhf2.png'
import HHF3 from '../assets/projectsPic/hhf3.png'
import HHF4 from '../assets/projectsPic/hhf4.png'
import HHF5 from '../assets/projectsPic/hhf5.png'
import TGK from '../assets/TGK.jpeg'
import TGK1 from '../assets/projectsPic/TGK1.png'
import TGK2 from '../assets/projectsPic/TGK2.png'
import Notash from '../assets/projectsPic/notash.png'
import Notash1 from '../assets/projectsPic/notash1.png'
import Notash2 from '../assets/projectsPic/notash2.png'

export const projects = [
    {
        color: '#f3fff7',
        bubbleColor: '252, 219, 131',
        image: TGK,
        title: "Toronto Global Kitchen",
        id: 1,
        description: `A modern e-commerce platform built to empower local, immigrant-owned food businesses in Toronto.  
<ul class="list">
  <li>Full-stack application using Next.js (App Router), TypeScript, Tailwind CSS, Zustand, and Sanity</li>
  <li>Dynamic multi-vendor storefront with persistent shopping cart using Zustand</li>
  <li>Headless CMS integration for easy, non-technical product management</li>
  <li>Responsive, accessible design with Tailwind CSS</li>
  <li>Deployed on Vercel with CI/CD pipeline for automated testing and deployment</li>
</ul> `,
        detailedPics: [
            { src: TGK1, alt: 'Toronto Global Kitchen 1' },
            { src: TGK2, alt: 'Toronto Global Kitchen 2' }
        ],
        detailInfo: 
            {
                role: 'Full-Stack Developer',
                techs: 'Next.js, TypeScript, Tailwind CSS, Zustand, Sanity, ESLint',
                year: '2025',
                link: 'https://toronto-global-kitchen.vercel.app',
            }
        
    },
    {
        color: '#f3fff7',
        bubbleColor: '131, 251, 221',
        image: OstiganCard,
        title: "Ostigan",
        id: 2,
        description: `Digital marketplace app built with React Native for Android & iOS.<ul class="list">
   
  <li>Gift cards, premium accounts, and more across regions & currencies</li>
  <li>Fingerprint login option</li>
  <li>SMS login with automatic code reading from keyboard</li>
  <li>JWT-based secure authorization</li>
  <li>Personalized dashboards with multi-level authentication</li>
  <li>Secure payment and wallet system</li>
  <li>Search products with filters for easy navigation</li>
  <li>Favorites (wishlist) feature</li>
  <li>Simple, secure checkout with in-app invoice download</li>
  <li>View & filter purchase history based on status</li>
  <li>In-app ticketing system with file upload and ticket response tracking</li>
  <li>Firebase push notifications with in-app notification center</li>
  <li>OCR card number reading via mobile camera using Google Cloud service</li>
  <li>Bottom tab bar or hamburger menu for easy navigation</li>
  <li>Smooth navigation and user experience</li>
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
                role: 'Mobile Application Developer',
                techs: 'React Native, Typescript, Redux, React Navigation, React Query, Firebase, JWT',
                year: '2023-2024',
                link: 'https://ostigan.com/',
            }
        
    },
    {
        color: '#f5f3f0',
        bubbleColor: '184, 184, 184',
        image: HHFThumb,
        title: "HHF Greek Canadian Archives",
        id: 3,
        description: `A public-facing digital heritage site for a government-funded project at York University. Delivered a visually appealing, fully dynamic website with a CMS that their non-technical staff could easily update.  
<ul class="list">
  <li>Built using Webflow with custom-coded extensions</li>
  <li>Adhered to AODA accessibility standards</li>
  <li>Integrated GSAP for smooth animations</li>
  <li>Implemented dynamic sliders using Swiper.js</li>
  <li>Developed personalized, data-driven storytelling modules with vanilla JavaScript</li>
  <li>Delivered on-time and trained client staff for content management</li>
</ul>`,
        detailedPics: [
            { src: HHF1, alt: 'HHF GCA website 1' },
            { src: HHF2, alt: 'HHF GCA website 2' },
            { src: HHF3, alt: 'HHF GCA website 3' },
            { src: HHF4, alt: 'HHF GCA website 4' },
            { src: HHF5, alt: 'HHF GCA website 5' },
        ],
        detailInfo: 
            {
                role: 'Web developer',
                techs: 'WebFlow, Javascript, GSAP, Swiper.js',
                year: '2025',
                link:`https://hhfgca-archive.webflow.io/`
            }
        
    },
    {
        color: '#f5f3f0',
        bubbleColor: '207, 240, 255',
        image: Notash,
        title: "Vehicle Automation Apps",
        id: 4,
        description:`Developed two integrated mobile applications for automotive systems in vehicles: a Cruise Control System and an Automatic Light Control System.  
<ul class="list">
  <li>Integrated with vehicle’s onboard sensors and actuators</li>
  <li>Stable data transmission using HC-05 Bluetooth module</li>
  <li>Custom handshaking and hex-based packet protocol for precise control and bandwidth efficiency</li>
  <li>GPS integration to display live driving routes</li>
  <li>Secure BLE pairing for system exclusivity</li>
  <li>Developed an intuitive UI enabling users to manage cruise control speed, adjust auto light control range, track driving routes via GPS, and remotely operate their parking space door</li>
</ul>`,
        detailedPics: [
            { src: Notash1, alt: 'Notash Sanat app 1' },
            { src: Notash2, alt: 'Notash sanat app 2' },

        ],
        detailInfo: 
            {
                role: 'Mobile Application Developer',
                techs: 'React Native, React Navigation, Firebase, Context API, BLE',
                year: '2023',
                link:`https://notashan.org/product/notash-cruise-control-set-for-jac-s5-gear-box-eagle-eyes-model/`
            }
        
    },
    {
        color: '#fdeee7',
        bubbleColor: '245, 168, 137',
        image: AtcCard,
        title: "ATC",
        id: 5,
        description: `Designed and developed the corporate website for ATC Holding, the parent organization overseeing multiple subsidiary companies, effectively representing the brand’s identity while supporting internal operational requirements. <ul class="list">
  <li>Collaborated with designers in an agile team to translate Figma prototypes into functional, responsive, and reusable components.</li>
  <li>Implemented bilingual support (English & Persian) using i18n.</li>
  <li>Ensured cross-browser compatibility and mobile-first design.</li>
  <li>Applied Tailwind CSS for styling.</li>
  <li>Optimized page load performance, including image optimization.</li>
  <li>Built with TypeScript for type safety and consistent code.</li>
  <li>Managed version control using GitHub.</li>
</ul>`,
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
            year: '2022',
            link:'https://atcholding.com/'
            }
        
    },
    {
        color: '#fcf5e9',
        bubbleColor: '230, 205, 130',
        image: AgrotaminCard,
        title: "Agrotamin",
        id: 6,
        description:`Designed and developed the website for AgroTamin, a leading grain trading company and one of the top grain importers. Showcased company operations, trading expertise, and detailed storage facility information.
<ul class="list">
  <li>Collaborated with designers to translate Figma prototypes into responsive, reusable components.</li>
  <li>Built with Next.js for optimized performance, server-side rendering (SSR), and SEO-friendly pages.</li>
  <li>Implemented cross-browser compatibility and mobile-first design.</li>
  <li>Added bilingual support using i18n.</li>
  <li>Applied Tailwind CSS for scalable and maintainable styling.</li>
  <li>Optimized page load performance, including image optimization.</li>
  <li>Built with TypeScript for type safety and consistent code.</li>
  <li>Managed version control using GitHub.</li>
</ul>`,
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
            year: '2022',
            link:'https://www.agrotamin.com/en'
            }
        
    },
    {
        color: '#ebebfa',
        bubbleColor: '154, 155, 229',
        image: MehrayanCard,
        title: "Mehrayan",
        id: 7,
        description:`Designed and developed the website for Mehrayan, a technology firm that collaborates with designers and developers to create software, web, and mobile applications for business growth. One of their flagship products is Ostigan. The website reflects their mission and showcases their expertise.
<ul class="list">
  <li>Collaborated with designers to translate Figma prototypes into responsive, reusable components.</li>
  <li>Built with Next.js for optimized performance, server-side rendering (SSR), and SEO-friendly pages.</li>
  <li>Implemented cross-browser compatibility and mobile-first design.</li>
  <li>Added bilingual support (English & Persian) using i18n.</li>
  <li>Implemented challenging animations to enhance user experience.</li>
  <li>Applied Tailwind CSS for scalable and maintainable styling.</li>
  <li>Optimized page load performance, including image optimization.</li>
  <li>Built with TypeScript for type safety and consistent code.</li>
  <li>Managed version control using GitHub.</li>
</ul>`,
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
            year: '2023',
            link:'https://mehrayan.com/'
            }
        
    },
    {
        color: '#fff1e6',
        bubbleColor: '255, 194, 145',
        image: OneandintlCard,
        title: "oneandintl",
        id: 8,
        description:`Designed and developed the website for One and Intel, a well-known trading company specializing in the importation of agricultural products, oils, and grains across multiple countries. The website highlights their import regions, product range, and showcases their global market potential.
<ul class="list">
  <li>Collaborated with designers to translate Figma prototypes into responsive, reusable components.</li>
  <li>Implemented cross-browser compatibility and mobile-first design.</li>
  <li>Optimized page load performance, including image optimization.</li>
  <li>Managed version control using GitHub.</li>
</ul>`,
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
