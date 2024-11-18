import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { projects } from "../components/ProjectsArray";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) return <div>Project not found</div>;

  return (
    <motion.div
      className="flex flex-col items-center justify-center h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        layoutId={`project-image-${project.id}`} // Shared ID for animation
        className="relative w-[500px] h-[300px] rounded-lg overflow-hidden"
        initial={{ borderRadius: "50%" }} // Start as a circle
        animate={{ borderRadius: "16px" }} // Morph into a rectangle
        transition={{ duration: 0.8 }}
      >
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </motion.div>
      <h1 className="mt-6 text-2xl font-bold">{project.title}</h1>
      <p className="mt-4">Detailed description of the project goes here.</p>
    </motion.div>
  );
};

export default ProjectDetail;
