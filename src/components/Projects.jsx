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


import OstiganCard from "../assets/ostigan3.png";
import Mehrayan from '../assets/mehrayan.png'
import Atc from '../assets/ATC.png'
import ProjectCard from "./ProjectCard"
import Agrotamin from '../assets/agrotamin.png'

export default function Projects() {
    const projects = [
        { image: OstiganCard, title: "Ostigan" },
        { image: Mehrayan, title: "Mehrayan" },
        { image: Atc, title: "ATC" },
        { image: Agrotamin, title: "ATC" },
    ];

    return (
        <div className="p-8">
            <h4 className="text-3xl text-whiteText ">Selected Projects</h4>
            <div className="grid grid-cols-3 grid-rows-4 gap-6">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className={`${index === 0 ? 'col-span-2 row-span-2' : ''
                            } `
                        }
                    >
                        <ProjectCard image={project.image} title={project.title} />
                    </div>
                ))}
            </div>
        </div>
    );
}
