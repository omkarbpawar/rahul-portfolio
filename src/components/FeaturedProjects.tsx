// src/components/FeaturedProjects.tsx
import React from 'react';
import ProjectCard from './ProjectCard';

interface Project {
  name: string;
  description: string;
  techStack: string[];
  link: string;
}

interface FeaturedProjectsProps {
  projects: Project[];
}

const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ projects }) => {
  return (
    <section id="featured-projects" className="bg-gray-100 py-10 px-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Featured Projects</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            name={project.name}
            description={project.description}
            techStack={project.techStack}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
