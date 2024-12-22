"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "NextJS Portfolio Website",
    description:
      "A sleek platform showcasing my skills and achievements.Built with NextJS and styled using TailwindCSS",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl:
      "https://github.com/manugeorge04/Portfolio_Website",
    previewUrl: "https://manuvimal.vercel.app/",
  },
  {
    id: 2,
    title: "Personal AI Assistant",
    description:
      "A RAG based AI assistant answering questions about my skills, hobbies, and personality, with live chat. Built using Python(DJANGO), LangChain, and ChromaDB.",
    image: "/images/projects/2.png",
    tag: ["All", "ML/AI"],
    gitUrl:
      "https://github.com/manugeorge04/PersonaAI",
    previewUrl:
      "https://manuvimal.vercel.app/chat",
  },
  {
    id: 3,
    title: "SpringBoot E-commerce Application",
    description:
      "Scalable platform for seamless online shopping to higlight working of microservices. Built using SpringBoot, Kafka, and MongoDB.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 4,
    title:
      "Computer Vision: Object Retrieval Swarm",
    description:
      "Showcased efficient indoor object retrieval using swarm robotics with computer vision and WebSocket-based real-time communication.",
    image: "/images/projects/4.jpeg",
    tag: ["All", "ML/AI"],
    gitUrl:
      "https://github.com/manugeorge04/Swarm-Robotics",
    previewUrl:
      "https://ieeexplore.ieee.org/document/9225693",
  },
  {
    id: 5,
    title: "QShala: Gamified Learning Platform",
    description:
      "Developed a quiz-based platform for Indian kids, similar to Kahoot, to make learning fun and interactive. As the founding full-stack developer, I architected the web app using ReactJS, Django, and MongoDB",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "https://quiz.qshala.com/",
  },
  {
    id: 6,
    title: "MS Teams Bot - Time Converter",
    description:
      "A Bot Framework-based bot that converts time from IST to any selected timezone within Microsoft Teams. Built using Node.js, ngrok for tunneling, and Azure Bot Framework for deployment and interaction.",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl:
      "https://github.com/manugeorge04/MSTeamsBot-TimeConverter",
    previewUrl: "",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="ML/AI"
          isSelected={tag === "ML/AI"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
