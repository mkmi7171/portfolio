// import ProjectCard from "./ProjectCard"

// export default function Projects() {
//     return (
//         <div>
//             <div class="grid grid-cols-3 grid-rows-4 gap-0">
//                 <div class="col-span-2 row-span-2 bg-red-200">
//                     <ProjectCard />
//                 </div>
//                 <div class="col-start-3 row-start-1 row-end-2 bg-blue-200">div2</div>
//                 <div class="col-start-3 row-start-2 row-end-3 bg-green-200">div3</div>
//                 <div class="col-start-1 row-start-3 row-end-4 bg-yellow-200">div4</div>
//                 <div class="col-start-2 row-start-3 row-end-4 bg-purple-200">div5</div>
//                 <div class="col-start-3 row-start-3 row-end-5 bg-pink-200">div6</div>
//                 <div class="col-span-2 row-start-4 row-end-5 bg-orange-200">div7</div>
//             </div>
//         </div>
//     )
// }


import OstiganCard from "../assets/ostigan.png";
import Mehrayan from '../assets/mehrayan.png'
import Atc from '../assets/atc.png'
import Oneandintl from '../assets/oneandintl.png'
import Agrotamin from '../assets/agrotamin.png'
import ProjectCard from "./ProjectCard"


export default function Projects() {
    const projects = [
        { image: OstiganCard, title: "Ostigan" },
        { image: Mehrayan, title: "Mehrayan" },
        { image: Atc, title: "ATC" },
        { image: Agrotamin, title: "agrotamin" },
        { image: Oneandintl, title: "Oneandintl" },
    ];

    const getGridPosition = (index) => {
        switch (index) {
            case 0:
                return "col-span-3 row-span-3 h-[576px]";
            case 1:
                return "col-span-2 row-span-2 col-start-4 h-[384px]";
            case 2:
                return "col-span-3 row-span-3 col-start-1 row-start-4 h-[576px]";
            case 3:
                return "col-span-2 row-span-2 col-start-4 row-start-3 h-[384px]";
            case 4:
                return "col-span-2 row-span-2 col-start-4 row-start-5 h-[384px]";
            default:
                return "";
        }
    };

    return (
        <div className="p-24">
            <h4 className="text-3xl text-whiteText">Selected Projects</h4>
            <div className="grid grid-cols-5 grid-rows-6 gap-y-8 gap-x-16">
                {projects.map((project, index) => (
                    <div key={index} className={`${getGridPosition(index)} flex items-center`}>
                        <ProjectCard image={project.image} title={project.title} />
                    </div>
                ))}
            </div>
        </div>
    );
}
