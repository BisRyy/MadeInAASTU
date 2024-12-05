"use client";
import React from "react";
import Container from "@/components/Layout/container";
import ProjectCard from "@/components/project-card";

export const projectsMock = [
  {
    id: "1",
    image_url: "https://via.placeholder.com/500x300?text=Project+1",
    description:
      "This is a description for Project 1. It is concise and informative.",
    title: "Project One",
    tags: ["React", "Next.js", "Tailwind"],
    github_repo: "https://github.com/example/project-one",
    live_demo: "https://project-one.example.com",
    telegram_channel: "https://t.me/projectonechannel",
    likes: 120,
    comments: 45,
  },
  {
    id: "2",
    image_url: "https://via.placeholder.com/500x300?text=Project+2",
    description:
      "A brief overview of Project 2, highlighting its purpose and features.",
    title: "Project Two",
    tags: ["TypeScript", "Firebase", "GraphQL"],
    github_repo: "https://github.com/example/project-two",
    live_demo: "https://project-two.example.com",
    telegram_channel: "https://t.me/projecttwochannel",
    likes: 89,
    comments: 30,
  },
  {
    id: "3",
    image_url: "https://via.placeholder.com/500x300?text=Project+3",
    description:
      "Project 3 focuses on modern UI/UX design and advanced performance.",
    title: "Project Three",
    tags: ["UI/UX", "Design", "Performance"],
    github_repo: "https://github.com/example/project-three",
    live_demo: "https://project-three.example.com",
    telegram_channel: "https://t.me/projectthreechannel",
    likes: 250,
    comments: 120,
  },
  {
    id: "4",
    image_url: "https://via.placeholder.com/500x300?text=Project+4",
    description:
      "Project 4 simplifies team collaboration with real-time features.",
    title: "Project Four",
    tags: ["Collaboration", "WebRTC", "Node.js"],
    github_repo: "https://github.com/example/project-four",
    live_demo: "https://project-four.example.com",
    telegram_channel: "https://t.me/projectfourchannel",
    likes: 150,
    comments: 60,
  },
  {
    id: "5",
    image_url: "https://via.placeholder.com/500x300?text=Project+5",
    description:
      "A machine learning-powered project that automates data analysis.",
    title: "Project Five",
    tags: ["Machine Learning", "Python", "Pandas"],
    github_repo: "https://github.com/example/project-five",
    live_demo: "https://project-five.example.com",
    telegram_channel: "https://t.me/projectfivechannel",
    likes: 300,
    comments: 200,
  },
  {
    id: "6",
    image_url: "https://via.placeholder.com/500x300?text=Project+6",
    description:
      "Project 6 focuses on sustainability with eco-friendly solutions.",
    title: "Project Six",
    tags: ["Sustainability", "IoT", "Renewable Energy"],
    github_repo: "https://github.com/example/project-six",
    live_demo: "https://project-six.example.com",
    telegram_channel: "https://t.me/projectsixchannel",
    likes: 175,
    comments: 75,
  },
];

const ProjectsContainer = () => {
  return (
    <div id="projects">
      <Container>
        <div className="text-center py-8">
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
