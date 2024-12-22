"use client";
import Image from "next/image";
import { useState, useTransition } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Python - Django/Flask/FastAPI</li>
        <li>Java - Springboot</li>
        <li>Node.js/Express</li>
        <li>PostgreSQL/MongoDB</li>
        <li>Kafka/Redis</li>
        <li>JavaScript/TypeScript</li>
        <li>React/NextJS</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          Arizona State University | Master of
          Science in Computer Science{" "}
        </li>
        <li>
          PES University | Bachelor of Technology
        </li>
      </ul>
    ),
  },
  {
    title: "Publications",
    id: "publications",
    content: (
      <ul className="list-disc pl-2">
        <li>
          <a
            href="https://ieeexplore.ieee.org/document/9225693"
            target="_blank"
            className="hover:font-bold"
          >
            Object Retrieval in an Indoor
            Environment using Swarm Intelligence
          </a>
        </li>
        <li>
          <a
            href="https://link.springer.com/chapter/10.1007/978-3-030-63467-4_1"
            target="_blank"
            className="hover:font-bold"
          >
            Emotion Recognition in Sentences - A
            Recurrent Neural Network Approach
          </a>
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 min-h-[760px]">
        <Image
          src="/images/about-image.png"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">
            About Me
          </h2>
          <p className="text-base lg:text-lg">
            I am a full-stack developer with a
            passion for creating interactive,
            responsive web applications, scalable
            web applications and backend services.
            With expertise across the entire tech
            stack, I bring hands-on experience in
            both front-end and back-end
            technologies—particularly React,
            Redux, Node.js, Django, Python and
            Spring Boot.I am a quick learner and I
            am always looking to expand my
            knowledge and skill set. I am a team
            player and I am excited to work with
            others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() =>
                handleTabChange("skills")
              }
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() =>
                handleTabChange("education")
              }
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() =>
                handleTabChange("publications")
              }
              active={tab === "publications"}
            >
              {" "}
              Publications{" "}
            </TabButton>
          </div>
          <div className="mt-8 min-h-[170px] md:min-h-0">
            {
              TAB_DATA.find((t) => t.id === tab)
                .content
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
