import OstiganCard from "../assets/ostiganThumb.png";
import OstiganCard2 from "../assets/ostiganThumb2.png";
import MehrayanCard from '../assets/mehrayanThumb.png'
import MehrayanCard2 from '../assets/mehrayanThumb2.png'
import AtcCard from '../assets/atcThumb.png'
import AtcCard2 from '../assets/atcThumb2.png'
import OneandintlCard from '../assets/oneandintlThumb.png'
import OneandintlCard2 from '../assets/oneandintlThumb2.png'
import AgrotaminCard from '../assets/agroThumb.png'
import AgrotaminCard2 from '../assets/agroThumb2.png'
import ProjectCard from "./ProjectCard"


export default function Projects() {
    const projects = [
        { color: '#00BC8D', image: OstiganCard, image2: OstiganCard2, title: "Ostigan" },
        { color: '#131546', image: MehrayanCard, image2: MehrayanCard2, title: "Mehrayan" },
        { color: '#F07646', image: AtcCard, image2: AtcCard2, title: "ATC" },
        { color: '#ECC77D', image: AgrotaminCard, image2: AgrotaminCard2, title: "agrotamin" },
        { color: '#36512A', image: OneandintlCard, image2: OneandintlCard2, title: "Oneandintl" },
    ];


    return (
        <div className="p-24">
            <h4 className="text-3xl text-whiteText">Selected Projects</h4>
            <div>
                {projects.map((project, index) => (
                    <div key={index} className={`justify-center h-screen flex items-center`}>
                        <ProjectCard color={project.color} title={project.title} image={project.image} index={index} image2={project.image2} />
                    </div>
                ))}
            </div>
        </div>
    );
}
