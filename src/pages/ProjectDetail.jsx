import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { projects } from "../components/ProjectsArray";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) return <div>Project not found</div>;

  const Arrow = ({ className }) => {
    return <div className={`transition-all duration-500 ease-in-out ${className}`}>
      <svg data-v-21a5ab71="" width="20" height="12" viewBox="0 0 18 17" fill="none" class="icon-svg | w-[1.8rem] h-auto"><path data-v-21a5ab71="" d="M4.75928 4.96442L13.3288 4.50811L12.5375 12.7426" class="stroke-current"></path><path data-v-21a5ab71="" d="M13.3857 4.39875L4.90039 12.884" class="stroke-current"></path></svg>
    </div>
  }

  return (
    <div className="h-screen bg-rose-300 flex items-center">
      <div className="border">
        <h1 className="text-6xl font-safiro-reg-i number">{project.title}</h1>
        <p className="w-1/2 py-8 tracking-tight leading-5">Improving lives and increasing
          happiness through diverse STEM
          talent leadership.</p>
        <div className='uppercase overflow-hidden relative group border w-28 h-8 border-gray-800 px-2 py-1 rounded-xl'>
          <div className="flex items-center">
            <p className='absolute top-2 text-sm group-hover:absolute group-hover:-top-[55%] group-hover:tracking-widest tracking-tighter transition-all duration-300 ease-in-out group-hover:opacity-0'>
              Visit
            </p>
            <Arrow className={`absolute top-2 right-1 group-hover:-top-full group-hover:-right-4 group-hover:scale-50`} />
          </div>
          <p className='text-sm absolute -bottom-[50%] group-hover:bottom-1 transition-all tracking-widest group-hover:tracking-tighter duration-300 ease-in-out opacity-0 group-hover:opacity-100'>
            visit
          </p>
          <Arrow className={'absolute top-full right-4 scale-50 group-hover:top-2 group-hover:right-1 group-hover:scale-100'} />
        </div>
      </div>
      <div className="slider">
        <motion.div
          className="flex flex-col items-center justify-center h-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            layoutId={`project-image-${project.id}`} 
            className="relative w-[500px] h-[300px] rounded-lg overflow-hidden"
            initial={{ borderRadius: "50%" }} 
            animate={{ borderRadius: "16px" }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
      <div className="px-4">
        <div className="flex">
          <span className=" text-6xl tracking-tight number">0{project.id}</span>
          <div className="w-0.5 mx-8 h-16 bg-gray-400 rotate-45"></div>
          <span className="text-6xl tracking-tight  number">06</span>
        </div>
        <div>
          <div>
            <p className="number font-bold font-safiro-reg-i">Role</p>
            <span className="text-sm">Frontend</span>
          </div>
          <div>
            <p className="number font-bold font-safiro-reg-i">Technologies</p>
            <span className="text-sm">React, Next , Typescript</span>
          </div>
          <div>
            <p className="number font-bold font-safiro-reg-i">Year</p>
            <span className="text-sm">2022</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
