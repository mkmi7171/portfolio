import { motion } from "framer-motion";
import { useParams, Link,useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { projects } from "../components/ProjectsArray";
import InteractiveBackground from "../components/InteractiveBackground";
import { useDarkMode } from "../components/DarkModeContext";
import AnimatedWrapper from "../components/AimatedWrapper";

const ProjectDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const { positionY = 0 } = location.state || {}; 
  const project = projects.find((p) => p.id === parseInt(id));
  const [animationDone, setAnimationDone] = useState(false);

  const { isDarkMode } = useDarkMode(); 

  if (!project) return <div>Project not found</div>;
  const nextProjectIndex = (projects.findIndex((p) => p.id === project.id) + 1) % projects.length;
  const nextProject = projects[nextProjectIndex];

  useEffect(() => {
    const timer = setTimeout(() => setAnimationDone(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const customColors = [
    project.bubbleColor,
    project.bubbleColor,
    project.color
  ];



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
    <div className="relative h-screen overflow-hidden flex justify-between items-center"
      style={{ backgroundColor: isDarkMode ? "#191818" : project.color }}>
      <InteractiveBackground colors={customColors} />
      <div className="flex-[0.85] h-full pt-32 px-8 z-40">
        <AnimatedWrapper duration={1} delay={0.2}>
          <h1 className="text-6xl font-safiro-reg-i number">{project.title}</h1>
        </AnimatedWrapper>
        <AnimatedWrapper duration={1} delay={0.3}>
          <div dangerouslySetInnerHTML={{ __html: project.description }} className="py-8 tracking-tight" />
        </AnimatedWrapper>
        <AnimatedWrapper duration={1} delay={0.4}>
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
        </AnimatedWrapper>

      </div>

      <div className={`z-40 slider h-screen pt-32 pb-8 w-[40%] flex-[1.3] ${animationDone ? "overflow-scroll" : ""
          }`}
      >
        <motion.div
          className="flex items-center justify-center w-[580px] h-[320px]"
        >
          <motion.div
            layoutId={`project-image-${project.id}`}
            className="relative w-[580px] h-[320px] overflow-hidden "
            initial={{ y: positionY, borderRadius: "50%" }}
            animate={{ y: 0, borderRadius: "16px" }}
            transition={{ duration: 0.6 }}
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
              <AnimatedWrapper duration={0.8}>
              <img
                key={index}
                src={image.src}
                alt={image.alt}
                className="w-[580px] h-[320px] object-cover object-center rounded-2xl mt-8"
              />
        </AnimatedWrapper>

          ))}
      </div>

      <div className="z-40 flex-[0.85] flex flex-col gap-8 h-full pt-32 ml-12">
        <AnimatedWrapper duration={1} delay={0.2}>
          <div className="flex items-center">
            <span className="text-6xl tracking-tight number">0{project.id}</span>
            <div className="w-0.5 mx-8 h-16 bg-gray-400 rotate-45"></div>
            <span className="text-6xl tracking-tight number">06</span>
          </div>
        </AnimatedWrapper>
        <AnimatedWrapper duration={1} delay={0.3}>
          <div className="flex flex-col gap-3">
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
        </AnimatedWrapper>

      </div>
      {animationDone && <Link to={`/projects/${nextProject?.id}`} className=" z-40 absolute right-8 bottom-8">
        <div
          className="w-56 h-56 rounded-full next-project"
          style={{
            backgroundImage: `url(${nextProject?.image || ''})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <motion.div
            layoutId={`project-image-${nextProject?.id}`}
            className="w-full h-full rounded-full overflow-hidden"
            initial={{ borderRadius: "50%" }}
            animate={{ borderRadius: "16px" }}
            transition={{ duration: 0.6 }}
          ></motion.div>
        </div>
      </Link>}
    </div>
  );
};

export default ProjectDetail;
