
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss, SiRedux, SiReactquery, SiFirebase, SiJsonwebtokens, SiAxios } from "react-icons/si";
export const skills = [
  { name: "React.js", icon: <FaReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "React Native", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "Redux", icon: <SiRedux /> },
  { name: "Zustand", icon: ""},
  { name: "React Query", icon: <SiReactquery /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "JWT", icon: <SiJsonwebtokens /> },
  { name: "CI/CD", icon:  ""},
  { name: "Git", icon: <FaGitAlt /> },
  { name: "REST APIs", icon: <SiAxios /> },
];
export default function Skills() {
    return(
      <div className="my-24 px-4">
              <h3 className="text-base sm:text-lg md:text-xl xl:text-2xl font-safiro-reg-i number text-center uppercase mb-10">my skills are ...</h3>
<div className=" w-full lg:w-11/12 mx-auto flex flex-wrap justify-center">
  {skills.map((skill, index) => (
    <div className="gap-2 border-[0.5px] border-black rounded-xl px-1 flex justify-center text-center min-w-32 font-safiro-reg-i items-center wrap m-1 lg:my-2">
     {skill.icon}
<p>{skill.name}</p> 
    </div>
  ))}
</div>
      </div>
    )
}