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
import Agro1 from '../assets/projectsPic/agro1.png'
import Agro2 from '../assets/projectsPic/agro2.png'
import Agro3 from '../assets/projectsPic/agro3.png'
import Agro4 from '../assets/projectsPic/agro4.png'
import Atc1 from '../assets/projectsPic/atc1.png'
import Atc2 from '../assets/projectsPic/atc2.png'
import Atc3 from '../assets/projectsPic/atc3.png'
import Atc4 from '../assets/projectsPic/atc4.png'
import One1 from '../assets/projectsPic/one1.png'
import One2 from '../assets/projectsPic/one2.png'
import One3 from '../assets/projectsPic/one3.png'
import One4 from '../assets/projectsPic/one4.png'
import MehrayanCard from '../assets/mehrayanThumb.png'
import AtcCard from '../assets/atcThumb.png'
import OneandintlCard from '../assets/oneandintlThumb.png'
import AgrotaminCard from '../assets/agroThumb.jpeg'
import MahsaCard from '../assets/mahsa.jpeg'

export const projects = [
    {
        color: '#00BC8D',
        image: OstiganCard,
        title: "Ostigan",
        id: 1,
        detailedPics: [
            { src: Ostigan5, alt: 'Ostigan feature 5' },
            { src: Ostigan1, alt: 'Ostigan feature 1' },
            { src: Ostigan2, alt: 'Ostigan feature 2' },
            { src: Ostigan3, alt: 'Ostigan feature 3' },
            { src: Ostigan4, alt: 'Ostigan feature 4' }
        ]
    },
    {
        color: '#F07646',
        image: AtcCard,
        title: "ATC",
        id: 2,
        detailedPics: [
            { src: Atc1, alt: 'ATC feature 1' },
            { src: Atc2, alt: 'ATC feature 2' },
            { src: Atc3, alt: 'ATC feature 3' },
            { src: Atc4, alt: 'ATC feature 4' },
        ]
    },
    {
        color: '#ECC77D',
        image: AgrotaminCard,
        title: "Agrotamin",
        id: 3,
        detailedPics: [
            { src: Agro1, alt: 'Agrotamin feature 1' },
            { src: Agro2, alt: 'Agrotamin feature 2' },
            { src: Agro3, alt: 'Agrotamin feature 3' },
            { src: Agro4, alt: 'Agrotamin feature 4' },
        ]
    },
    {
        color: '#F15B28',
        image: MehrayanCard,
        title: "Mehrayan",
        id: 4,
        detailedPics: [
            { src: Mehrayan1, alt: 'Mehrayan feature 1' },
            { src: Mehrayan2, alt: 'Mehrayan feature 2' },
            { src: Mehrayan3, alt: 'Mehrayan feature 3' },
            { src: Mehrayan4, alt: 'Mehrayan feature 4' },
        ]
    },
    {
        color: '#7D01BC',
        image: MahsaCard,
        title: "Portfolio",
        id: 5,
        detailedPics: [
            { src: MahsaCard, alt: 'Portfolio feature 1' },
        ]
    },
    {
        color: '#7D01BC',
        image: OneandintlCard,
        title: "oneandintl",
        id: 6,
        detailedPics: [
            { src: One1, alt: 'oneandintl feature 1' },
            { src: One2, alt: 'oneandintl feature 2' },
            { src: One3, alt: 'oneandintl feature 3' },
            { src: One4, alt: 'oneandintl feature 4' },
        ]
    }
];
