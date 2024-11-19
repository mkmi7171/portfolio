import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { projects } from "../components/ProjectsArray";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));
  const [animationDone, setAnimationDone] = useState(false);

  if (!project) return <div>Project not found</div>;
  const nextProjectIndex = (projects.findIndex((p) => p.id === project.id) + 1) % projects.length;
  const nextProject = projects[nextProjectIndex];

  useEffect(() => {
    const timer = setTimeout(() => setAnimationDone(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const Arrow = ({ className }) => {
    return (
      <div className={`transition-all duration-500 ease-in-out ${className}`}>
        <svg width="20" height="12" viewBox="0 0 18 17" fill="none" className="icon-svg | w-[1.8rem] h-auto">
          <path d="M4.75928 4.96442L13.3288 4.50811L12.5375 12.7426" className="stroke-current"></path>
          <path d="M13.3857 4.39875L4.90039 12.884" className="stroke-current"></path>
        </svg>
      </div>
    );
  };

  return (
    <div className="relative h-screen bg-rose-300 overflow-hidden flex justify-between items-center">
      <div className="flex-[0.85] h-full pt-32 px-8">
        <h1 className="text-6xl font-safiro-reg-i number">{project.title}</h1>
        <p className="py-8 tracking-tight leading-5">
         {project.description}
        </p>
        <div className="uppercase overflow-hidden relative group border w-28 h-8 border-gray-800 px-2 py-1 rounded-xl">
          <div className="flex items-center">
            <p className="absolute top-2 text-sm group-hover:absolute group-hover:-top-[55%] group-hover:tracking-widest tracking-tighter transition-all duration-300 ease-in-out group-hover:opacity-0">
              Visit
            </p>
            <Arrow
              className={`absolute top-2 right-1 group-hover:-top-full group-hover:-right-4 group-hover:scale-50`}
            />
          </div>
          <p className="text-sm absolute -bottom-[50%] group-hover:bottom-1 transition-all tracking-widest group-hover:tracking-tighter duration-300 ease-in-out opacity-0 group-hover:opacity-100">
            visit
          </p>
          <Arrow
            className={
              "absolute top-full right-4 scale-50 group-hover:top-2 group-hover:right-1 group-hover:scale-100"
            }
          />
        </div>
      </div>

      <div className={`slider h-screen p-8 w-[40%] flex-[1.3] ${animationDone ? "overflow-y-scroll" : ""
          }`}
      >
        <motion.div
          className="flex items-center justify-center w-[580px] h-[320px]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }} 
        >
          <motion.div
            layoutId={`project-image-${project.id}`}
            className="relative w-[580px] h-[320px] rounded-lg overflow-hidden"
            initial={{ borderRadius: "50%" }}
            animate={{ borderRadius: "16px" }}
            transition={{ duration: 1 }}
          >
            <img
              src={project.detailedPics[0].src}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>

        {animationDone &&
          project.detailedPics.slice(1).map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className="w-[580px] h-[320px] object-cover object-center rounded-2xl mt-8"
            />
          ))}
      </div>

      <div className="flex-[0.85] pt-32 pb-4 h-full flex flex-col justify-between  items-center">
        <div className="flex items-center">
          <span className="text-6xl tracking-tight number">0{project.id}</span>
          <div className="w-0.5 mx-8 h-16 bg-gray-400 rotate-45"></div>
          <span className="text-6xl tracking-tight number">06</span>
        </div>
        <div>
          <div>
            <p className="number font-bold font-safiro-reg-i">Role</p>
            <span className="text-sm">{project.detailInfo.role}</span>
          </div>
          <div>
            <p className="number font-bold font-safiro-reg-i">Technologies</p>
            <span className="text-sm">{project.detailInfo.techs}</span>
          </div>
          <div>
            <p className="number font-bold font-safiro-reg-i">Year</p>
            <span className="text-sm">{project.detailInfo.year}</span>
          </div>
        </div>
        <Link to={`/projects/${nextProject?.id}`}>
          <div
            className="w-56 h-56 rounded-full border next-project"
            style={{
              backgroundImage: `url(${nextProject?.image || ''})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <motion.div
              layoutId={`project-image-${nextProject?.id}`}
              className="w-full h-full rounded-full overflow-hidden"
            ></motion.div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetail;
