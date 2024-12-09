"use client";
import React from "react";
import Container from "@/components/Layout/container";
import ProjectCard from "@/components/project-card";

export const projectsMock = [
  {
    id: "1",
    image_url: "/Projects/AASTUStudentsApp.jpg",
    description:
      "A productivity and social networking platform tailored for the students of Addis Ababa Science and Technology University.",
    title: "AASTU Students App",
    tags: ["Flutter", "Flutterflow", "Firebase"],
    github_repo: "https://github.com/gemechis-elias/aastu-students-app-v3",
    live_demo: "https://gemechis.dev/aastu_students_app",
    telegram_channel: "https://t.me/innovate_aastu",
  },
  {
    id: "2",
    image_url: "/Projects/Afro.jpg",
    description:
      "A fashion e-commerce platform designed to provide users with a seamless shopping experience.",
    title: "Afro Fashion",
    tags: ["Flutter", ".NET", "Next.js"],
    github_repo: "",
    live_demo: "https://afro.bisry.me",
    telegram_channel: "https://t.me/InnovateFusion",
  },
  {
    id: "3",
    image_url: "/Projects/EarlyVet.jpg",
    description:
      "A livestock health monitoring system that leverages sensors and cloud-based machine learning to track key health metrics.",
    title: "Early Vet",
    tags: ["UI/UX", "Design", "Performance"],
    github_repo: "",
    live_demo: "",
    telegram_channel: "https://t.me/InnovateFusion",
  },
  {
    id: "4",
    image_url: "https://via.placeholder.com/500x300?text=Your+Project",
    description:
      "This is a space left for you, what are you waiting for, add your project here, its not gonna be free forever",
    title: "Your Project",
    tags: ["ADD", "YOUR", "PROJECT"],
    github_repo: "/apply",
    live_demo: "/apply",
    telegram_channel: "/apply",
  },
];

const ProjectsContainer = () => {
  return (
    <div id="projects">
      <Container>
        <div className="text-center py-8 text-primary">
          <h2 className="text-3xl font-bold mb-2">Our Featured Projects</h2>
          <p className="text-gray-500">
            Explore some of our most impactful and innovative projects, crafted
            with the latest technologies and a passion for excellence.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 py-6">
          {projectsMock.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ProjectsContainer;
